"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"}/api/inquiries`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      if (!response.ok) throw new Error("Request failed");
      form.reset(); setStatus("sent");
    } catch { setStatus("error"); }
  }
  return (
    <form className="inquiry-form route-inquiry-form" onSubmit={submit}>
      <label><span>Your name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label><span>Work email</span><input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></label>
      <label><span>Company</span><input name="company" required autoComplete="organization" placeholder="Company name" /></label>
      <label><span>Area of interest</span><select name="interest" defaultValue="Antimony supply"><option>Antimony supply</option><option>Compliance & documentation</option><option>Processing & refining</option><option>Inspection & certification</option><option>Logistics & delivery</option></select></label>
      <label className="full-field"><span>How can we help?</span><textarea name="message" rows={6} required placeholder="Material, specification, quantity, destination, or supply challenge" /></label>
      <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send inquiry"} <span>→</span></button>
      <p className={`form-status ${status}`} aria-live="polite">{status === "sent" && "Thank you. Your inquiry has been received."}{status === "error" && <>The local API is offline. Please email <a href="mailto:sales@wohnensiam.com">sales@wohnensiam.com</a>.</>}</p>
    </form>
  );
}
