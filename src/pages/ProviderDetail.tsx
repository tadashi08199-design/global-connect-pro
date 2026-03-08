import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Mail, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/mockData";
import { maskName } from "@/lib/providerUtils";

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
                <h1 className="text-2xl font-bold text-card-foreground">{maskName(provider.name)}</h1>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {provider.country}
                </p>
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

            <div className="rounded-lg border border-border bg-muted/50 p-6 text-center">
              <Lock className="mx-auto mb-3 h-8 w-8 text-muted-foreground/60" />
              <h2 className="mb-1 text-lg font-semibold text-card-foreground">Contact Details Hidden</h2>
              <p className="mb-4 text-sm text-muted-foreground">Subscribe to view full contact information including email, phone, and website.</p>
              <Button asChild>
                <Link to="/register">Subscribe to View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
