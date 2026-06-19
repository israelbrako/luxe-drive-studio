import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Car,
  Clock,
  HeartHandshake,
  MapPin,
  Search,
  Shield,
  Sparkles,
  Star,
  Tag,
  Wallet,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DriveLux Motors — Luxury Car Rentals & Premium Vehicle Sales" },
      { name: "description", content: "Drive your dream car today. Premium car rentals and luxury vehicle sales from BMW, Ferrari, Tesla, Range Rover and more." },
      { property: "og:title", content: "DriveLux Motors — Luxury Car Rentals & Sales" },
      { property: "og:description", content: "Premium car rentals and luxury vehicle sales. Drive what moves you." },
    ],
  }),
  component: HomePage,
});

const reasons = [
  { icon: Car, title: "Wide Vehicle Selection", desc: "From economy to exotics — 1,200+ vehicles across every category." },
  { icon: Tag, title: "Affordable Rates", desc: "Transparent pricing with no hidden fees. Best price guaranteed." },
  { icon: Shield, title: "Fully Insured", desc: "Comprehensive coverage included with every rental and purchase." },
  { icon: Clock, title: "24/7 Support", desc: "Real humans, round the clock, wherever the road takes you." },
  { icon: Calendar, title: "Flexible Plans", desc: "By the day, week, month — or own it outright with easy financing." },
  { icon: HeartHandshake, title: "Trusted by Thousands", desc: "120,000+ five-star journeys across 40 cities and counting." },
];

const testimonials = [
  { name: "Sophia Lin", role: "Creative Director", quote: "The booking took 30 seconds. The Range Rover was spotless and delivered straight to my hotel. Unmatched.", rating: 5 },
  { name: "Marcus Reed", role: "Entrepreneur", quote: "Bought my Tesla Model S through DriveLux — financing was effortless and the team genuinely cared.", rating: 5 },
  { name: "Amélie Roux", role: "Travel Writer", quote: "Drove the F8 Tributo along the coast for a week. Pure poetry. They've earned a customer for life.", rating: 5 },
];

const stats = [
  { value: "1,200+", label: "Cars Available" },
  { value: "120K+", label: "Happy Customers" },
  { value: "40", label: "Cities Served" },
  { value: "18", label: "Years of Excellence" },
];

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src={heroCar}
          alt="Luxury black coupe at night"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 sm:px-8 pb-20 pt-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-silver">
              <Sparkles className="h-3 w-3 text-accent" /> The new 2024 collection is here
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95]">
              Drive Your <br />
              <span className="text-silver-gradient">Dream Car</span> Today
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              Premium car rentals and luxury vehicle sales. From everyday elegance to once-in-a-lifetime drives — your next car is waiting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/rentals"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Rent a Car
                <Car className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/showroom"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent/40"
              >
                Browse Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING */}
      <section className="relative -mt-16 z-10 px-5 sm:px-8">
        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/rentals" }); }}
          className="mx-auto max-w-6xl rounded-2xl glass shadow-luxe p-4 sm:p-6 grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]"
        >
          <Field icon={<MapPin className="h-4 w-4" />} label="Pickup Location">
            <input className="bg-transparent outline-none w-full text-sm placeholder:text-muted-foreground" placeholder="Los Angeles, CA" defaultValue="Los Angeles, CA" />
          </Field>
          <Field icon={<Calendar className="h-4 w-4" />} label="Pickup Date">
            <input type="date" className="bg-transparent outline-none w-full text-sm [color-scheme:dark]" />
          </Field>
          <Field icon={<Calendar className="h-4 w-4" />} label="Return Date">
            <input type="date" className="bg-transparent outline-none w-full text-sm [color-scheme:dark]" />
          </Field>
          <Field icon={<Car className="h-4 w-4" />} label="Vehicle Type">
            <select className="bg-transparent outline-none w-full text-sm">
              <option>All Vehicles</option><option>Sedan</option><option>SUV</option><option>Sports</option><option>Electric</option><option>Luxury</option>
            </select>
          </Field>
          <button type="submit" className="rounded-xl bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <Search className="h-4 w-4" /> Search
          </button>
        </form>
      </section>


      {/* FEATURED VEHICLES */}
      <Section
        eyebrow="The Collection"
        title="Featured vehicles"
        subtitle="Hand-picked from our fleet — the cars our customers love most this season."
        action={{ label: "View all", to: "/rentals" }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.slice(0, 6).map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section
        eyebrow="Why DriveLux"
        title="Built for drivers who expect more"
        subtitle="Everything that matters, refined to the smallest detail."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl glass p-7 transition-all hover:border-accent/40 hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <section className="mt-32 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl glass shadow-luxe overflow-hidden">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border/30">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-8 sm:p-10 text-center">
                <p className="font-display text-4xl sm:text-5xl font-bold text-silver-gradient">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Word on the road"
        title="What our drivers say"
        subtitle="Five-star journeys from real customers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl glass p-7 flex flex-col">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/40">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mt-32 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-accent/20 via-charcoal to-charcoal border border-accent/30 p-10 sm:p-16 text-center shadow-luxe">
          <Award className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold max-w-2xl mx-auto">
            Ready for the keys to something extraordinary?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you're renting for the weekend or buying for the long haul — let's get you behind the wheel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/rentals" className="rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform inline-flex items-center gap-2">
              <Wallet className="h-4 w-4" /> Start renting
            </Link>
            <Link to="/showroom" className="rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-accent/40">
              Explore showroom
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="rounded-xl bg-secondary/40 px-4 py-2.5 border border-border/40 focus-within:border-accent/60 transition-colors">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {icon}<span>{label}</span>
      </div>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function Section({
  eyebrow, title, subtitle, action, children,
}: {
  eyebrow: string; title: string; subtitle?: string;
  action?: { label: string; to: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mt-32 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold max-w-2xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground max-w-xl">{subtitle}</p>}
          </div>
          {action && (
            <Link to={action.to} className="text-sm text-silver-bright hover:text-accent underline-offset-4 hover:underline self-start sm:self-end">
              {action.label} →
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
