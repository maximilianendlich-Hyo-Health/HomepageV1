"use client";

import { useState, useTransition } from "react";
import { appointmentTopics, appointmentSchema, initialFormState, type FormState } from "@/lib/schemas";
import { submitToNetlifyForm } from "@/lib/netlify-forms";
import { SubmitButton } from "@/components/ui/Buttons";
import {
  Checkbox,
  Field,
  FormStatus,
  Honeypot,
  Radio,
  Select,
  TextArea,
  TextInput,
} from "@/components/forms/Fields";

/** Kurzes Terminanfrage-Formular. Zustellung per E-Mail an die Praxis. */
export function AppointmentForm() {
  const [state, setState] = useState<FormState>(initialFormState);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await submitToNetlifyForm(
        "terminanfrage",
        formData,
        appointmentSchema,
        "Vielen Dank. Ihre Anfrage ist bei uns eingegangen. Wir informieren Sie, sobald die Terminvergabe bei HYO beginnt.",
      );
      setState(result);
    });
  };
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-hyo bg-white p-8">
        <h3 className="text-xl font-extrabold">Anfrage eingegangen</h3>
        <p className="mt-3 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form name="terminanfrage" onSubmit={handleSubmit} noValidate className="relative space-y-6 rounded-hyo bg-white p-6 sm:p-8">
      <input type="hidden" name="form-name" value="terminanfrage" />
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Vorname" name="firstName" error={errors.firstName}>
          <TextInput name="firstName" required autoComplete="given-name" error={errors.firstName} />
        </Field>
        <Field label="Nachname" name="lastName" error={errors.lastName}>
          <TextInput name="lastName" required autoComplete="family-name" error={errors.lastName} />
        </Field>
        <Field label="E-Mail-Adresse" name="email" error={errors.email}>
          <TextInput name="email" type="email" required autoComplete="email" error={errors.email} />
        </Field>
        <Field label="Telefonnummer" name="phone" optional error={errors.phone}>
          <TextInput name="phone" type="tel" autoComplete="tel" error={errors.phone} />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 font-semibold">Die Anfrage ist</legend>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Radio name="requestFor" value="für mich selbst" label="für mich selbst" />
          <Radio name="requestFor" value="für eine andere Person" label="für eine andere Person" />
        </div>
        {errors.requestFor && (
          <p role="alert" className="mt-1.5 text-sm font-semibold text-violet-deep">
            {errors.requestFor}
          </p>
        )}
      </fieldset>

      <Field label="Ihr Anliegen" name="topic" error={errors.topic}>
        <Select name="topic" required options={appointmentTopics} error={errors.topic} />
      </Field>

      <Field label="Kurze Nachricht" name="message" optional error={errors.message}>
        <TextArea name="message" rows={3} error={errors.message} />
        <p className="mt-1.5 text-sm text-medium-grey">
          Bitte übermitteln Sie keine unnötigen medizinischen Details oder Dokumente.
        </p>
      </Field>

      <Checkbox
        name="consentPrivacy"
        required
        error={errors.consentPrivacy}
        label={
          <>
            Ich willige in die Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage ein und
            habe die{" "}
            <a href="/datenschutz" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Datenschutzerklärung
            </a>{" "}
            zur Kenntnis genommen.
          </>
        }
      />

      <FormStatus status={state.status} message={state.message} />

      <SubmitButton pending={pending}>Für Termin vormerken</SubmitButton>

      <p className="text-sm leading-relaxed text-medium-grey">
        HYO eröffnet 2026. Das Absenden stellt noch keine Terminbestätigung dar und begründet
        keinen Behandlungsvertrag. Dieses Formular ist nicht für akute medizinische Notfälle
        geeignet – wählen Sie im Notfall die 112.
      </p>
    </form>
  );
}
