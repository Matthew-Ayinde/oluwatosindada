import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { person, chapters, capabilities } from "@/lib/content";
import { siteUrl, siteTitle, siteDescription, keywords } from "@/lib/site";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Motion from "@/components/Motion";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${person.name}`,
  },
  description: siteDescription,
  applicationName: `${person.name} — Portfolio`,
  keywords,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  publisher: person.name,
  category: "Human Resources",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.name,
    title: siteTitle,
    description: siteDescription,
    locale: "en_NG",
    firstName: person.firstName,
    lastName: person.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1712" },
  ],
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: person.name,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: `${siteUrl}/images/oluwatosin-dada-portrait.jpg`,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: person.name,
      alternateName: person.fullName,
      givenName: person.firstName,
      familyName: person.lastName,
      jobTitle: person.role,
      description: siteDescription,
      url: siteUrl,
      email: `mailto:${person.email}`,
      image: `${siteUrl}/images/oluwatosin-dada-portrait.jpg`,
      sameAs: [person.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      worksFor: {
        "@type": "Organization",
        name: chapters[1].company,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: person.role,
        occupationLocation: { "@type": "City", name: "Lagos" },
        skills: capabilities.map((c) => c.title).join(", "),
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Nigeria",
      },
      memberOf: {
        "@type": "Organization",
        name: "Chartered Institute of Personnel Management of Nigeria (CIPM)",
      },
      knowsAbout: [
        "Human Resource Management",
        "People Operations",
        "Employee Relations",
        "Performance Management",
        "Recruitment",
        "Payroll Administration",
        "Compensation and Benefits",
        "HR Governance",
        "HR Audit",
        "HRIS Implementation",
        "ISO 9001:2015",
        "ISO/IEC 27001:2022",
        "Vendor Management",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script
          // Marks JS as available before first paint so the preloader can show
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="label fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-4 py-3 text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Preloader />
        <Nav />
        <div className="grain" aria-hidden="true" />
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
        <Motion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
