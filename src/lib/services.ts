export type ServiceItem = {
  slug: string;
  label: string;
  icon: string;
  tagline: string;
  banner: string;
  description: string[];
  offerings: { title: string; description: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "project-owner",
    label: "Project Owner",
    icon: "solar:sun-2-bold-duotone",
    tagline: "Strengthen projects to reach financial close and maximize value",
    banner: "/team/project-owner-banner.jpeg",
    description: [
      "We strengthen projects to reach financial close and maximize value.",
    ],
    offerings: [
      {
        title: "Capital Structuring and Financing Strategy",
        description: "",
      },
      {
        title: "Commercial Negotiation and Deal Structuring",
        description: "",
      },
      {
        title: "Due Diligence Coordination",
        description: "Permitting, land, grid, technical design",
      },
      {
        title: "Identification of Value Leakage Points",
        description: "",
      },
      {
        title: "Investor-Grade Data Room Preparation",
        description: "",
      },
      {
        title: "Off-Taker Sourcing",
        description: "",
      },
      {
        title: "Carbon Credit Commercialization",
        description: "",
      },
    ],
  },
  {
    slug: "epc",
    label: "EPC",
    icon: "solar:sledgehammer-bold-duotone",
    tagline: "Connect EPCs with capital, partners, and liquidity pathways",
    banner: "/team/epc-banner.jpeg",
    description: [
      "We connect EPCs with capital, partners, and liquidity pathways.",
    ],
    offerings: [
      {
        title: "Project Scouting",
        description: "",
      },
      {
        title: "Access to Investors and Equity Partners",
        description: "",
      },
      {
        title: "Buyers for Asset Rotation",
        description: "",
      },
      {
        title: "Liquidity Injection",
        description: "Project finance, equity partnerships",
      },
      {
        title: "Secure Financing",
        description: "",
      },
      {
        title: "Off-Taker Scouting",
        description: "",
      },
      {
        title: "Carbon Credit Integration",
        description: "",
      },
    ],
  },
  {
    slug: "off-taker",
    label: "Off-Taker",
    icon: "solar:buildings-bold-duotone",
    tagline: "Structure energy transition solutions aligned with ESG and decarbonization objectives",
    banner: "/team/off-taker-banner.jpeg",
    description: [
      "We structure energy transition solutions aligned with ESG and decarbonization objectives.",
    ],
    offerings: [
      {
        title: "Energy Transition Structuring",
        description: "",
      },
      {
        title: "ESG and Carbon Offset Integration",
        description: "",
      },
      {
        title: "Project Financing Solutions",
        description: "",
      },
      {
        title: "EPC Sourcing",
        description: "",
      },
      {
        title: "Asset Rotation and Liquidity Structuring",
        description: "",
      },
    ],
  },
  {
    slug: "financiers-investors",
    label: "Financiers & Investors",
    icon: "solar:wallet-bold-duotone",
    tagline: "Unlock the value of your sustainability commitments",
    banner: "/team/financiers-banner.jpeg",
    description: [
      "We originate and structure transactions aligned with institutional investment standards.",
    ],
    offerings: [
      {
        title: "Project Scouting and Pipeline Origination",
        description: "",
      },
      {
        title: "Access to EPC and Joint Venture Partners",
        description: "",
      },
      {
        title: "Transaction Management and Due Diligence Coordination",
        description: "",
      },
      {
        title: "Risk Identification and Timeline Assessment",
        description: "",
      },
      {
        title: "Project Optimization",
        description: "Technology, sizing, hybridization, phasing",
      },
      {
        title: "Off-Taker Identification",
        description: "",
      },
      {
        title: "Carbon Credit Structuring",
        description: "",
      },
    ],
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
