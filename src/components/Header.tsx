import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ojas-logo.png";
import cataloguePdf from "@/assets/Ojas_Pherma_Catalogue.pdf";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="w-full z-50 relative bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md">
            <img src={logo} alt="Ojas Pharmaceuticals" className="h-[60px] w-auto object-contain" />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "font-semibold" }}
                className="text-lg font-medium transition-colors text-[color:var(--brand-dark)] hover:text-[color:var(--brand)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={cataloguePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--brand)] px-5 py-2.5 text-lg font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-[color:var(--brand-dark)] hover:shadow-md hover:-translate-y-0.5"
            >
              <BookOpen className="h-5 w-5" /> Catalogue
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[color:var(--brand-dark)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 shadow-md">
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-[color:var(--brand-dark)] hover:text-[color:var(--brand)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={cataloguePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--brand)] px-5 py-2.5 text-lg font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-[color:var(--brand-dark)]"
              >
                <BookOpen className="h-5 w-5" /> Catalogue
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

