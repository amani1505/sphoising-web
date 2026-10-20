import type { z } from "zod";

import type { contactMessageSchema } from "../schemas/contact.schema";

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

export type ContactMessage = Omit<ContactMessageInput, "companyUrl"> & {
  receivedAt: string;
};
