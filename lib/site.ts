import { person } from "./content";

// Set NEXT_PUBLIC_SITE_URL to the production domain so canonical URLs, the sitemap
// and Open Graph tags point at the right place.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oluwatosindada.vercel.app"
).replace(/\/$/, "");

export const siteTitle = `${person.name} — HR & People Management Professional, Lagos`;

export const siteDescription =
  "Oluwatosin Dada is a Lagos-based HR professional and People Management Executive specialising in HR operations, employee relations, performance management, payroll & compliance, HR governance and ISO 9001 / ISO 27001 documentation. I build structure where there is ambiguity.";

export const keywords = [
  "Oluwatosin Dada",
  "Dada Oluwatosin",
  "Dada Oluwatosin Oluwasola",
  "HR professional Lagos",
  "People Management Executive",
  "HR Business Partner Nigeria",
  "People Operations",
  "HR Operations",
  "HR Strategy",
  "HR Governance",
  "HR Transformation",
  "Employee Relations",
  "Performance Management",
  "Payroll and statutory compliance Nigeria",
  "PAYE pension HMO administration",
  "HR audit",
  "HRIS implementation",
  "ISO 9001:2015",
  "ISO/IEC 27001:2022",
  "CIPM",
  "Xown Solutions",
  "Chemical and Allied Products PLC",
  "HR portfolio",
];

export const nav = [
  { href: "#profile", label: "Profile" },
  { href: "#career", label: "Career" },
  { href: "#work", label: "Work" },
  { href: "#iso", label: "ISO" },
  { href: "#growth", label: "Growth" },
];
