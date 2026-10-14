'use client';

import React, { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  MessageCircleIcon,
  SendIcon,
} from 'lucide-react';
import { services } from '../../data/services';
import { solarPackages } from '../../data/solutions';
import { energyNeedOptions, integrations, propertyTypes } from '../../data/contact';
import { company } from '../../data/company';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

interface FormState {
  name: string;
  phone: string;
  email: string;
  property: string;
  service: string;
  solution: string;
  energy: string;
  message: string;
}
type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const empty: FormState = { name: '', phone: '', email: '', property: '', service: '', solution: '', energy: '', message: '' };
const serviceOptions = [...services.map((s) => s.title), 'Not sure yet — I need advice'];
const solutionOptions = [...solarPackages.map((p) => p.name), 'Custom-sized system', 'Not sure — please recommend one'];

const inputClass =
  'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4 focus:ring-brand/15';

export function ContactForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [prefilled, setPrefilled] = useState<string | null>(null);

  const [appliedParams, setAppliedParams] = useState<string | null>(null);

  const paramKey = params.toString();
  if (appliedParams !== paramKey) {
    setAppliedParams(paramKey);
    const service = services.find((s) => s.slug === params.get('service'));
    const pkg = solarPackages.find((p) => p.slug === params.get('solution'));
    const propertyParam = params.get('property')?.toLowerCase();
    const property = propertyTypes.find((p) => p.toLowerCase() === propertyParam);
    if (service || pkg || property) {
      setForm((f) => ({
        ...f,
        service: service?.title ?? f.service,
        solution: pkg?.name ?? f.solution,
        property: property ?? f.property
      }));
      setPrefilled(pkg?.name ?? service?.title ?? `${property} solar`);
    }
  }

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    const phone = form.phone.replace(/[\s-]/g, '');
    if (!phone) e.phone = 'Please enter your phone number.';else
    if (!/^(\+?254|0)[17]\d{8}$/.test(phone)) e.phone = 'Enter a valid Kenyan number, e.g. 0712 345 678 or +254 712 345 678.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.property) e.property = 'Please choose a property type.';
    if (!form.service) e.service = 'Please choose a service.';
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(integrations.quoteEndpoint || '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send your request. Please try again.');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setForm(empty);
    setPrefilled(null);
    setStatus('idle');
  };

  const border = (key: keyof FormState) =>
  errors[key] ? 'border-red-500 focus:border-red-500' : 'border-ink/15 focus:border-brand';

  return (
    <div className="relative rounded-3xl bg-white p-7 shadow-[0_24px_60px_rgba(34,34,34,0.10)] ring-1 ring-ink/[0.06] sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
            role="status"
          >
            <motion.span
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-brand-tint"
            >
              <CircleCheckIcon className="h-11 w-11 text-brand" aria-hidden />
            </motion.span>

            <h3 className="mt-6 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Thank you, {form.name.trim().split(' ')[0]}!
            </h3>

            <p className="mt-3 max-w-md leading-relaxed text-ink/75 text-sm sm:text-base">
              Your solar quote request has been sent directly to our engineering team. An EPRA-certified Synowatt
              specialist will review your requirements and contact you on{' '}
              <strong className="text-ink">{form.phone}</strong> shortly.
            </p>

            <dl className="mt-6 w-full max-w-sm divide-y divide-ink/10 rounded-2xl bg-brand-tint/60 px-5 text-left text-sm border border-brand/15">
              {[
                { label: 'Property', value: form.property },
                { label: 'Service', value: form.service },
                { label: 'Solution', value: form.solution || 'To be recommended' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">{row.label}</dt>
                  <dd className="text-right font-semibold text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
              <Link href="/" className={`${buttonClasses('outline', 'md')} flex-1 justify-center`}>
                Back to Home
              </Link>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClasses('green', 'md')} flex-1 justify-center`}
              >
                <MessageCircleIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-6 text-xs font-semibold text-brand-dark underline-offset-4 hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          aria-label="Request a quote">
          
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Request a Free Quote</h2>
            <p className="mt-2 text-ink/65">Free, no-obligation advice. We usually respond within one business day.</p>

            <AnimatePresence initial={false}>
              {prefilled &&
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="overflow-hidden">
              
                  <span className="mt-5 flex items-center gap-2.5 rounded-xl bg-brand-tint px-4 py-3 text-sm text-brand-deep">
                    <CheckIcon className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden />
                    <span>
                      We’ve pre-selected <span className="font-semibold">{prefilled}</span> for you.
                    </span>
                  </span>
                </motion.p>
            }
            </AnimatePresence>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.name} htmlFor="field-name" required>
                <input id="field-name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Wanjiku" className={`${inputClass} ${border('name')}`} aria-invalid={!!errors.name} />
              </Field>
              <Field label="Phone number" error={errors.phone} htmlFor="field-phone" required>
                <input id="field-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0712 345 678" className={`${inputClass} ${border('phone')}`} aria-invalid={!!errors.phone} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email" error={errors.email} htmlFor="field-email" optional>
                  <input id="field-email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className={`${inputClass} ${border('email')}`} aria-invalid={!!errors.email} />
                </Field>
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold text-ink">
                  Property type<span className="text-accent"> *</span>
                </legend>
                <div id="field-property" tabIndex={-1} className="mt-2 grid gap-2 focus:outline-none sm:grid-cols-3">
                  {propertyTypes.map((p) => {
                  const checked = form.property === p;
                  return (
                    <label
                      key={p}
                      className={`relative flex h-12 cursor-pointer items-center justify-center rounded-xl border text-sm font-semibold transition-[background-color,border-color,color] duration-150 focus-within:ring-4 focus-within:ring-brand/15 ${
                      checked ?
                      'border-brand-dark bg-brand-dark text-white' :
                      errors.property ?
                      'border-red-500 text-ink hover:border-brand-dark' :
                      'border-ink/15 text-ink hover:border-brand-dark'}`
                      }>
                      
                        <input
                        type="radio"
                        name="property"
                        value={p}
                        checked={checked}
                        onChange={() => update('property', p)}
                        className="sr-only" />
                      
                        {p}
                      </label>);

                })}
                </div>
                {errors.property &&
              <p className="mt-1.5 text-sm text-red-600" role="alert">
                    {errors.property}
                  </p>
              }
              </fieldset>

              <Field label="Service required" error={errors.service} htmlFor="field-service" required>
                <select id="field-service" value={form.service} onChange={(e) => update('service', e.target.value)} className={`${inputClass} ${border('service')} ${form.service ? '' : 'text-ink/40'}`} aria-invalid={!!errors.service}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) =>
                <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                )}
                </select>
              </Field>
              <Field label="Preferred solar solution" htmlFor="field-solution" optional>
                <select id="field-solution" value={form.solution} onChange={(e) => update('solution', e.target.value)} className={`${inputClass} ${border('solution')} ${form.solution ? '' : 'text-ink/40'}`}>
                  <option value="">Select a solution</option>
                  {solutionOptions.map((s) =>
                <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                )}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Estimated energy needs" htmlFor="field-energy" optional>
                  <select id="field-energy" value={form.energy} onChange={(e) => update('energy', e.target.value)} className={`${inputClass} ${border('energy')} ${form.energy ? '' : 'text-ink/40'}`}>
                    <option value="">Select what you’d like to power</option>
                    {energyNeedOptions.map((s) =>
                  <option key={s} value={s} className="text-ink">
                        {s}
                      </option>
                  )}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message" htmlFor="field-message" optional>
                  <textarea id="field-message" rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your property, current power bills and the appliances you’d like to run." className={`${inputClass} ${border('message')} resize-none`} />
                </Field>
              </div>
            </div>

            <button type="submit" disabled={status === 'submitting'} className={`${buttonClasses('primary', 'lg')} mt-8 w-full`}>
              {status === 'submitting' ?
            <>
                  <LoaderCircleIcon className="h-5 w-5 animate-spin" aria-hidden />
                  Sending…
                </> :

            <>
                  Request a Free Quote
                  <SendIcon className="h-4 w-4" aria-hidden />
                </>
            }
            </button>
            {status === 'error' &&
          <p className="mt-4 text-center text-sm text-red-600" role="alert">
                We couldn’t send your request. Please try again, or contact us on WhatsApp at {company.phoneDisplay}.
              </p>
          }
            <p className="mt-4 text-center text-xs text-ink/50">We’ll only use your details to respond to your enquiry.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
        {optional && <span className="font-normal text-ink/50"> (optional)</span>}
      </label>
      {children}
      {error &&
      <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      }
    </div>);

}