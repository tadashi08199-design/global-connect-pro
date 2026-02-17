import { Link } from "react-router-dom";
import { ArrowRight, FileText, Scale, Calculator } from "lucide-react";
import { countries } from "@/data/mockData";

const Countries = () => (
  <div className="py-10">
    <div className="container">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Country Regulations</h1>
        <p className="text-muted-foreground">Legal requirements, tax information, and compliance rules by country</p>
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
            <p className="mb-4 text-sm text-muted-foreground">{country.providerCount} verified providers</p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Scale className="h-3.5 w-3.5 text-accent" /> {country.regulations.legal.length} legal requirements</div>
              <div className="flex items-center gap-2"><Calculator className="h-3.5 w-3.5 text-accent" /> {country.regulations.tax.length} tax rules</div>
              <div className="flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-accent" /> {country.regulations.compliance.length} compliance items</div>
            </div>

            <div className="mt-4 flex items-center text-sm font-medium text-accent">
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Countries;
