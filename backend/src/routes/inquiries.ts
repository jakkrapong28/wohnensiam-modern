import { Router } from "express";
import { z } from "zod";
import { Inquiry } from "../models/Inquiry.js";

const router = Router();

const inquiryInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  company: z.string().trim().min(2).max(200),
  interest: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(4000),
});

router.post("/", async (request, response, next) => {
  try {
    const parsed = inquiryInput.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({
        ok: false,
        message: "Please check the submitted information.",
        issues: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const inquiry = await Inquiry.create(parsed.data);
    response.status(201).json({ ok: true, id: inquiry.id });
  } catch (error) {
    next(error);
  }
});

export default router;
