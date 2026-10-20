import { z } from "zod";

import { PROJECT_TYPES } from "../constants";

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80, "Use 80 characters or fewer."),
  email: z.string().trim().pipe(z.email("Enter an email address like name@company.co.tz.")),
  phone: z
    .string()
    .trim()
    .max(20, "Use 20 characters or fewer.")
    .regex(/^[+\d\s()-]*$/, "Use digits, spaces and + only."),
  organisation: z.string().trim().max(120, "Use 120 characters or fewer."),
  projectType: z.union([z.enum(PROJECT_TYPES), z.literal("")], { error: "Choose one of the listed options." }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your project (10 characters or more).")
    .max(2000, "Keep your message under 2,000 characters."),
  // Honeypot: hidden from people, so any value means a bot filled the form.
  companyUrl: z.string().max(0),
});
