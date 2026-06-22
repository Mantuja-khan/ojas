import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPharma from "@/assets/hero/hero-pharma.jpg";
import heroCosmetic from "@/assets/hero/hero-cosmetic.jpg";
import heroHerbal from "@/assets/hero/hero-herbal.jpg";
import flasks from "@/assets/flasks.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import aboutCard from "@/assets/home/about-card.jpg";
import productsCard from "@/assets/home/products-card.jpg";
import contactCard from "@/assets/home/contact-card.jpg";
import { Marquee } from "@/components/Marquee";
import client1 from "@/assets/clients/image.png";
import client2 from "@/assets/clients/image copy.png";
import client3 from "@/assets/clients/image copy 2.png";
import client4 from "@/assets/clients/image copy 3.png";
import client5 from "@/assets/clients/image copy 4.png";
import client6 from "@/assets/clients/image copy 5.png";
import client7 from "@/assets/clients/image copy 6.png";
import client8 from "@/assets/clients/image copy 7.png";
import client9 from "@/assets/clients/image copy 8.png";
import client10 from "@/assets/clients/image copy 9.png";
import client11 from "@/assets/clients/image copy 10.png";
import client12 from "@/assets/clients/image copy 11.png";
import client13 from "@/assets/clients/image copy 12.png";
import client14 from "@/assets/clients/image copy 13.png";
import client15 from "@/assets/clients/image copy 14.png";
import client16 from "@/assets/clients/image copy 15.png";
import client17 from "@/assets/clients/image copy 16.png";
import client18 from "@/assets/clients/image copy 17.png";
import client19 from "@/assets/clients/image copy 18.png";
import client20 from "@/assets/clients/image copy 19.png";
import client21 from "@/assets/clients/image copy 20.png";
import client22 from "@/assets/clients/image copy 21.png";
import client23 from "@/assets/clients/image copy 22.png";
import principal1 from "@/assets/principals/image.png";
import principal2 from "@/assets/principals/image copy.png";
import principal3 from "@/assets/principals/image copy 2.png";
import principal4 from "@/assets/principals/image copy 3.png";
import principal5 from "@/assets/principals/image copy 4.png";
import principal6 from "@/assets/principals/image copy 5.png";
import principal7 from "@/assets/principals/image copy 6.png";
import principal8 from "@/assets/principals/image copy 7.png";
import principal9 from "@/assets/principals/image copy 8.png";
import principal10 from "@/assets/principals/image copy 9.png";
import principal11 from "@/assets/principals/image copy 10.png";
import principal12 from "@/assets/principals/image copy 11.png";
import principal13 from "@/assets/principals/image copy 12.png";
import { Pill, Beaker, TestTube, ArrowRight, FlaskConical, Sparkles, CheckCircle2, Leaf, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { icon: Pill, title: "Lab Tested", text: "Every batch passes rigorous quality control protocols in our certified pharmaceutical laboratories." },
  { icon: Beaker, title: "Pure Compounds", text: "High-purity pharmaceutical compounds engineered for research and therapeutic use." },
  { icon: TestTube, title: "Custom Formulations", text: "Tailored pharmaceutical formulations developed to meet exact specifications and standards." },
];

const shortPharma = [
  "Liquid Glucose SO2 Free",
  "Sorbitol 70% IP & BP",
  "Glycerine IP & BP",
  "Citric Acid Monohydrate IP & BP",
  "Magnesium Stearate IP",
  "Zinc Oxide IP",
];

const shortCosmetics = [
  "SLES 70% & 28%",
  "Niacinamide",
  "Titanium Dioxide",
  "Salicylic Acid",
  "Vitamin E",
  "Hydrogen Peroxide",
];

const heroSlides = [
  {
    img: heroPharma,
    eyebrow: "Pharmaceutical Excellence",
    title: "OJAS — Serving Pharmaceutical Industry",
    text: "Premium APIs, excipients and pharmaceutical raw materials sourced with strict IP/BP/USP compliance for manufacturers across India.",
  },
  {
    img: heroCosmetic,
    eyebrow: "Cosmetic Solutions",
    title: "OJAS — Serving Cosmetic Industry",
    text: "High-purity actives, emulsifiers and specialty ingredients trusted by leading personal care and beauty brands.",
  },
  {
    img: heroHerbal,
    eyebrow: "Herbal & Natural",
    title: "OJAS — Serving Herbal Industry",
    text: "Naturally derived ingredients and botanical raw materials for nutraceutical, ayurvedic and wellness formulations.",
  },
];

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
];
const principals = [
  principal1,
  principal2,
  principal3,
  principal4,
  principal5,
  principal6,
  principal7,
  principal8,
  principal9,
  principal10,
  principal11,
  principal12,
  principal13,
];

function Index() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];
  const next = () => setActive((p) => (p + 1) % heroSlides.length);
  const prev = () => setActive((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO CAROUSEL */}
      <section className="relative h-[560px] md:h-[640px] w-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.title}
            width={1920}
            height={1080}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-dark)]/85 via-[color:var(--brand-dark)]/50 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
          <div key={active} className="max-w-xl text-primary-foreground">
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-light)] animate-fade-in-up">
              {slide.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in-up delay-100">
              {slide.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up delay-200">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/products">
                <button className="rounded-sm bg-primary px-8 py-3 text-base md:text-lg font-medium text-primary-foreground shadow-lg hover:bg-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                  EXPLORE
                </button>
              </Link>
              <Link to="/contact">
                <button className="rounded-sm border border-primary-foreground/80 bg-transparent px-8 py-3 text-base md:text-lg font-medium text-primary-foreground hover:bg-primary-foreground hover:text-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm hover:bg-white/30 transition md:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm hover:bg-white/30 transition md:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* EXCELLENCE */}
      <section className="py-14 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
            {/* Framed images */}
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

            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">
                ABOUT OJAS PHARMACEUTICALS
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">
                EXCELLENCE IN PHARMA EXCIPIENTS
              </p>
              <div className="mt-3 h-[3px] w-20 bg-[#e11d48]" />
              <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                <strong className="text-[color:var(--brand-dark)]">Ojas Pharmaceuticals</strong>, was incepted in the year <strong className="text-[color:var(--brand-dark)]">2020</strong>, as a fine Supplier of a commendable range of pharma and cosmetics raw materials. It was a dream of and hard work of two visionaries <strong className="text-[color:var(--brand-dark)]">Mr. Praveen Singh</strong> and <strong className="text-[color:var(--brand-dark)]">Mrs. Pooja Singh</strong> that has earned a long lasting goodwill for years.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Our competence helped us to form fruitful strategic links to the supply chain in pharmaceuticals and cosmetics industry. Our primary business is to supply pharmaceutical raw materials to generate medicines for major areas of healthcare that also includes some of the world’s most common illnesses. The products are of highest quality produced using state-of-the art techniques, well planned procedures and superior manufacturing processes.
              </p>
              <Link to="/about" className="mt-8 inline-block">
                <button className="rounded-sm bg-[#e11d48] px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-[#be123c] hover:-translate-y-0.5 transition-all duration-300">
                  read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT ABOUT */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[480px] order-2 lg:order-1 animate-scale-in">
              {/* Blue framed image */}
              <div className="absolute left-0 top-0 h-[260px] w-[230px] border-[6px] border-[#1d4e89] bg-white p-2 shadow-xl sm:h-[300px] sm:w-[270px]">
                <img
                  src="https://i.pinimg.com/1200x/d1/8e/23/d18e23a109e47fab9dd736d2cbf69dbc.jpg"
                  alt="Ojas Pharmaceuticals facility 1"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Red framed image */}
              <div className="absolute bottom-0 right-0 h-[260px] w-[230px] border-[6px] border-[#e11d48] bg-white p-2 shadow-xl sm:h-[300px] sm:w-[270px]">
                <img
                  src="https://i.pinimg.com/1200x/e9/3a/75/e93a7511b5ca88a9ef157b59fd981b4d.jpg"
                  alt="Ojas Pharmaceuticals facility 2"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">WHO WE ARE </p>
              <h2 className="mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">A TRUSTED PARTNER IN PHERMACEUTICAL SUPPLY.</h2>
              <div className="mt-3 h-[3px] w-20 bg-[#e11d48]" />
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Welcome to <strong className="text-[color:var(--brand-dark)]">Ojas Pharmaceuticals</strong> your trusted partner in excipients, solvents and chemicals since <strong className="text-[color:var(--brand-dark)]">2020</strong>. As supplier of renowned manufacturers such as <strong className="text-[color:var(--brand-dark)]">Gujarat Ambuja Exports Limited, Gulshan Polyols Limited, Bluecraft Agro Pvt Ltd, Manali Petrochemicals Limited, Adani Wilmar Limited, Godrej Industries Limited, Roquette India Pvt Ltd</strong> and more, we cater to diverse industries including Pharma, Home Care, Personal Care, Food and Chemicals.
              </p>
              {/* <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                OJAS PHARMACEUTICALS has a trusted and well established supply chain network for supplying pharmaceutical raw materials, APIs and formulations to the Pharmaceutical, Healthcare, Nutraceutical, Cosmetics, Veterinary and other allied industries. We have a wide distribution network across India, supporting and serving our customer base on a pan-India basis through our professional team.
              </p> */}


              <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-base md:text-lg font-medium text-[color:var(--brand)] hover:text-[color:var(--brand-dark)] group">
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 md:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">WHY CHOOSE US </p>
            <h2 className="
mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">WHY  OJAS PHARMACEUTICAL </h2>
            <div className="mt-3 h-[3px] w-20 bg-[#e11d48] mx-auto" />
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              Ojas Pharmaceuticals strives to provide for the needs of their customers worldwide, leaving no stone unturned in adhering to time limits and technical expertise. All of Ojas activities revolve around 3 core principles – <strong className="text-[color:var(--brand)]">TRUST</strong>, <strong className="text-[color:var(--brand)]">QUALITY</strong>, <strong className="text-[color:var(--brand)]">SERVICE</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SHORT PRODUCTS */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center animate-fade-in-up">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">OUR PRODUCTS </p>
            <h2 className="mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">A GLIMPSE OF OUR CATALOGUE  </h2>
            <div className="mt-3 h-[3px] w-20 bg-[#e11d48] mx-auto" />
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              From pharmaceutical APIs to cosmetics-grade actives — sourced with strict quality standards.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
            {[
              { icon: FlaskConical, title: "Pharmaceuticals Raw Material", items: shortPharma },
              { icon: Sparkles, title: "Cosmetics Raw Materials", items: shortCosmetics },
            ].map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-md border border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--brand)]/30 text-[color:var(--brand)]">
                    <cat.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-[color:var(--brand-dark)]">{cat.title}</h3>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/products">
              <button className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--brand)] px-8 py-3 text-base md:text-lg font-medium text-primary-foreground shadow hover:bg-[color:var(--brand-dark)] hover:-translate-y-0.5 transition-all duration-300">
                View All Products <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-14 md:py-20 border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center animate-fade-in-up">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">TRUSTED BY</p>
            <h2 className="mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">OUR CLIENTS</h2>
            <div className="mt-3 h-[3px] w-20 bg-[#e11d48] mx-auto" />
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Proudly serving leading pharmaceutical, cosmetic and herbal manufacturers across India.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Marquee
            direction="left"
            speed={70}
            items={clients.map((src, idx) => (
              <div key={idx} className="flex h-20 min-w-[180px] items-center justify-center rounded-md border border-border bg-background px-4 py-2 shadow-sm overflow-hidden bg-white">
                <img
                  src={src}
                  alt={`Client logo ${idx + 1}`}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain p-1"
                />
              </div>
            ))}
          />
        </div>
      </section>

      {/* PRINCIPALS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-dark)]">OUR PRINCIPALS</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#16a34a]">IN ASSOCIATION WITH</p>
            <div className="mt-3 h-[3px] w-20 bg-[#e11d48] mx-auto" />
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Supplier of raw materials from globally recognised manufacturers.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Marquee
            direction="right"
            speed={70}
            items={principals.map((src, idx) => (
              <div key={idx} className="flex h-20 min-w-[180px] items-center justify-center rounded-md border border-border bg-card px-4 py-2 shadow-sm overflow-hidden bg-white">
                <img
                  src={src}
                  alt={`Principal logo ${idx + 1}`}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain p-1"
                />
              </div>
            ))}
          />
        </div>
      </section>

      {/* QUICK LINKS WITH IMAGES */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {[
              { to: "/about" as const, title: "About Us", text: "Learn about our expertise in pharmaceutical supply chain and distribution across India.", cta: "Learn More", img: aboutCard },
              { to: "/products" as const, title: "Our Products", text: "Browse our comprehensive catalog of APIs, excipients and cosmetics raw materials.", cta: "View Products", img: productsCard },
              { to: "/contact" as const, title: "Contact Us", text: "Get in touch for orders, partnerships or any product enquiries. We are here to help.", cta: "Reach Out", img: contactCard },
            ].map((c, i) => (
              <Link
                key={c.title}
                to={c.to}
                className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative h-32 sm:h-36 md:h-40 w-full overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-dark)]/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col items-center p-4 md:p-5 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[color:var(--brand-dark)]">{c.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm md:text-base font-medium text-[color:var(--brand)] group-hover:text-[color:var(--brand-dark)]">
                    {c.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
