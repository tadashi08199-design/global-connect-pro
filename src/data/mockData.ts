export interface Provider {
  id: string;
  name: string;
  country: string;
  email: string;
  contact: string;
  address: string;
  website: string;
  services: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  providerCount: number;
}

export const providers: Provider[] = [
  { id: "1", name: "Jane", country: "Singapore", email: "jane.ong@hawksford.com", contact: "65 9661 2871", address: "For All Countries", website: "https://www.hawksford.com/", services: "" },
  { id: "2", name: "Richard", country: "Australia", email: "richardchatten@abnaustralia.com.au", contact: "-", address: "Australia", website: "", services: "" },
  { id: "3", name: "Sankalp Pratap Singh", country: "Australia", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "4", name: "Jane", country: "All World", email: "jane.ong@hawksford.com", contact: "65 9661 2871", address: "Singapore", website: "https://www.hawksford.com/", services: "" },
  { id: "5", name: "Nitisha", country: "Canada", email: "nitsyadi03@hotmail.com", contact: "1 (647) 410-7645", address: "Canada", website: "", services: "" },
  { id: "6", name: "Sankalp Pratap Singh", country: "Canada", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "7", name: "Andrian Lupan", country: "Estonia", email: "info@gtpartner.org", contact: "37256619999", address: "Tuukri 19, Tallinn, 10120, Estonia", website: "https://gtpartner.org", services: "Company Registration, Accounting Services, Estonian e-Residency, Company Liquidation, Address Service & Mail Forwarding" },
  { id: "8", name: "Dana Kurz", country: "Germany", email: "contact@nexus-gmbh.biz", contact: "0049 30 343 30 969", address: "", website: "", services: "" },
  { id: "9", name: "Sankalp Pratap Singh", country: "Germany", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "10", name: "Gabor Kocsis", country: "Hungary", email: "info@htaconsulting.hu", contact: "36704245960", address: "", website: "http://htaconsulting.hu/eng/", services: "" },
  { id: "11", name: "Agustin", country: "Luxembourg", email: "agustinlarocca@meridienintl.com", contact: "N/A", address: "", website: "", services: "" },
  { id: "12", name: "Sankalp Pratap Singh", country: "Netherlands", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "13", name: "Adnan", country: "Oman", email: "adnan.ahmed@mfd-services.com", contact: "966 54 519 4606", address: "", website: "", services: "" },
  { id: "14", name: "Ammar Khan", country: "Saudi Arabia", email: "khanammar13@gmail.com", contact: "966 59 891 1486", address: "", website: "", services: "" },
  { id: "15", name: "Adnan", country: "Saudi Arabia", email: "adnan.ahmed@mfd-services.com", contact: "966 54 519 4606", address: "", website: "", services: "" },
  { id: "16", name: "Sharon", country: "Singapore", email: "sharon.soh@sleek.com", contact: "65 8168 5791", address: "Singapore", website: "https://sleek.com", services: "" },
  { id: "17", name: "Sankalp Pratap Singh", country: "Singapore", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "18", name: "Sankalp Pratap Singh", country: "Spain", email: "Sankalp@ondemandint.com", contact: "34665946907 / 9220447406", address: "Gurugram, Haryana", website: "https://ondemandint.com", services: "Netherlands, Spain, Canada, Australia, Singapore" },
  { id: "19", name: "Ibadun Nizar", country: "Sri Lanka", email: "", contact: "94 77 982 2477", address: "", website: "", services: "" },
  { id: "20", name: "Anuhya", country: "United States", email: "info@incorpgenius.com", contact: "81213 47373", address: "Hyderabad", website: "incorpgenius.com", services: "" },
  { id: "21", name: "Siddhartha Yagnik", country: "United States", email: "siddharthayagnik@gmail.com", contact: "99249-54849", address: "US", website: "", services: "" },
];

// Derive countries from providers
const countryFlags: Record<string, string> = {
  "Singapore": "🇸🇬",
  "Australia": "🇦🇺",
  "All World": "🌍",
  "Canada": "🇨🇦",
  "Estonia": "🇪🇪",
  "Germany": "🇩🇪",
  "Hungary": "🇭🇺",
  "Luxembourg": "🇱🇺",
  "Netherlands": "🇳🇱",
  "Oman": "🇴🇲",
  "Saudi Arabia": "🇸🇦",
  "Spain": "🇪🇸",
  "Sri Lanka": "🇱🇰",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
};

const countrySet = [...new Set(providers.map((p) => p.country))];
export const countries: Country[] = countrySet.map((name, i) => ({
  id: String(i + 1),
  name,
  flag: countryFlags[name] || "🏳️",
  providerCount: providers.filter((p) => p.country === name).length,
}));
