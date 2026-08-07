import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { inquiryInput } from "../src/schemas/inquiry.js";

const validInquiry = {
  name: "Jane Buyer",
  email: "jane@example.com",
  company: "Example Industries",
  interest: "Antimony supply",
  message: "Please share specifications and delivery options.",
};

describe("inquiryInput", () => {
  it("accepts and normalizes a valid inquiry", () => {
    const result = inquiryInput.parse({ ...validInquiry, name: "  Jane Buyer  " });

    assert.equal(result.name, "Jane Buyer");
    assert.equal(result.email, validInquiry.email);
  });

  it("rejects malformed email addresses", () => {
    const result = inquiryInput.safeParse({ ...validInquiry, email: "not-an-email" });

    assert.equal(result.success, false);
    if (!result.success) assert.ok(result.error.flatten().fieldErrors.email);
  });

  it("rejects messages that are too short", () => {
    const result = inquiryInput.safeParse({ ...validInquiry, message: "Too short" });

    assert.equal(result.success, false);
    if (!result.success) assert.ok(result.error.flatten().fieldErrors.message);
  });
});
