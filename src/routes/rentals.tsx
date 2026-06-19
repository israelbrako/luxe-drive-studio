import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

const categories = ["All", "Sedan", "SUV", "Sports", "Luxury", "Electric", "Convertible"] as const;
type Sort = "popularity" | "price-asc" | "price-desc" | "brand";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Rent a Luxury Car — DriveLux Motors" },
      { name: "description", content: "Browse our luxury rental fleet: sedans, SUVs, sports cars, EVs and more. Book in seconds." },
    ],
  }),
  component: RentalsPage,
});

function RentalsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<Sort>("popularity");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let r = vehicles.filter((v) => (cat === "All" ? true : v.category === cat));
    if (q.trim()) {
      const s = q.toLowerCase();
      r = r.filter((v) => `${v.brand} ${v.model}`.toLowerCase().includes(s));
    }
    r = [...r].sort((a, b) => {
      if (sort === "price-asc") return a.rentPerDay - b.rentPerDay;
      if (sort === "price-desc") return b.rentPerDay - a.rentPerDay;
      if (sort === "brand") return a.brand.localeCompare(b.brand);
      return b.popularity - a.popularity;
    });
    return r;
  }, [cat, sort, q]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="pt-36 pb-12 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Rent</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-bold">The fleet, at your service</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">Filter, sort, and book any car in under a minute. Free delivery within 25 miles.</p>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_auto] items-stretch">
            <div className="rounded-xl glass flex items-center gap-3 px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search brand or model…"
                className="bg-transparent outline-none py-3.5 text-sm w-full"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-xl glass px-4 py-3.5 text-sm outline-none"
            >
              <option value="popularity">Sort: Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="brand">Brand: A → Z</option>
            </select>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm transition-all ${
                  cat === c
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          {list.length === 0 ? (
            <div className="rounded-2xl glass p-16 text-center text-muted-foreground">No vehicles match your filters.</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((v) => (
                <VehicleCard key={v.id} v={v} mode="rent" />
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
