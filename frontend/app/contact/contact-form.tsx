"use client";

import { FormEvent, useState } from "react";

type ContactFormCopy = {
  name: string;
  workEmail: string;
  companyName: string;
  interest: string;
  message: string;
  send: string;
  sending: string;
};

const defaultCopy: ContactFormCopy = {
  name: "Your name",
  workEmail: "Work email",
  companyName: "Company",
  interest: "Area of interest",
  message: "How can we help?",
  send: "Send inquiry",
  sending: "Sending…",
};

export function ContactForm({ copy = defaultCopy, className = "route-inquiry-form", messageRows = 6 }: { copy?: ContactFormCopy; className?: string; messageRows?: number }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className={`inquiry-form${className ? ` ${className}` : ""}`} onSubmit={submit}>
      <label><span>{copy.name}</span><input name="name" required autoComplete="name" placeholder={copy.name} /></label>
      <label><span>{copy.workEmail}</span><input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></label>
      <label><span>{copy.companyName}</span><input name="company" required autoComplete="organization" placeholder={copy.companyName} /></label>
      <label><span>{copy.interest}</span><select name="interest" defaultValue="Antimony supply"><option>Antimony supply</option><option>Compliance & documentation</option><option>Processing & refining</option><option>Inspection & certification</option><option>Logistics & delivery</option></select></label>
      <label className="full-field"><span>{copy.message}</span><textarea name="message" rows={messageRows} required placeholder={copy.message} /></label>
      <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? copy.sending : copy.send} <span>→</span></button>
      <p className={`form-status ${status}`} aria-live="polite">{status === "sent" && "Thank you. Your inquiry has been received."}{status === "error" && <>The local API is offline. Please email <a href="mailto:sales@wohnensiam.com">sales@wohnensiam.com</a>.</>}</p>
    </form>
  );
}
