"use client";

import { CircleCheck } from "lucide-react";

import { Magnetic } from "@/components/shared/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useContactForm } from "../hooks/use-contact-form";
import { FormField } from "./form-field";
import { ProjectTypePicker } from "./project-type-picker";

function describedBy(id: string, hasHint = false) {
  return hasHint ? `${id}-hint ${id}-error` : `${id}-error`;
}

export function ContactForm() {
  const { form, onSubmit, isPending, status, startOver } = useContactForm();
  const { register, formState } = form;
  const { errors } = formState;

  if (status.state === "sent") {
    return (
      <div role="status" className="glass relative rounded-3xl p-fluid-lg motion-safe:animate-rise">
        <span className="grid size-16 place-items-center rounded-2xl bg-action text-action-fg motion-safe:animate-pop">
          <CircleCheck aria-hidden className="size-8" />
        </span>
        <h2 className="mt-fluid-sm font-display text-fluid-2xl font-extrabold tracking-tight">Message sent</h2>
        <p className="mt-2 max-w-[48ch] text-fluid-base leading-relaxed text-fg-muted">
          Thanks for getting in touch. Our team will reply by email or phone shortly.
        </p>
        <Button variant="outline" className="mt-fluid-md" onClick={startOver}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-labelledby="contact-form-title" className="glass relative rounded-3xl p-fluid-lg">
      <h2 id="contact-form-title" className="font-display text-fluid-2xl font-extrabold tracking-tight">
        Send us a message
      </h2>
      <p className="mt-1 text-fluid-sm text-fg-muted">Fields marked optional can be left blank.</p>

      <div className="mt-fluid-md">
        <ProjectTypePicker registration={register("projectType")} error={errors.projectType?.message} />
      </div>

      <div className="mt-fluid-sm grid gap-x-fluid-md gap-y-1 sm:grid-cols-2">
        <FormField id="name" label="Your name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} {...register("name")} />
        </FormField>
        <FormField id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" inputMode="email" aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} {...register("email")} />
        </FormField>
        <FormField id="phone" label="Phone (optional)" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} {...register("phone")} />
        </FormField>
        <FormField id="organisation" label="Organisation (optional)" error={errors.organisation?.message}>
          <Input id="organisation" autoComplete="organization" aria-invalid={Boolean(errors.organisation)} aria-describedby={describedBy("organisation")} {...register("organisation")} />
        </FormField>
        <div className="sm:col-span-2">
          <FormField
            id="message"
            label="About your project"
            hint="What do you need, where is the site, and when do you need it?"
            error={errors.message?.message}
          >
            <Textarea id="message" aria-invalid={Boolean(errors.message)} aria-describedby={describedBy("message", true)} {...register("message")} />
          </FormField>
        </div>
      </div>

      {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="companyUrl">Leave this field empty</label>
        <input id="companyUrl" type="text" tabIndex={-1} autoComplete="off" {...register("companyUrl")} />
      </div>

      {status.state === "failed" ? (
        <p role="alert" className="mt-fluid-sm text-fluid-sm font-medium text-red-700 dark:text-red-300">
          {status.error}
        </p>
      ) : null}

      <Magnetic className="mt-fluid-md flex w-full sm:inline-flex sm:w-auto">
        <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Sending…" : "Send message"}
        </Button>
      </Magnetic>
    </form>
  );
}
