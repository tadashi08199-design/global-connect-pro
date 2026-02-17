import { useParams, Link } from "react-router-dom";
import { Star, CheckCircle, MapPin, Calendar, Award, ArrowLeft, MessageSquare, Bookmark } from "lucide-react";
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
      <div className="container max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/providers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Providers</Link>
        </Button>

        <div className="rounded-xl border border-border bg-card shadow-corporate">
          {/* Header */}
          <div className="border-b border-border p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                  {provider.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-card-foreground">{provider.companyName}</h1>
                    {provider.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                        <CheckCircle className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {provider.country}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{provider.rating}</span>
                      <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {provider.experience}+ years
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" /> Save
                </Button>
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <MessageSquare className="mr-2 h-4 w-4" /> Request Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-card-foreground">About</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{provider.description}</p>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-card-foreground">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((s) => (
                    <span key={s} className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>

              {/* Mock reviews */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-card-foreground">Client Reviews</h2>
                <div className="space-y-4">
                  {[
                    { name: "John D.", text: "Excellent service and deep industry knowledge. Highly recommended.", rating: 5 },
                    { name: "Sarah M.", text: "Very professional team that delivered results on time and within budget.", rating: 4 },
                  ].map((review, i) => (
                    <div key={i} className="rounded-lg border border-border bg-surface-raised p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-foreground">{review.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-surface-raised p-5">
                <h3 className="mb-3 text-sm font-semibold text-card-foreground">Industry</h3>
                <p className="text-sm text-muted-foreground">{provider.industry}</p>
              </div>

              <div className="rounded-lg border border-border bg-surface-raised p-5">
                <h3 className="mb-3 text-sm font-semibold text-card-foreground flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" /> Certifications
                </h3>
                <ul className="space-y-2">
                  {provider.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent" /> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
