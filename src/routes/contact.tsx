import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { Phone, PhoneCall, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import heroPharma from "@/assets/hero/hero-pharma.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const PRODUCTS = [
  "Liquid Glucose SO2 Free",
  "Sorbitol 70% IP & BP",
  "Glycerine IP & BP",
  "Iso Propyl Alcohol IP & BP",
  "Propylene Glycol IP",
  "Citric Acid Monohydrate IP & BP",
  "Sodium Citrate IP & BP",
  "Maize Starch IP & BP",
  "Magnesium Stearate IP",
  "Zinc Oxide IP",
  "Niacinamide",
  "Salicylic Acid",
  "Vitamin E",
  "Titanium Dioxide",
  "SLES 70% / 28%",
  "Hydrogen Peroxide",
  "Other / Custom Enquiry",
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Invalid phone").max(20).regex(/^[+\d\s()-]+$/, "Invalid phone"),
  product: z.string().min(1, "Please select a product"),
  message: z.string().trim().max(500).optional(),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, phone, product, message } = parsed.data;
    const text = `Hello, I'm ${name}.%0AEmail: ${email}%0APhone: ${phone}%0AProduct: ${product}${message ? `%0AMessage: ${message}` : ""}`;
    window.open(`https://wa.me/918766651958?text=${text}`, "_blank");
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header with background image */}
      <section className="relative py-24 md:py-32 text-center text-primary-foreground overflow-hidden animate-fade-in">
        <img
          src={heroPharma}
          alt="Pharmaceutical cleanroom"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-dark)]/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold underline-accent animate-fade-in-up">Get In Touch</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up delay-100">
            Reach out to Ojas Pharmaceuticals for orders, partnerships, or product enquiries.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Phone, title: "Mobile", text: "+91 87666 51958", href: "tel:8766651958" },
                { icon: PhoneCall, title: "Landline", text: "01493-460250", href: "tel:01493460250" },
                { icon: Mail, title: "Email", text: "Info@ojaspharma.in", href: "mailto:Info@ojaspharma.in" },
                { icon: MapPin, title: "Head Office", text: "S-SF 49, Second Floor, Capital Highstreet, Phool Bagh Chowk, Bhiwadi, Distt. Alwar, Rajasthan 301019" },
              ].map((c, i) => {
                const Inner = (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--brand)]/30 text-[color:var(--brand)]">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-dark)]">{c.title}</h3>
                    <p className="mt-2 text-lg text-muted-foreground break-words">{c.text}</p>
                  </>
                );
                const classes = `flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up`;
                const style = { animationDelay: `${i * 100}ms` };
                return c.href ? (
                  <a key={c.title} href={c.href} className={classes} style={style}>{Inner}</a>
                ) : (
                  <div key={c.title} className={classes} style={style}>{Inner}</div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="section-heading underline-accent">Send Us an Enquiry</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Fill in the details below and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-10 rounded-md border border-border bg-card p-6 md:p-10 shadow-sm animate-scale-in">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" error={errors.name} />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" error={errors.email} />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 9XXXXXXXXX" error={errors.phone} />
              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-base font-medium text-[color:var(--brand-dark)]">Product</label>
                <select
                  id="product"
                  name="product"
                  defaultValue=""
                  className="h-11 rounded-sm border border-input bg-background px-3 text-lg text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40"
                >
                  <option value="" disabled>Select a product</option>
                  {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.product && <span className="text-sm text-destructive">{errors.product}</span>}
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="message" className="text-base font-medium text-[color:var(--brand-dark)]">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us about quantity, grade, or any specific requirement..."
                  className="rounded-sm border border-input bg-background px-3 py-2 text-lg text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-sm bg-[color:var(--brand)] px-8 py-3 text-lg font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-[color:var(--brand-dark)] hover:shadow-lg hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Submit Enquiry
            </button>

            {status === "sent" && (
              <p className="mt-4 text-base text-[color:var(--brand)] animate-fade-in">
                Thank you! Your enquiry has been prepared — please send the WhatsApp message that just opened.
              </p>
            )}
          </form>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-medium text-[color:var(--brand-dark)]">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-sm border border-input bg-background px-3 text-lg text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40"
      />
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}
