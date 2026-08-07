import { Router } from "express";
import { Inquiry } from "../models/Inquiry.js";
import { inquiryInput } from "../schemas/inquiry.js";

const router = Router();

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
