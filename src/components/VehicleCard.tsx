import { ArrowUpRight, Fuel, Gauge, Settings2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ v, mode = "rent" }: { v: Vehicle; mode?: "rent" | "buy" }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl glass shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <img
          src={v.image}
          alt={`${v.brand} ${v.model}`}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-silver-bright">
          {v.category}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
          {v.year}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{v.brand}</p>
            <h3 className="mt-1 text-lg font-semibold truncate">{v.model}</h3>
          </div>
          <div className="text-right shrink-0">
            {mode === "rent" ? (
              <>
                <p className="text-xl font-bold text-silver-gradient">${v.rentPerDay}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">/day</p>
              </>
            ) : (
              <>
                <p className="text-xl font-bold text-silver-gradient">${(v.price / 1000).toFixed(0)}k</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">starting</p>
              </>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
          <div className="flex flex-col items-center gap-1 rounded-lg bg-secondary/40 py-3">
            <Gauge className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">{v.mileage}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg bg-secondary/40 py-3">
            <Fuel className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">{v.fuel}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg bg-secondary/40 py-3">
            <Settings2 className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">{v.transmission}</span>
          </div>
        </div>

        <Link
          to={mode === "rent" ? "/rentals" : "/showroom"}
          className="mt-5 group/btn flex w-full items-center justify-between rounded-xl border border-border/60 px-4 py-3 text-sm font-medium transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <span>{mode === "rent" ? "Book this car" : "View details"}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-45" />
        </Link>
      </div>
    </article>
  );
}
