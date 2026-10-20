"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { sendContactMessageAction } from "../actions/send-contact-message.action";
import { contactMessageSchema } from "../schemas/contact.schema";
import type { ContactMessageInput } from "../types/contact.types";

const EMPTY_FORM: ContactMessageInput = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  projectType: "",
  message: "",
  companyUrl: "",
};

type SubmitStatus = { state: "idle" } | { state: "sent" } | { state: "failed"; error: string };

/** Owns contact form state: client validation, submission through the Server Action, and server field errors. */
export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: EMPTY_FORM,
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit((values) => {
    startTransition(async () => {
      const result = await sendContactMessageAction(values);

      if (result.success) {
        form.reset(EMPTY_FORM);
        setStatus({ state: "sent" });
        return;
      }

      for (const [field, messages] of Object.entries(result.fieldErrors ?? {})) {
        const [first] = messages;
        if (field in EMPTY_FORM && first) {
          form.setError(field as keyof ContactMessageInput, { message: first });
        }
      }
      setStatus({ state: "failed", error: result.error });
    });
  });

  const startOver = () => setStatus({ state: "idle" });

  return { form, onSubmit, isPending, status, startOver };
}
