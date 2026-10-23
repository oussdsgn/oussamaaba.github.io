"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Errors = Partial<Record<"first_name" | "last_name" | "email" | "message", string>>;

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!String(d.get("first_name")).trim()) e.first_name = "Please add your first name.";
  if (!String(d.get("last_name")).trim()) e.last_name = "Please add your last name.";
  if (!/^\S+@\S+\.\S+$/.test(String(d.get("email")))) e.email = "That email doesn’t look right.";
  if (String(d.get("message")).trim().length < 10) e.message = "Tell me a little more (10+ characters).";
  return e;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const d = new FormData(form);
    const e = validate(d);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const name = `${d.get("first_name")} ${d.get("last_name")}`;
    const subject = `New project enquiry from ${name}`;
    const body = `${d.get("message")}\n\n— ${name} (${d.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  };

  const field = (name: keyof Errors, label: string, props: Record<string, string>, full = false, area = false) => (
    <div className={`field ${full ? "field--full" : ""} ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {area ? (
        <textarea id={name} name={name} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} {...props} />
      ) : (
        <input id={name} name={name} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} {...props} />
      )}
      <span id={`${name}-err`} className="field__error">{errors[name]}</span>
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {field("first_name", "First name", { placeholder: "Jane", autoComplete: "given-name" })}
      {field("last_name", "Last name", { placeholder: "Doe", autoComplete: "family-name" })}
      {field("email", "Email", { type: "email", placeholder: "you@company.com", autoComplete: "email" }, true)}
      {field("message", "Message", { placeholder: "Tell me about your project, timeline and budget…" }, true, true)}
      <button className="form__submit" type="submit">
        <span>Submit</span>
      </button>
      <p className="form__status" role="status">
        {sent && "Thanks! Your mail app should open with the message ready to send."}
      </p>
    </form>
  );
}
