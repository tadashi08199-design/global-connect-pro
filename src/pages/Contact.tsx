import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => (
  <div className="py-10">
    <div className="container max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with our team</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-6 md:col-span-1">
          {[
            { icon: Mail, label: "Email", value: "info@consullink.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "Dubai, UAE" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-corporate md:col-span-2" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@email.com" className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="How can we help?" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." rows={5} className="mt-1.5" />
          </div>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
