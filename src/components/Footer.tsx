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
    <footer className="relative overflow-hidden bg-[color:var(--brand-dark)] pt-12 pb-6 text-white/90">
      {/* Background Image with blur */}
      <img
        src="https://i.pinimg.com/736x/f0/17/26/f0172693471ea32e537c18c792bc5596.jpg"
        alt="Footer background"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover filter blur-[4px] scale-105 opacity-30 select-none pointer-events-none"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[color:var(--brand-dark)]/85" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center justify-center rounded-md px-1 py-1.5">
            <img src={logo} alt="Ojas Pharmaceuticals" className="h-30 w-auto object-contain" />
          </span>
          <p className="text-sm md:text-base leading-relaxed text-white/80">
            Trusted supplier of pharmaceutical and cosmetics raw materials across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base md:text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm md:text-base text-white/70 hover:text-[color:var(--brand)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base md:text-lg font-semibold text-white">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm md:text-base text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="tel:8766651958" className="hover:text-white transition-colors">+91 87666 51958</a>
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="tel:01493460250" className="hover:text-white transition-colors">Landline: 01493-460250</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
              <a href="mailto:Info@ojaspharma.in" className="hover:text-white transition-colors break-all">Info@ojaspharma.in</a>
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

      <div className="relative z-10 mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-5 text-center">
        <p className="text-xs md:text-sm text-white/60">© 2026 Ojas Pharmaceuticals. All rights reserved.</p>
      </div>
    </footer>
  );
}
