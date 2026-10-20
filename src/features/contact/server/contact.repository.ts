import "server-only";

import type { ContactMessage } from "../types/contact.types";

/** Where contact messages are delivered. Swap the implementation (email, CRM, database) without touching the action. */
export interface ContactInbox {
  deliver(message: ContactMessage): Promise<void>;
}

// Placeholder until an email or CRM provider is chosen: records the enquiry in the server log.
const serverLogInbox: ContactInbox = {
  async deliver(message) {
    console.info("[contact] New enquiry", {
      name: message.name,
      email: message.email,
      phone: message.phone,
      organisation: message.organisation,
      projectType: message.projectType,
      receivedAt: message.receivedAt,
      messageLength: message.message.length,
    });
  },
};

export const contactInbox: ContactInbox = serverLogInbox;
