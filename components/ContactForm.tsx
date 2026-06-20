"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, fieldClassName } from "@/components/ui/form-fields";

const schema = z.object({
  firstName: z.string().min(2, "Indiquez votre prenom."),
  lastName: z.string().min(2, "Indiquez votre nom."),
  email: z.string().email("Indiquez une adresse email valide."),
  phone: z.string().min(10, "Indiquez un numero de telephone valide."),
  projectType: z.string().min(1, "Choisissez un type de projet."),
  budget: z.string().optional(),
  message: z.string().min(20, "Votre message doit contenir au moins 20 caracteres."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Votre accord est necessaire pour envoyer le formulaire." })
  })
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: ""
    }
  });

  function onSubmit() {
    setSent(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-chalk p-5 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prenom" error={errors.firstName?.message}>
          <input className={fieldClassName} autoComplete="given-name" {...register("firstName")} />
        </Field>
        <Field label="Nom" error={errors.lastName?.message}>
          <input className={fieldClassName} autoComplete="family-name" {...register("lastName")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input className={fieldClassName} type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Telephone" error={errors.phone?.message}>
          <input className={fieldClassName} type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="Type de projet" error={errors.projectType?.message}>
          <select className={fieldClassName} {...register("projectType")}>
            <option value="">Selectionner</option>
            <option>Architecture interieure</option>
            <option>Cuisine</option>
            <option>Dressing</option>
            <option>Salle de bain</option>
            <option>Sauna</option>
            <option>The</option>
            <option>Autre</option>
          </select>
        </Field>
        <Field label="Budget indicatif optionnel">
          <input className={fieldClassName} placeholder="Ex. 15 000 a 30 000 euros" {...register("budget")} />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea className={`${fieldClassName} min-h-36 resize-y`} {...register("message")} />
        </Field>
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-ink/70">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-ink/20 accent-pine" {...register("consent")} />
        <span>J'accepte que mes informations soient utilisees pour repondre a ma demande de contact.</span>
      </label>
      {errors.consent?.message ? <p className="mt-2 text-sm font-medium text-fuchsia">{errors.consent.message}</p> : null}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          <Send className="h-4 w-4" aria-hidden="true" />
          Envoyer ma demande
        </Button>
        {sent ? <p className="text-sm font-medium text-pine">Merci, votre message est pret a etre traite.</p> : null}
      </div>
    </form>
  );
}
