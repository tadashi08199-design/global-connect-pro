import { Link } from "react-router-dom";
import { Search, ArrowRight, Shield, Globe, Users, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { providers, countries } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

const stats = [
  { value: `${providers.length}+`, label: "Service Providers" },
  { value: `${countries.length}`, label: "Countries Covered" },
  { value: "10K+", label: "Consultations" },
  { value: "98%", label: "Client Satisfaction" },
];

const howItWorks = [
  { step: "01", title: "Search & Discover", description: "Browse service providers filtered by country and services.", icon: Search },
  { step: "02", title: "Review & Compare", description: "View contact details, services offered, and coverage areas.", icon: Star },
  { step: "03", title: "Connect & Engage", description: "Reach out directly via email or phone to start working together.", icon: Users },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 to-navy/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Globe className="h-4 w-4" /> Providers in {countries.length} countries
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Find Service Providers{" "}
              <span className="text-gradient-gold">Worldwide</span>
            </h1>
            <p className="mb-10 text-lg text-primary-foreground/70 md:text-xl">
              Connect with service providers across multiple countries. Navigate regulations, scale your business, and achieve success globally.
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search providers, countries..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="h-12 border-0 bg-surface pl-10 text-foreground shadow-corporate" />
              </div>
              <Button size="lg" className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold" asChild>
                <Link to={`/providers${searchQuery ? `?q=${searchQuery}` : ""}`}>
                  Search <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground">Three simple steps to find your ideal service provider</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative rounded-xl bg-card p-8 shadow-corporate">
                <span className="mb-4 block text-4xl font-bold text-accent/20">{item.step}</span>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold text-foreground">Featured Providers</h2>
              <p className="text-muted-foreground">Service providers from our network</p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/providers">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.slice(0, 6).map((provider) => (
              <Link
                key={provider.id}
                to={`/providers/${provider.id}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-corporate transition-all hover:border-accent/40"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {provider.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">{provider.name}</h3>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {provider.country}
                    </p>
                  </div>
                </div>
                {provider.services && (
                  <p className="text-xs text-muted-foreground line-clamp-2">{provider.services}</p>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/providers">View All Providers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-gradient-navy py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-primary-foreground">Countries We Cover</h2>
            <p className="text-primary-foreground/60">Service providers available in these markets</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/countries/${country.id}`}
                className="group rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 text-center transition-all hover:border-accent/40 hover:bg-primary-foreground/10"
              >
                <div className="mb-2 text-3xl">{country.flag}</div>
                <h3 className="text-sm font-semibold text-primary-foreground">{country.name}</h3>
                <p className="text-xs text-primary-foreground/50">{country.providerCount} providers</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl bg-card p-10 text-center shadow-corporate md:p-16">
            <Shield className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h2 className="mb-3 text-3xl font-bold text-card-foreground">Ready to Get Started?</h2>
            <p className="mb-8 text-muted-foreground">Join businesses finding the right service providers through ConsulLink.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/providers">Browse Providers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
