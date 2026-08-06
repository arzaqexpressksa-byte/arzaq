import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Please enter a message").max(2000),
});

const details = [
  { icon: MapPin, label: "Address", value: "Address Placeholder, Street, City, Country" },
  { icon: Phone, label: "Phone", value: "+000 0000 0000" },
  { icon: Mail, label: "Email", value: "email@placeholder.com" },
  { icon: Clock, label: "Working Hours", value: "Sunday – Thursday, 08:00 – 18:00" },
];

function Field({
  id,
  label,
  type = "text",
  textarea = false,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "peer w-full rounded-[10px] border border-input bg-background px-4 pt-6 pb-2 text-sm text-navy outline-none transition-colors duration-300 placeholder-transparent focus:border-gold";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={5} placeholder={label} required={required} className={`${base} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} placeholder={label} required={required} className={`${base} h-14`} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2 left-4 text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.14em] peer-focus:text-gold peer-focus:uppercase"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Enquiry submitted", {
        description: "Placeholder confirmation — connect this form to your backend later.",
      });
    }, 700);
  };

  return (
    <Section id="contact" tone="white">
      <SectionHeading
        eyebrow="Contact"
        title="Start a Conversation With Our Engineering Team"
        intro="Section intro placeholder. Invite enquiries and explain expected response times."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="rounded-[18px] border border-border bg-warm p-8 sm:p-10">
              <span className="eyebrow rule-gold">Company Information</span>
              <ul className="mt-8 space-y-7">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-navy/12">
                      <d.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {d.label}
                      </div>
                      <div className="mt-1 break-words text-sm text-navy">{d.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-border bg-stone">
              <div className="blueprint-grid absolute inset-0 opacity-80" />
              <div className="absolute inset-0 grid place-items-center px-6 text-center">
                <div>
                  <MapPin className="mx-auto h-7 w-7 text-gold" strokeWidth={1.4} />
                  <p className="mt-4 font-display text-sm font-semibold tracking-[0.16em] text-navy uppercase">
                    Map Placeholder
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Embed your Google Map here
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="card-premium h-full p-8 sm:p-10 lg:p-12"
          >
            <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
              Send an Enquiry
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Form description placeholder.
            </p>

            <div className="mt-9 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Full Name" required />
                <Field id="email" label="Email Address" type="email" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="company" label="Company" />
                <Field id="phone" label="Phone Number" type="tel" />
              </div>
              <Field id="message" label="Project Details" textarea required />
            </div>

            <button type="submit" disabled={sending} className="btn-base btn-solid group mt-8 w-full disabled:opacity-60">
              {sending ? "Sending…" : "Submit Enquiry"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}