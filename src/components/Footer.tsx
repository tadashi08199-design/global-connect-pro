import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Globe className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Consul<span className="text-accent">Link</span>
            </span>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Connecting businesses with trusted consulting professionals across the globe.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Platform</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            <li><Link to="/providers" className="hover:text-primary-foreground transition-colors">Find Providers</Link></li>
            <li><Link to="/countries" className="hover:text-primary-foreground transition-colors">Country Regulations</Link></li>
            <li><Link to="/register" className="hover:text-primary-foreground transition-colors">Become a Provider</Link></li>
            <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info.consullink@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 8341727278</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Hyderabad, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} ConsulLink. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
