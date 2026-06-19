import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rentals", label: "Rent" },
  { to: "/showroom", label: "Showroom" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40 py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gradient-to-br from-accent to-accent/60 text-accent-foreground font-black">
            D
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">DriveLux</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Motors</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/rentals" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link
            to="/rentals"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md glass"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-5 mt-3 rounded-2xl glass p-4 animate-fade-in">
          <div className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm border-b border-border/40 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/rentals"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-foreground py-2 text-center text-sm font-medium text-background"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
