import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Star, CheckCircle, Filter, MapPin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { providers, countries, services } from "@/data/mockData";

const Providers = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [countryFilter, setCountryFilter] = useState(searchParams.get("country") || "all");
  const [serviceFilter, setServiceFilter] = useState(searchParams.get("service") || "all");

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      const matchSearch = !search || p.companyName.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      const matchCountry = countryFilter === "all" || p.country === countryFilter;
      const matchService = serviceFilter === "all" || p.services.includes(serviceFilter);
      return matchSearch && matchCountry && matchService;
    });
  }, [search, countryFilter, serviceFilter]);

  const clearFilters = () => {
    setSearch("");
    setCountryFilter("all");
    setServiceFilter("all");
  };

  const hasFilters = search || countryFilter !== "all" || serviceFilter !== "all";

  return (
    <div className="py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Find Consulting Providers</h1>
          <p className="text-muted-foreground">Browse verified professionals across {countries.length} countries</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-corporate sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search providers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
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
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-full sm:w-52">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              {services.map((s) => (
                <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-1 h-4 w-4" /> Clear
            </Button>
          )}
        </div>

        {/* Results */}
        <p className="mb-4 text-sm text-muted-foreground">{filtered.length} provider{filtered.length !== 1 ? "s" : ""} found</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((provider) => (
            <Link
              key={provider.id}
              to={`/providers/${provider.id}`}
              className="group rounded-xl border border-border bg-card p-6 shadow-corporate transition-all hover:border-accent/40"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {provider.logo}
                </div>
                {provider.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    <CheckCircle className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground group-hover:text-accent transition-colors">{provider.companyName}</h3>
              <p className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {provider.country} · {provider.industry}
              </p>
              <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{provider.description}</p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {provider.services.map((s) => (
                  <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium text-foreground">{provider.rating}</span>
                  <span className="text-muted-foreground">({provider.reviewCount})</span>
                </div>
                <span className="text-xs text-muted-foreground">{provider.experience}+ years</span>
              </div>
            </Link>
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
