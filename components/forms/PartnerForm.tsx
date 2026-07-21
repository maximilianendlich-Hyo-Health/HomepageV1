"use client";

import { useState, useTransition } from "react";
import {
  initialFormState,
  partnerInterests,
  partnerOrganizationTypes,
  partnerSchema,
  type FormState,
} from "@/lib/schemas";
import { submitToNetlifyForm } from "@/lib/netlify-forms";
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

/** Kurzes Kooperationsformular für Kliniken und Versorgungspartner. */
export function PartnerForm() {
  const [state, setState] = useState<FormState>(initialFormState);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await submitToNetlifyForm(
        "kooperationsanfrage",
        formData,
        partnerSchema,
        "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah für die weitere Abstimmung.",
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
    <form name="kooperationsanfrage" onSubmit={handleSubmit} noValidate className="relative space-y-6 rounded-hyo bg-white p-6 sm:p-8">
      <input type="hidden" name="form-name" value="kooperationsanfrage" />
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Einrichtung" name="organization" error={errors.organization}>
          <TextInput name="organization" required autoComplete="organization" error={errors.organization} />
        </Field>
        <Field label="Einrichtungsart" name="organizationType" error={errors.organizationType}>
          <Select name="organizationType" required options={partnerOrganizationTypes} error={errors.organizationType} />
        </Field>
        <Field label="Ansprechperson" name="contactName" error={errors.contactName}>
          <TextInput name="contactName" required autoComplete="name" error={errors.contactName} />
        </Field>
        <Field label="E-Mail-Adresse" name="email" error={errors.email}>
          <TextInput name="email" type="email" required autoComplete="email" error={errors.email} />
        </Field>
        <Field label="Telefonnummer" name="phone" optional error={errors.phone}>
          <TextInput name="phone" type="tel" autoComplete="tel" error={errors.phone} />
        </Field>
        <Field label="Ihr Anliegen" name="interest" error={errors.interest}>
          <Select name="interest" required options={partnerInterests} error={errors.interest} />
        </Field>
      </div>

      <Field label="Kurze Nachricht" name="message" optional error={errors.message}>
        <TextArea name="message" rows={3} error={errors.message} />
        <p className="mt-1.5 text-sm text-medium-grey">
          Bitte übermitteln Sie keine personenbezogenen Patientendaten über dieses Formular.
        </p>
      </Field>

      <Checkbox
        name="consentPrivacy"
        required
        error={errors.consentPrivacy}
        label={
          <>
            Ich willige in die Verarbeitung der Angaben zur Bearbeitung dieser Anfrage ein und habe
            die{" "}
            <a href="/datenschutz" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Datenschutzerklärung
            </a>{" "}
            zur Kenntnis genommen.
          </>
        }
      />

      <FormStatus status={state.status} message={state.message} />

      <SubmitButton pending={pending}>Kooperation anfragen</SubmitButton>
    </form>
  );
}
