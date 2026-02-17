import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Scale, Calculator, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { countries, providers } from "@/data/mockData";

const CountryDetail = () => {
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);

  if (!country) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Country not found</h1>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/countries">Back to Countries</Link>
        </Button>
      </div>
    );
  }

  const countryProviders = providers.filter((p) => p.country === country.name);

  return (
    <div className="py-10">
      <div className="container max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/countries"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Countries</Link>
        </Button>

        <div className="mb-8 flex items-center gap-4">
          <span className="text-5xl">{country.flag}</span>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{country.name}</h1>
            <p className="text-muted-foreground">{country.providerCount} verified providers</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Legal */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-corporate">
            <div className="mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-semibold text-card-foreground">Legal Requirements</h2>
            </div>
            <ul className="space-y-3">
              {country.regulations.legal.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground border-l-2 border-accent/30 pl-3">{item}</li>
              ))}
            </ul>
          </div>

          {/* Tax */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-corporate">
            <div className="mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-semibold text-card-foreground">Tax Information</h2>
            </div>
            <ul className="space-y-3">
              {country.regulations.tax.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground border-l-2 border-accent/30 pl-3">{item}</li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-corporate">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-semibold text-card-foreground">Compliance</h2>
            </div>
            <ul className="space-y-3">
              {country.regulations.compliance.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground border-l-2 border-accent/30 pl-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-muted p-6 text-center">
          <Download className="mx-auto mb-2 h-6 w-6 text-accent" />
          <h3 className="font-semibold text-foreground">Country Regulation Guide</h3>
          <p className="mb-3 text-sm text-muted-foreground">Download the full regulatory guide for {country.name}</p>
          <Button variant="outline" size="sm">Download PDF</Button>
        </div>

        {countryProviders.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-foreground">Providers in {country.name}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {countryProviders.map((p) => (
                <Link key={p.id} to={`/providers/${p.id}`} className="rounded-lg border border-border bg-card p-4 hover:border-accent/40 transition-colors">
                  <h3 className="font-semibold text-card-foreground">{p.companyName}</h3>
                  <p className="text-xs text-muted-foreground">{p.services.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
