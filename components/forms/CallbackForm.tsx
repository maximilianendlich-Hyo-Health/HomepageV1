"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { callbackSchema, callbackSlots, initialFormState, type FormState } from "@/lib/schemas";
import { submitToNetlifyForm } from "@/lib/netlify-forms";
import { trackLead } from "@/lib/tracking";
import { Checkbox, Field, FormStatus, Honeypot, TextInput } from "@/components/forms/Fields";

const SUCCESS = "Vielen Dank. Wir rufen Sie im gewünschten Zeitraum zurück.";

/** Kampagnenangaben aus der Adresszeile (nur zur Zuordnung, es werden keine Cookies gesetzt). */
function readCampaignParams() {
  const p = new URLSearchParams(window.location.search);
  const get = (key: string) => (p.get(key) ?? "").slice(0, 200);
  return {
    utmSource: get("utm_source"),
    utmCampaign: get("utm_campaign"),
    utmTerm: get("utm_term"),
    gclid: get("gclid"),
    seite: window.location.pathname,
  };
}

/**
 * Rückruf-Formular der Werbe-Landingpage.
 * Bewusst minimal: Name, Telefonnummer, Zeitraum. Alles Weitere klären wir am Telefon.
 */
export function CallbackForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>(initialFormState);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    for (const [key, value] of Object.entries(readCampaignParams())) formData.set(key, value);
    startTransition(async () => {
      const result = await submitToNetlifyForm("rueckruf", formData, callbackSchema, SUCCESS);
      setState(result);
      if (result.status === "success") {
        // Spam (Honeypot gefüllt) wird still als Erfolg beantwortet, aber nicht als Lead gemeldet
        if (String(formData.get("website") ?? "") === "") trackLead();
        router.push("/rueckruf/danke");
      }
    });
  };
  const errors = state.fieldErrors ?? {};

  return (
    <form
      id="formular"
      name="rueckruf"
      onSubmit={handleSubmit}
      noValidate
      className="relative scroll-mt-24 space-y-5 rounded-hyo bg-white p-6 text-ink shadow-xl sm:p-8"
    >
      <input type="hidden" name="form-name" value="rueckruf" />
      <Honeypot />

      <div>
        <h2 className="text-2xl font-extrabold tracking-tight">Rückruf anfordern</h2>
        <p className="mt-1.5 leading-snug text-ink/80">
          Name und Nummer genügen. Wir rufen Sie zurück und klären alles Weitere am Telefon.
        </p>
      </div>

      <Field label="Ihr Name" name="name" error={errors.name}>
        <TextInput name="name" required autoComplete="name" error={errors.name} />
      </Field>

      <Field label="Ihre Telefonnummer" name="phone" error={errors.phone}>
        <TextInput name="phone" type="tel" required autoComplete="tel" error={errors.phone} />
      </Field>

      <fieldset>
        <legend className="mb-2 font-semibold">Wann passt es Ihnen?</legend>
        <div className="grid grid-cols-2 gap-2">
          {callbackSlots.map((slot, index) => (
            <label key={slot} className="block cursor-pointer">
              <input
                type="radio"
                name="timeSlot"
                value={slot}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="flex min-h-[3.25rem] items-center justify-center rounded-hyo border-2 border-ink/15 px-3 py-2 text-center text-[0.95rem] font-semibold leading-tight transition-colors peer-checked:border-violet-brand peer-checked:bg-violet-brand peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-violet-deep">
                {slot}
              </span>
            </label>
          ))}
        </div>
        {errors.timeSlot && (
          <p role="alert" className="mt-1.5 text-sm font-semibold text-violet-deep">
            {errors.timeSlot}
          </p>
        )}
      </fieldset>

      <Checkbox
        name="consentPrivacy"
        required
        error={errors.consentPrivacy}
        label={
          <>
            Ich bin einverstanden, dass HYO mich zu dieser Anfrage telefonisch kontaktiert. Hinweise
            zum Datenschutz finden Sie in der{" "}
            <a
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
            >
              Datenschutzerklärung
            </a>
            .
          </>
        }
      />

      <FormStatus status={state.status === "success" ? "idle" : state.status} message={state.message} />

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-hyo bg-violet-deep px-6 py-4 text-lg font-extrabold text-white shadow-lg ring-4 ring-violet-brand/25 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-violet-brand disabled:opacity-60 motion-reduce:hover:translate-y-0"
      >
        {pending ? "Wird gesendet …" : "Jetzt Rückruf anfordern"}
      </button>

      <p className="text-sm leading-relaxed text-medium-grey">
        Kein Notfallformular – im Notfall wählen Sie die 112. Bitte senden Sie hier keine
        Gesundheitsdetails; die besprechen wir am Telefon.
      </p>
    </form>
  );
}
