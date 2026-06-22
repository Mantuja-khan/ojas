import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-white border-t border-border">
      <div className="relative py-16 md:py-20 w-full">
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-foreground animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline-accent animate-fade-in-up text-[color:var(--brand-dark)]">
            YOUR TRUSTED PHARMACEUTICAL PARTNER
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
            Get premium-quality pharmaceutical raw materials delivered across India with unmatched reliability and competitive pricing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-base md:text-lg font-medium text-primary-foreground shadow-lg hover:bg-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="h-4 w-4" /> Enquire Now
              </button>
            </Link>
            <Link to="/products">
              <button className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-8 py-3 text-base md:text-lg font-medium text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-dark)] hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                View Products <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
