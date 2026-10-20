"use server";

import { z } from "zod";

import { SITE } from "@/config/site";
import type { ActionResult } from "@/types/action-result";

import { contactMessageSchema } from "../schemas/contact.schema";
import { contactInbox } from "../server/contact.repository";

/**
 * Public enquiry form: no authentication by design, so input is strictly validated
 * and bot submissions (honeypot filled) are accepted silently and dropped.
 */
export async function sendContactMessageAction(input: unknown): Promise<ActionResult<{ received: true }>> {
  const parsed = contactMessageSchema.safeParse(input);

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    if (fieldErrors.companyUrl) return { success: true, data: { received: true } };
    return { success: false, error: "Check the highlighted fields and try again.", fieldErrors };
  }

  const { name, email, phone, organisation, projectType, message } = parsed.data;

  try {
    await contactInbox.deliver({
      name,
      email,
      phone,
      organisation,
      projectType,
      message,
      receivedAt: new Date().toISOString(),
    });
    return { success: true, data: { received: true } };
  } catch (error) {
    console.error("[contact] Delivery failed", error);
    return {
      success: false,
      error: `Your message wasn't sent. Try again, or email ${SITE.contact.email} directly.`,
    };
  }
}
