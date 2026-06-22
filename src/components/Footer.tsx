import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, PhoneCall, FileText } from "lucide-react";
import logo from "@/assets/ojas-logo.png";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Products", to: "/products" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-12 pb-6 text-foreground/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center justify-center rounded-md px-1 py-1.5">
            <img src={logo} alt="Ojas Pharmaceuticals" className="h-20 w-auto object-contain" />
          </span>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Trusted supplier of pharmaceutical and cosmetics raw materials across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base md:text-lg font-semibold text-[color:var(--brand-dark)]">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm md:text-base text-muted-foreground hover:text-[color:var(--brand)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base md:text-lg font-semibold text-[color:var(--brand-dark)]">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="tel:8766651958" className="hover:text-[color:var(--brand-dark)] transition-colors">+91 87666 51958</a>
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="tel:01493460250" className="hover:text-[color:var(--brand-dark)] transition-colors">Landline: 01493-460250</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="mailto:Info@ojaspharma.in" className="hover:text-[color:var(--brand-dark)] transition-colors break-all">Info@ojaspharma.in</a>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <span>GST: 08GNWPS8837J1ZM</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <span>S-SF 49, Second Floor, Capital Highstreet, Phool Bagh Chowk, Bhiwadi, Distt. Alwar, Rajasthan 301019</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-5 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">© 2026 Ojas Pharmaceuticals. All rights reserved.</p>
      </div>
    </footer>
  );
}
