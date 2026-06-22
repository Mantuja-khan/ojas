import { createFileRoute } from "@tanstack/react-router";
import productsBanner from "@/assets/products-banner.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { FlaskConical, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

const pharmaceuticals = [
  "Liquid Glucose SO2 Free",
  "Sorbitol 70% IP & BP",
  "Glycerine IP & BP",
  "Methylene Chloride Non IP & BP",
  "Iso Propyl Alcohol IP & BP",
  "Propylene Glycol IP",
  "Citric Acid Monohydrate IP & BP",
  "Sodium Citrate IP & BP",
  "Di Sodium Hydrogen Citrate BP",
  "Sodium CMC HVP IP",
  "Sodium Starch Glycolate IP & BP",
  "Cross Carmellose Sodium IP & BP",
  "Maize Starch IP & BP",
  "Talc IP & BP",
  "Light Kaolin IP & BP",
  "Calcium Carbonate IP & BP",
  "Calcium Carbonate Oyster Shell",
  "Di Calcium Phosphate IP",
  "Tri Basic Calcium Phosphate IP",
  "MCCP IP",
  "MCC DC 102 IP",
  "Magnesium Stearate IP",
  "PEG 400 & 4000",
  "Calcium Hydroxide BP",
  "Aerosil",
  "Light Liquid Paraffin IP",
  "Di Sodium Edetate IP",
  "Calcium Gluconate USP",
  "Sodium Benzoate IP & BP",
  "Zinc Oxide IP",
  "Polysorbate 20 & 80",
  "Propyl Paraben Plain IP",
  "Methyl Paraben Plain IP",
  "Heavy Liquid Paraffin IP",
];

const cosmetics = [
  "SLES 70% and 28%",
  "CMEA",
  "CAPB",
  "PQ 7 and PQ 10",
  "SLS Powder HD and Non HD",
  "Ethyl Acetate",
  "Toluene",
  "Calcium Formate 99%",
  "Hydrogen Peroxide",
  "Hard Paraffin Wax",
  "Niacinamide",
  "Emulsifying Wax",
  "Ceto Stearyl Alcohol",
  "Cetyl Alcohol",
  "Glycerol Monostearate",
  "EGDS",
  "PEG 150 Di Stearate",
  "Coco Glucoside",
  "Sodium Hydroxide",
  "Stearic Acid 1843",
  "Myristic Acid",
  "Palmitic Acid",
  "Titanium Dioxide",
  "PVP K-30",
  "AOS Liquid",
  "Xanthan Gum FNCS",
  "Salicylic Acid",
  "Sodium Lactate",
  "Ketoconazole",
  "Dimethicone 200",
  "Vitamin E",
];

function ProductGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((name, i) => (
        <div
          key={name}
          className="rounded-sm border border-border bg-card px-4 py-3 text-base text-[color:var(--brand-dark)] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-[color:var(--brand)]/40 animate-fade-in-up"
          style={{ animationDelay: `${Math.min(i * 30, 600)}ms` }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] align-middle" />
          {name}
        </div>
      ))}
    </div>
  );
}


function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <img src={productsBanner} alt="Pharmacist examining medicine" loading="lazy" width={1920} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[color:var(--brand-dark)]/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-semibold underline-accent animate-fade-in-up">OUR PRODUCTS</h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 leading-relaxed animate-fade-in-up delay-100">
            A comprehensive range of pharmaceutical and cosmetics raw materials sourced with strict quality standards.
          </p>
        </div>

      </section>

      {/* Pharmaceuticals */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--brand)]/30 text-[color:var(--brand)]">
              <FlaskConical className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--brand-dark)]">PHARMACEUTICALS RAW MATERIAL</h2>
              <p className="text-base text-muted-foreground">High-purity APIs and excipients across IP, BP and USP grades.</p>
            </div>
          </div>
          <ProductGrid items={pharmaceuticals} />
        </div>
      </section>

      {/* Cosmetics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--brand)]/30 text-[color:var(--brand)]">
              <Sparkles className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--brand-dark)]">COSMETICS RAW MATERIALS</h2>
              <p className="text-base text-muted-foreground">Surfactants, emulsifiers, actives and specialty ingredients for personal care.</p>
            </div>
          </div>
          <ProductGrid items={cosmetics} />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
