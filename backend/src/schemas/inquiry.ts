import { z } from "zod";

export const inquiryInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  company: z.string().trim().min(2).max(200),
  interest: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(4000),
});
