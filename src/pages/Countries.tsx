import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/mockData";

const Countries = () => (
  <div className="py-10">
    <div className="container">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Countries</h1>
        <p className="text-muted-foreground">Browse service providers by country</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.id}
            to={`/countries/${country.id}`}
            className="group rounded-xl border border-border bg-card p-6 shadow-corporate transition-all hover:border-accent/40"
          >
            <div className="mb-4 text-4xl">{country.flag}</div>
            <h2 className="mb-1 text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">{country.name}</h2>
            <p className="mb-4 text-sm text-muted-foreground">{country.providerCount} provider{country.providerCount !== 1 ? "s" : ""}</p>
            <div className="flex items-center text-sm font-medium text-accent">
              View Providers <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Countries;
