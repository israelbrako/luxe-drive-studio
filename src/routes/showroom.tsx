import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { CalendarCheck, GitCompare, Wallet } from "lucide-react";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Showroom — Buy a Luxury Car | DriveLux Motors" },
      { name: "description", content: "Browse premium vehicles for sale. Financing available. Schedule a test drive today." },
    ],
  }),
  component: ShowroomPage,
});

function ShowroomPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="pt-36 pb-12 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Showroom</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-bold">Own something <span className="text-silver-gradient">extraordinary</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">Certified pre-owned and brand new. Financing from 2.9% APR, test drives at your door.</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Wallet, title: "Flexible Financing", desc: "From 2.9% APR, terms up to 84 months." },
              { icon: CalendarCheck, title: "Test Drive at Home", desc: "We bring the car to your driveway." },
              { icon: GitCompare, title: "Compare Side-by-Side", desc: "Stack up to 3 vehicles and decide." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl glass p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/20 border border-accent/30">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} v={v} mode="buy" />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
