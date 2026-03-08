import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Globe, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { countries, providers } from "@/data/mockData";
import { maskName } from "@/lib/providerUtils";

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
            <p className="text-muted-foreground">{country.providerCount} provider{country.providerCount !== 1 ? "s" : ""}</p>
          </div>
        </div>

        {countryProviders.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {countryProviders.map((p) => (
              <div key={p.id} className="rounded-xl border border-border bg-card p-5 shadow-corporate">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {p.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{maskName(p.name)}</h3>
                  </div>
                </div>
                {p.services && (
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.services.split(",").map((s) => (
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
        ) : (
          <div className="py-10 text-center text-muted-foreground">No providers listed for this country yet.</div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
