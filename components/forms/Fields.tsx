import type { ReactNode } from "react";

const inputClass =
  "w-full rounded-hyo border-2 border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-medium-grey " +
  "focus:border-violet-brand aria-[invalid=true]:border-violet-brand aria-[invalid=true]:bg-violet-light/15";

export function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children?: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-semibold">
        {label}
        {optional && <span className="ml-1 font-normal text-medium-grey">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm font-semibold text-violet-deep">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={inputClass}
    />
  );
}

export function TextArea({ name, rows = 4, error }: { name: string; rows?: number; error?: string }) {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={inputClass}
    />
  );
}

export function Select({
  name,
  options,
  required,
  error,
}: {
  name: string;
  options: readonly string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <select
      id={name}
      name={name}
      required={required}
      defaultValue=""
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className={inputClass}
    >
      <option value="" disabled>
        Bitte wählen …
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export function Checkbox({
  name,
  label,
  required,
  error,
  value = "on",
}: {
  name: string;
  label: ReactNode;
  required?: boolean;
  error?: string;
  value?: string;
}) {
  return (
    <div>
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name={name}
          value={value}
          required={required}
          aria-describedby={error ? `${name}-error` : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-[color:var(--hyo-violet)]"
        />
        <span className="text-[0.95rem] leading-relaxed">{label}</span>
      </label>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm font-semibold text-violet-deep">
          {error}
        </p>
      )}
    </div>
  );
}

export function Radio({ name, label, value }: { name: string; label: string; value: string }) {
  return (
    <label className="flex items-center gap-3">
      <input
        type="radio"
        name={name}
        value={value}
        className="h-5 w-5 accent-[color:var(--hyo-violet)]"
      />
      <span>{label}</span>
    </label>
  );
}

/** Unsichtbares Honeypot-Feld gegen Spam. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormStatus({
  status,
  message,
}: {
  status: "idle" | "success" | "error";
  message?: string;
}) {
  if (status === "idle" || !message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-hyo border-2 p-4 font-semibold ${
        status === "success"
          ? "border-violet-brand bg-mint-light text-ink"
          : "border-violet-deep bg-violet-light/20 text-ink"
      }`}
    >
      {message}
    </div>
  );
}
