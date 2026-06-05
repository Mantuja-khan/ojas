import { Link } from "@tanstack/react-router";
import ctaBanner from "@/assets/cta-banner.jpg";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[380px] md:h-[420px] w-full">
        <img
          src={ctaBanner}
          alt="Pharmaceutical laboratory"
          loading="lazy"
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-dark)]/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline-accent animate-fade-in-up">
            Your Trusted Pharmaceutical Partner
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up delay-100">
            Get premium-quality pharmaceutical raw materials delivered across India with unmatched reliability and competitive pricing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-base md:text-lg font-medium text-primary-foreground shadow-lg hover:bg-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="h-4 w-4" /> Enquire Now
              </button>
            </Link>
            <Link to="/products">
              <button className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/80 bg-transparent px-8 py-3 text-base md:text-lg font-medium text-primary-foreground hover:bg-primary-foreground hover:text-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                View Products <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
