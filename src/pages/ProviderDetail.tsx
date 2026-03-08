import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Mail, Phone, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/mockData";

const ProviderDetail = () => {
  const { id } = useParams();
  const provider = providers.find((p) => p.id === id);

  if (!provider) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Provider not found</h1>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/providers">Back to Providers</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="container max-w-3xl">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/providers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Providers</Link>
        </Button>

        <div className="rounded-xl border border-border bg-card shadow-corporate">
          <div className="border-b border-border p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                {provider.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">{provider.name}</h1>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {provider.country}
                </p>
                {provider.address && (
                  <p className="mt-1 text-sm text-muted-foreground">{provider.address}</p>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {provider.services && (
              <div>
                <h2 className="mb-3 text-lg font-semibold text-card-foreground">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {provider.services.split(",").map((s) => (
                    <span key={s.trim()} className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground">{s.trim()}</span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="mb-3 text-lg font-semibold text-card-foreground">Contact Information</h2>
              <div className="space-y-3">
                {provider.email && (
                  <a href={`mailto:${provider.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="h-4 w-4" /> {provider.email}
                  </a>
                )}
                {provider.contact && provider.contact !== "-" && provider.contact !== "N/A" && (
                  <p className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" /> {provider.contact}
                  </p>
                )}
                {provider.website && (
                  <a href={provider.website.startsWith("http") ? provider.website : `https://${provider.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Globe className="h-4 w-4" /> {provider.website} <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
