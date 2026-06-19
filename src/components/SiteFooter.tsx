import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-accent to-accent/60 text-accent-foreground font-black">D</div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold">DriveLux</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Motors</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Luxury car rentals and premium vehicle sales. Drive what moves you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:text-accent transition-colors" aria-label="social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Explore", links: [["Rentals", "/rentals"], ["Showroom", "/showroom"], ["About", "/about"], ["Contact", "/contact"]] },
            { title: "Support", links: [["Help Center", "#"], ["Insurance", "#"], ["Roadside", "#"], ["FAQs", "#"]] },
            { title: "Company", links: [["Careers", "#"], ["Press", "#"], ["Partners", "#"], ["Privacy", "#"]] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-silver mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DriveLux Motors. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with precision in California</p>
        </div>
      </div>
    </footer>
  );
}
