import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is ConsulLink?", a: "ConsulLink is a global marketplace that connects businesses with verified consulting professionals across multiple countries and service areas." },
  { q: "How are providers verified?", a: "All provider profiles undergo a thorough review by our admin team. We verify certifications, experience, and business credentials before approval." },
  { q: "How much does it cost to use ConsulLink?", a: "Creating an account and browsing providers is free for clients. Consultation fees are set by individual providers. Premium features may be available through subscription plans." },
  { q: "Can I become a service provider?", a: "Yes! Register as a provider, complete your profile with company details, services, certifications, and supporting documents. Your profile will be reviewed and approved by our admin team." },
  { q: "How do I send a consultation request?", a: "Once registered as a client, visit any provider's profile and click 'Request Consultation.' You can describe your needs and the provider will respond directly." },
  { q: "What countries do you cover?", a: "We currently cover the UAE, Saudi Arabia, United Kingdom, United States, and Singapore, with more countries being added regularly." },
  { q: "How can I leave a review?", a: "After completing a consultation, you'll be able to rate and review your provider through your client dashboard." },
  { q: "Is my data secure?", a: "Absolutely. We use industry-standard encryption and security practices to protect all user data and communications." },
];

const FAQ = () => (
  <div className="py-10">
    <div className="container max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Everything you need to know about ConsulLink</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-6 shadow-corporate">
            <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default FAQ;
