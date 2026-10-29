"use client";

import { useMemo, useState } from "react";
import { packages, studio } from "@/lib/data";
import { ArrowIcon, CheckIcon } from "@/components/icons";

type Variant = "full" | "compact";

type Fields = {
  name: string;
  email: string;
  phone: string;
  packageId: string;
  projectType: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  packageId: "",
  projectType: "",
  message: "",
};

const projectTypes = ["New website", "Redesign", "Catalogue or lookbook", "Not sure yet"];

function isGhanaPhone(value: string) {
  const compact = value.replace(/[^\d+]/g, "");
  return /^(0\d{9}|\+233\d{9})$/.test(compact);
}

function validate(values: Fields, variant: Variant): Errors {
  const errors: Errors = {};
  const name = values.name.trim();

  if (!/^[A-Za-z][A-Za-z\s'.-]{1,60}$/.test(name)) {
    errors.name = "Enter your name, using letters, spaces, or hyphens.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, such as ama@studio.com.";
  }

  if (variant === "full") {
    if (!values.phone.trim()) {
      errors.phone = "Add a phone number so the studio can reach you.";
    } else if (!isGhanaPhone(values.phone)) {
      errors.phone = "Use a Ghana number, such as 055 314 0985 or +233 55 314 0985.";
    }

    if (!values.projectType) {
      errors.projectType = "Choose the kind of project you have in mind.";
    }
  }

  if (values.message.trim().length < 20) {
    errors.message = "Tell me a little more — at least 20 characters.";
  }

  return errors;
}

function FieldError({ id, message, onBlue = false }: { id: string; message?: string; onBlue?: boolean }) {
  if (!message) return null;
  return (
    <p id={id} className={`mt-1 text-xs font-semibold ${onBlue ? "text-white" : "text-red-600"}`} role="alert">
      {message}
    </p>
  );
}

export function ContactForm({
  variant = "full",
  initialPackage = "",
}: {
  variant?: Variant;
  initialPackage?: string;
}) {
  const startingPackage = packages.some((item) => item.id === initialPackage) ? initialPackage : "";
  const [values, setValues] = useState<Fields>({ ...empty, packageId: startingPackage });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const pack = packages.find((item) => item.id === values.packageId);
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
      pack ? `Package: ${pack.name} (${pack.price})` : "",
      values.projectType ? `Project: ${values.projectType}` : "",
      "",
      values.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${studio.email}?subject=${encodeURIComponent(`Project enquiry from ${values.name.trim()}`)}&body=${encodeURIComponent(body)}`;
  }, [values]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, variant);
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0] as keyof Fields | undefined;
    if (first) {
      document.getElementById(`${variant}-${first}`)?.focus();
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`rounded-3xl p-5 ${variant === "compact" ? "bg-white text-ink" : "bg-blue-soft"}`}>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-blue text-white">
          <CheckIcon />
        </span>
        <h3 className="mt-3 text-xl font-extrabold">Thank you, {values.name.trim().split(" ")[0]}.</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Your note is ready. This is a static site, so it is not stored on a server. Email it to the studio, or call {studio.phones[1].display}, and Efua will reply within one working day.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-full bg-blue px-4 py-2.5 text-sm font-bold text-white"
          >
            Email this enquiry
            <ArrowIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold text-ink"
          >
            Edit message
          </button>
        </div>
      </div>
    );
  }

  const inputClass = (key: keyof Fields) =>
    `w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 ${
      errors[key] ? "border-red-400" : "border-line focus:border-blue"
    } ${variant === "compact" ? "rounded-full" : ""}`;

  return (
    <form onSubmit={onSubmit} noValidate className={variant === "compact" ? "grid gap-3 lg:grid-cols-[1fr_1fr_1.3fr_auto] lg:items-start" : "grid gap-4"}>
      <div>
        <label htmlFor={`${variant}-name`} className={variant === "compact" ? "sr-only" : "mb-1.5 block text-sm font-bold text-ink"}>
          Your name
        </label>
        <input
          id={`${variant}-name`}
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${variant}-name-error` : undefined}
          className={inputClass("name")}
        />
        <FieldError id={`${variant}-name-error`} message={errors.name} onBlue={variant === "compact"} />
      </div>

      <div>
        <label htmlFor={`${variant}-email`} className={variant === "compact" ? "sr-only" : "mb-1.5 block text-sm font-bold text-ink"}>
          Email
        </label>
        <input
          id={`${variant}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${variant}-email-error` : undefined}
          className={inputClass("email")}
        />
        <FieldError id={`${variant}-email-error`} message={errors.email} onBlue={variant === "compact"} />
      </div>

      {variant === "full" ? (
        <>
          <div>
            <label htmlFor="full-phone" className="mb-1.5 block text-sm font-bold text-ink">
              Telephone
            </label>
            <input
              id="full-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="055 314 0985"
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "full-phone-error" : undefined}
              className={inputClass("phone")}
            />
            <FieldError id="full-phone-error" message={errors.phone} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="full-packageId" className="mb-1.5 block text-sm font-bold text-ink">
                Package
              </label>
              <select
                id="full-packageId"
                name="packageId"
                value={values.packageId}
                onChange={(event) => update("packageId", event.target.value)}
                className={inputClass("packageId")}
              >
                <option value="">Not sure yet</option>
                {packages.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} · {item.price}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="full-projectType" className="mb-1.5 block text-sm font-bold text-ink">
                Project type
              </label>
              <select
                id="full-projectType"
                name="projectType"
                value={values.projectType}
                onChange={(event) => update("projectType", event.target.value)}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? "full-projectType-error" : undefined}
                className={inputClass("projectType")}
              >
                <option value="">Select one</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <FieldError id="full-projectType-error" message={errors.projectType} />
            </div>
          </div>
        </>
      ) : null}

      <div>
        <label htmlFor={`${variant}-message`} className={variant === "compact" ? "sr-only" : "mb-1.5 block text-sm font-bold text-ink"}>
          Message
        </label>
        {variant === "compact" ? (
          <input
            id="compact-message"
            name="message"
            placeholder="Your message"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "compact-message-error" : undefined}
            className={inputClass("message")}
          />
        ) : (
          <textarea
            id="full-message"
            name="message"
            rows={5}
            placeholder="Tell me about the business, the pages you need, and when you hope to launch."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "full-message-error" : undefined}
            className={inputClass("message")}
          />
        )}
        <FieldError id={`${variant}-message-error`} message={errors.message} onBlue={variant === "compact"} />
      </div>

      <button
        type="submit"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
          variant === "compact" ? "bg-sun text-ink hover:bg-sun-deep" : "bg-blue text-white hover:bg-blue-deep"
        }`}
      >
        {variant === "compact" ? "Send Message" : "Send enquiry"}
        <ArrowIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
