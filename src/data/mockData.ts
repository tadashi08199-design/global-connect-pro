export interface Provider {
  id: string;
  companyName: string;
  country: string;
  services: string[];
  industry: string;
  experience: number;
  rating: number;
  reviewCount: number;
  description: string;
  certifications: string[];
  verified: boolean;
  logo: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  providerCount: number;
  regulations: {
    legal: string[];
    tax: string[];
    compliance: string[];
  };
}

export interface Service {
  id: string;
  name: string;
  icon: string;
}

export const services: Service[] = [
  { id: "1", name: "Management Consulting", icon: "Briefcase" },
  { id: "2", name: "Legal Advisory", icon: "Scale" },
  { id: "3", name: "Financial Consulting", icon: "TrendingUp" },
  { id: "4", name: "IT & Technology", icon: "Monitor" },
  { id: "5", name: "HR & Recruitment", icon: "Users" },
  { id: "6", name: "Marketing & Strategy", icon: "Target" },
  { id: "7", name: "Tax & Accounting", icon: "Calculator" },
  { id: "8", name: "Real Estate Advisory", icon: "Building" },
];

export const countries: Country[] = [
  {
    id: "1", name: "United Arab Emirates", code: "AE", flag: "🇦🇪", providerCount: 124,
    regulations: {
      legal: ["Free zone company registration available", "100% foreign ownership permitted in most sectors", "No personal income tax"],
      tax: ["9% corporate tax on profits above AED 375,000", "5% VAT on most goods and services", "No withholding tax"],
      compliance: ["Anti-money laundering regulations", "Economic Substance Regulations", "Ultimate Beneficial Ownership reporting"],
    },
  },
  {
    id: "2", name: "Saudi Arabia", code: "SA", flag: "🇸🇦", providerCount: 89,
    regulations: {
      legal: ["Foreign investment license required", "Saudi partner may be required in certain sectors", "Vision 2030 economic diversification"],
      tax: ["20% corporate income tax for foreign entities", "15% VAT", "Zakat obligation for Saudi-owned businesses"],
      compliance: ["SAGIA licensing requirements", "Saudization (Nitaqat) employment quotas", "Transfer pricing regulations"],
    },
  },
  {
    id: "3", name: "United Kingdom", code: "GB", flag: "🇬🇧", providerCount: 203,
    regulations: {
      legal: ["Companies House registration required", "FCA regulation for financial services", "GDPR compliance mandatory"],
      tax: ["25% corporate tax rate", "20% standard VAT rate", "Capital gains tax applies"],
      compliance: ["Anti-money laundering (5th Directive)", "Modern Slavery Act reporting", "Gender pay gap reporting"],
    },
  },
  {
    id: "4", name: "United States", code: "US", flag: "🇺🇸", providerCount: 312,
    regulations: {
      legal: ["State-level incorporation", "SEC regulations for securities", "Federal and state licensing requirements"],
      tax: ["21% federal corporate tax", "State taxes vary (0-12%)", "Sales tax varies by state"],
      compliance: ["SOX compliance for public companies", "FCPA anti-corruption rules", "OFAC sanctions compliance"],
    },
  },
  {
    id: "5", name: "Singapore", code: "SG", flag: "🇸🇬", providerCount: 156,
    regulations: {
      legal: ["ACRA registration required", "Employment Pass for foreign professionals", "Strong IP protection framework"],
      tax: ["17% corporate tax rate", "9% GST (increasing to 9%)", "Extensive double tax treaty network"],
      compliance: ["Personal Data Protection Act", "Anti-money laundering regulations", "Environmental sustainability reporting"],
    },
  },
];

export const providers: Provider[] = [
  {
    id: "1", companyName: "Al Masdar Consulting", country: "United Arab Emirates",
    services: ["Management Consulting", "Financial Consulting"],
    industry: "Energy & Utilities", experience: 15, rating: 4.8, reviewCount: 47,
    description: "Leading consulting firm specializing in energy sector transformation and financial strategy across the GCC region.",
    certifications: ["ISO 9001:2015", "CMC Certified"], verified: true, logo: "AM",
  },
  {
    id: "2", companyName: "Crown Strategy Partners", country: "United Kingdom",
    services: ["Management Consulting", "Marketing & Strategy"],
    industry: "Financial Services", experience: 22, rating: 4.9, reviewCount: 83,
    description: "Award-winning strategy consultancy helping financial institutions navigate digital transformation and regulatory change.",
    certifications: ["FCA Registered", "ISO 27001"], verified: true, logo: "CS",
  },
  {
    id: "3", companyName: "Nexus Legal Advisory", country: "United States",
    services: ["Legal Advisory", "Tax & Accounting"],
    industry: "Cross-border Commerce", experience: 18, rating: 4.7, reviewCount: 62,
    description: "Boutique legal and tax advisory firm focused on cross-border transactions and international trade compliance.",
    certifications: ["ABA Accredited", "CPA Licensed"], verified: true, logo: "NL",
  },
  {
    id: "4", companyName: "TechBridge Solutions", country: "Singapore",
    services: ["IT & Technology", "Management Consulting"],
    industry: "Technology", experience: 10, rating: 4.6, reviewCount: 35,
    description: "Technology consulting firm specializing in cloud infrastructure, cybersecurity, and digital transformation for enterprises in APAC.",
    certifications: ["AWS Partner", "ISO 27001", "CMMI Level 3"], verified: true, logo: "TB",
  },
  {
    id: "5", companyName: "Riyadh Partners Group", country: "Saudi Arabia",
    services: ["Financial Consulting", "Legal Advisory"],
    industry: "Real Estate & Construction", experience: 12, rating: 4.5, reviewCount: 28,
    description: "Premier advisory firm helping international businesses establish and grow operations in the Kingdom of Saudi Arabia.",
    certifications: ["SAGIA Licensed", "CFA Charter"], verified: false, logo: "RP",
  },
  {
    id: "6", companyName: "Pacific HR Advisors", country: "Singapore",
    services: ["HR & Recruitment", "Management Consulting"],
    industry: "Healthcare", experience: 8, rating: 4.4, reviewCount: 19,
    description: "Specialist HR consulting firm supporting healthcare organizations with talent strategy, compliance, and workforce transformation.",
    certifications: ["SHRM Certified", "MOM Licensed"], verified: true, logo: "PH",
  },
];
