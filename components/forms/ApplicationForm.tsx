"use client";

import { useActionState } from "react";
import { submitApplication } from "@/lib/actions";
import { applicationPositions, initialFormState } from "@/lib/schemas";
import { SubmitButton } from "@/components/ui/Buttons";
import {
  Checkbox,
  Field,
  FormStatus,
  Honeypot,
  Select,
  TextArea,
  TextInput,
} from "@/components/forms/Fields";

/** Kurzes Bewerbungsformular (Personal). */
export function ApplicationForm() {
  const [state, action, pending] = useActionState(submitApplication, initialFormState);
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-hyo bg-white p-8">
        <h3 className="text-xl font-extrabold">Bewerbung eingegangen</h3>
        <p className="mt-3 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative space-y-6 rounded-hyo bg-white p-6 sm:p-8">
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <TextInput name="name" required autoComplete="name" error={errors.name} />
        </Field>
        <Field label="E-Mail-Adresse" name="email" error={errors.email}>
          <TextInput name="email" type="email" required autoComplete="email" error={errors.email} />
        </Field>
        <Field label="Telefonnummer" name="phone" optional error={errors.phone}>
          <TextInput name="phone" type="tel" autoComplete="tel" error={errors.phone} />
        </Field>
        <Field label="Gewünschte Position" name="position" error={errors.position}>
          <Select name="position" required options={applicationPositions} error={errors.position} />
        </Field>
        <Field label="Möglicher Startzeitpunkt" name="startDate" optional error={errors.startDate}>
          <TextInput name="startDate" error={errors.startDate} />
        </Field>
      </div>

      <Field label="Kurze Nachricht" name="message" error={errors.message}>
        <TextArea name="message" rows={4} error={errors.message} />
        <p className="mt-1.5 text-sm text-medium-grey">
          Erzählen Sie uns kurz, wer Sie sind und was Sie interessiert. Unterlagen wie einen
          Lebenslauf fragen wir bei Bedarf nach dem Erstkontakt an.
        </p>
      </Field>

      <Checkbox
        name="consentPrivacy"
        required
        error={errors.consentPrivacy}
        label={
          <>
            Ich willige in die Verarbeitung meiner Angaben zur Durchführung des
            Bewerbungsverfahrens ein und habe die{" "}
            <a href="/datenschutz" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Datenschutzerklärung
            </a>{" "}
            zur Kenntnis genommen.
          </>
        }
      />

      <FormStatus status={state.status} message={state.message} />

      <SubmitButton pending={pending}>Bei HYO bewerben</SubmitButton>
    </form>
  );
}
