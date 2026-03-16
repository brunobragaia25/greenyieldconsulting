export type ServiceItem = {
  slug: string;
  label: string;
  icon: string;
  tagline: string;
  description: string[];
  offerings: { title: string; description: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "project-owner",
    label: "Project Owner",
    icon: "solar:sun-2-bold-duotone",
    tagline: "Turn your pipeline into investment-ready assets",
    description: [
      "Green Yield brings proven regional and international experience in structuring renewable energy projects and managing institutional capital to support the financial close of sustainable infrastructure initiatives.",
      "Over the years, our team has built a robust network of global investors and strategic relationships with both local and international financial institutions. This positions us to design and deliver tailored financing solutions—across both debt and equity structures—aligned with the specific needs of each client and project.",
    ],
    offerings: [
      {
        title: "Access to Capital and Strategic Partnerships",
        description:
          "We connect projects with a network of equity investors, debt providers, and EPC contractors, facilitating the financial and operational support necessary to advance energy projects efficiently.",
      },
      {
        title: "Carbon Credit Structuring and Monetization",
        description:
          "We assist project owners in structuring and commercializing carbon credits, enabling them to generate additional revenue streams and enhance the overall value proposition of their energy projects.",
      },
    ],
  },
  {
    slug: "epc",
    label: "EPC",
    icon: "solar:sledgehammer-bold-duotone",
    tagline: "Connect your capabilities to the right projects",
    description: [
      "Green Yield connects EPC firms with both qualified project owners and financing partners to help unlock new business opportunities and ensure project viability.",
      "With regional and international experience in renewable energy, we support EPCs from early engagement through financial close—leveraging our network of developers, investors, and banks to accelerate execution and align incentives across stakeholders.",
    ],
    offerings: [
      {
        title: "Access to Project Opportunities",
        description:
          "We connect EPC firms with vetted project developers, enabling them to secure construction mandates and expand their project portfolios.",
      },
      {
        title: "Facilitation of Project Financing",
        description:
          "We assist EPCs in accessing capital by linking them with financiers, ensuring the necessary funding is in place for successful project execution.",
      },
    ],
  },
  {
    slug: "off-taker",
    label: "Off-Taker",
    icon: "solar:buildings-bold-duotone",
    tagline: "Source clean energy with confidence and structure",
    description: [
      "Green Yield supports corporate and institutional off-takers in designing and implementing strategies to meet their energy transition goals—securing cleaner, more affordable energy through expert guidance.",
      "Our consulting services help off-takers identify and assess renewable project opportunities, connect with credible developers and EPCs, and access financing partners aligned with their sustainability objectives. While we do not structure PPAs, we guide the process to ensure each solution is financially viable, technically sound, and aligned with long-term energy and cost optimization targets.",
    ],
    offerings: [
      {
        title: "Energy Transition Structuring",
        description:
          "We design and implement tailored energy transition strategies, aligning with your operational goals and sustainability targets.",
      },
      {
        title: "ESG and Carbon Offset Integration",
        description:
          "Our expertise ensures your projects meet Environmental, Social, and Governance (ESG) criteria, incorporating carbon offset solutions to enhance environmental impact.",
      },
      {
        title: "Project Financing Facilitation",
        description:
          "We connect you with financiers to secure the necessary capital expenditure (CAPEX) for your energy projects, ensuring financial viability and scalability.",
      },
    ],
  },
  {
    slug: "carbon-credits",
    label: "Carbon Credits",
    icon: "solar:leaf-bold-duotone",
    tagline: "Unlock the value of your sustainability commitments",
    description: [
      "Green Yield helps project developers unlock additional value through the strategic commercialization of carbon credits, aligning financial, environmental, and reputational goals.",
      "Our team has deep knowledge of carbon markets and leverages a trusted network of international buyers and platforms to ensure effective monetization of verified emission reductions. From credit certification strategies to market access and contract negotiation, we provide end-to-end support that maximizes returns while maintaining compliance with leading sustainability standards.",
    ],
    offerings: [
      {
        title: "Project Commercialization and Strategic Partnerships",
        description:
          "We support carbon credit project developers by connecting them with reputable buyers and strategic partners, while working with specialized financial firms to structure their credits into climate-backed securities. This enhances transparency, reduces risk, and increases appeal to institutional investors.",
      },
      {
        title: "Comprehensive Carbon Credit Services",
        description:
          "We provide end-to-end support in the structuring and commercialization of carbon credits, ensuring alignment with market standards and maximizing project value.",
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
