import { createFileRoute } from "@tanstack/react-router";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import productsCard from "@/assets/home/products-card.jpg";
import flasks from "@/assets/flasks.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { Award, Users, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const whyChooseUs = [
  { icon: Award, title: "Product effectiveness", text: "We provide cost-effective and reliable pharmaceutical solutions." },
  { icon: ShieldCheck, title: "Consistency & dependability", text: "Great reputation built on trusted quality standards." },
  { icon: Users, title: "Customer satisfaction", text: "Long-term trust with every partnership we build." },
  { icon: TrendingUp, title: "Expert workforce", text: "Highly skilled specialists with deep pharmaceutical industry knowledge." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header with background image */}
      <section className="relative py-24 md:py-32 text-center text-primary-foreground overflow-hidden animate-fade-in">
        <img
          src={aboutWarehouse}
          alt="Ojas Pharmaceuticals facility"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-dark)]/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold underline-accent animate-fade-in-up">About Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up delay-100">
            Trusted pharmaceutical raw material suppliers with a pan-India presence.
          </p>
        </div>
      </section>

      {/* Short About Section (restored and duplicated above Who We Are) */}
      <section className="py-16 md:py-20 bg-[color:var(--brand-light)]/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="flex justify-center order-2 lg:order-1 animate-scale-in">
              <img src={aboutWarehouse} alt="Ojas Pharmaceuticals facility" loading="lazy" width={1024} height={768} className="max-w-md w-full rounded-sm shadow-lg" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-[color:var(--brand)]">About Us</p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-[color:var(--brand-dark)]">A trusted partner in pharmaceutical supply.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Welcome to <strong className="text-[color:var(--brand-dark)]">Ojas Pharmaceuticals</strong> your trusted partner in excipients, solvents and chemicals since <strong className="text-[color:var(--brand-dark)]">2020</strong>. As supplier of renowned manufacturers such as <strong className="text-[color:var(--brand-dark)]">Gujarat Ambuja Exports Limited, Gulshan Polyols Limited, Bluecraft Agro Pvt Ltd, Manali Petrochemicals Limited, Adani Wilmar Limited, Godrej Industries Limited, Roquette India Pvt Ltd</strong> and more, we cater to diverse industries including Pharma, Home Care, Personal Care, Food and Chemicals.
              </p>
              <ul className="mt-5 space-y-2">
                {["Pan-India distribution network", "Strict quality and IP/BP/USP compliance", "Long-term customer trust"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base md:text-lg text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are with premium double-framed layout */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-semibold text-[color:var(--brand-dark)]">Who We Are?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                <strong className="text-[color:var(--brand-dark)]">OJAS PHARMACEUTICALS</strong> has a trusted and well established supply chain network for supplying pharmaceutical raw materials, APIs and formulations to the Pharmaceutical, Healthcare, Nutraceutical, Cosmetics, Veterinary and other allied industries. We have a wide distribution network across India, supporting and serving our customer base on a pan-India basis through our professional team.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We are a well-known company dedicated to providing a diverse range of pharmaceutical products. We have been successful in holding a significant part of the market due to the superiority of our offered goods, backed by a team of highly skilled specialists. To keep up with present market trends, we work hard to deliver a high-quality, well-accepted range to the market.
              </p>
            </div>
            <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[480px] animate-scale-in">
              {/* Blue framed image */}
              <div className="absolute left-0 top-0 h-[260px] w-[230px] border-[6px] border-[#1d4e89] bg-white p-2 shadow-xl sm:h-[300px] sm:w-[270px]">
                <img
                  src={productsCard}
                  alt="Pharma excipients"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Red framed image */}
              <div className="absolute bottom-0 right-0 h-[260px] w-[230px] border-[6px] border-[#e11d48] bg-white p-2 shadow-xl sm:h-[300px] sm:w-[270px]">
                <img
                  src={flasks}
                  alt="Pharmaceutical raw materials"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[color:var(--brand-light)]/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-[color:var(--brand-dark)]">Why Choose Us?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We have built a strong reputation in the market by providing high-quality pharmaceutical products for healthcare, hospitals, retail pharmacies and other services.
            </p>
            <p className="mt-2 text-center text-lg font-medium text-[color:var(--brand-dark)]">The following are some of the reasons behind our industrial dominance:</p>
          </div>

          <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="flex flex-col items-center rounded-sm border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--brand)]/30 text-[color:var(--brand)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-dark)]">{item.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
