import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Filter, MapPin, X, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { providers, countries } from "@/data/mockData";
import { maskName } from "@/lib/providerUtils";

const Providers = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [countryFilter, setCountryFilter] = useState(searchParams.get("country") || "all");

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.email.toLowerCase().includes(search.toLowerCase()) || p.services.toLowerCase().includes(search.toLowerCase());
      const matchCountry = countryFilter === "all" || p.country === countryFilter;
      return matchSearch && matchCountry;
    });
  }, [search, countryFilter]);

  const clearFilters = () => {
    setSearch("");
    setCountryFilter("all");
  };

  const hasFilters = search || countryFilter !== "all";

  return (
    <div className="py-10">
      <div className="container">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Find Service Providers</h1>
          <p className="text-muted-foreground">Browse providers across {countries.length} countries</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-corporate sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by name, email, or services..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              {countries.map((c) => (
                <SelectItem key={c.id} value={c.name}>{c.flag} {c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-1 h-4 w-4" /> Clear
            </Button>
          )}
        </div>

        <p className="mb-4 text-sm text-muted-foreground">{filtered.length} provider{filtered.length !== 1 ? "s" : ""} found</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((provider) => (
            <div
              key={provider.id}
              className="group rounded-xl border border-border bg-card p-6 shadow-corporate transition-all hover:border-accent/40"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {provider.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{maskName(provider.name)}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {provider.country}
                  </p>
                </div>
              </div>

              {provider.services && (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {provider.services.split(",").map((s) => (
                    <span key={s.trim()} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{s.trim()}</span>
                  ))}
                </div>
              )}

              <div className="space-y-1.5 border-t border-border pt-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" /> <span className="blur-sm select-none">hidden@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="h-3 w-3" /> <span className="blur-sm select-none">+XX XXXX XXXX</span>
                </div>
                <p className="mt-2 text-xs text-accent font-medium">
                  <Link to="/register" className="hover:underline">Subscribe to view full details →</Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <Filter className="mx-auto mb-4 h-10 w-10 text-muted-foreground/40" />
            <h3 className="text-lg font-semibold text-foreground">No providers found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Providers;
