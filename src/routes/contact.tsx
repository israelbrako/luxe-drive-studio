import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DriveLux Motors" },
      { name: "description", content: "Get in touch with DriveLux Motors. Email, phone, WhatsApp, or visit our flagship showroom." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="pt-36 pb-16 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-bold">Let's talk <br /><span className="text-silver-gradient">cars</span></h1>
            <p className="mt-4 text-muted-foreground max-w-md">Questions, custom requests, or just want to say hi — we usually reply within an hour.</p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Call", value: "+1 (310) 555-LUXE" },
                { icon: MessageCircle, label: "WhatsApp", value: "+1 (310) 555-5893" },
                { icon: Mail, label: "Email", value: "hello@drivelux.com" },
                { icon: MapPin, label: "Flagship Showroom", value: "8901 Sunset Blvd, West Hollywood, CA" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl glass p-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/20 border border-accent/30">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    <p className="font-medium truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within the hour."); (e.currentTarget as HTMLFormElement).reset(); }}
            className="rounded-3xl glass shadow-luxe p-8"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <div className="mt-6 grid gap-4">
              <input required className="rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Your name" />
              <input required type="email" className="rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Email address" />
              <input className="rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Subject" />
              <textarea required rows={5} className="rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm outline-none focus:border-accent resize-none" placeholder="Tell us what you're looking for…" />
              <button type="submit" className="rounded-xl bg-accent text-accent-foreground py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden glass aspect-[21/9]">
          <iframe
            title="DriveLux flagship location"
            className="w-full h-full grayscale opacity-80"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-118.39%2C34.08%2C-118.36%2C34.10&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
