import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Award, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DriveLux Motors" },
      { name: "description", content: "The story, mission, and team behind DriveLux Motors — 18 years of luxury automotive service." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Elena Vasquez", role: "Founder & CEO" },
  { name: "James Okafor", role: "Head of Fleet" },
  { name: "Yuki Tanaka", role: "Customer Experience" },
  { name: "David Bernstein", role: "Sales Director" },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="pt-36 pb-16 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">About DriveLux</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-bold">Eighteen years of <span className="text-silver-gradient">obsession</span> with the drive</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Founded in 2007 with three cars and one promise — to make extraordinary driving experiences accessible.
            Today we serve 120,000+ customers across 40 cities, with the same hand-shake hospitality we started with.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", desc: "Put the world's most desirable cars within reach — whether for a day or a decade." },
            { icon: Heart, title: "Our Vision", desc: "A world where the joy of a perfect drive is never gatekept by ownership." },
            { icon: Award, title: "Recognized", desc: "Luxury Travel Awards 2023, Forbes Top 50 Mobility Brands, J.D. Power #1 in Service." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl glass p-8">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Meet the team</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl glass p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-accent/40 to-charcoal grid place-items-center text-2xl font-display font-bold text-accent-foreground">
                  {m.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <p className="mt-4 font-semibold">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-8">Partner Brands</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
            {["BMW", "Mercedes", "Tesla", "Ferrari", "Range Rover", "Porsche", "Audi", "Lexus"].map((b) => (
              <span key={b} className="font-display text-2xl tracking-widest text-silver">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
