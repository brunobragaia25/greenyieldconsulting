export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: "managing_partner" | "expert";
  image: string | null;
  linkedin: string;
  email: string;
  bio: string[];
  expertise: string[];
};

export const team: TeamMember[] = [
  {
    slug: "niousha-roshani",
    name: "Niousha Roshani",
    role: "Sustainability & Capital Markets",
    group: "managing_partner",
    image: "/team/foto-niousha.png",
    linkedin: "#",
    email: "Niousha@greenyieldconsulting.com",
    bio: [
      "Niousha is a global strategist, serial entrepreneur, and ecosystem builder with over two decades of experience mobilizing resources and driving innovation across emerging markets. With a polymathic background spanning engineering, finance, social science, and public policy, she has worked in 25+ countries advising funds, investors, multilateral institutions, and governments on aligning investment with impact.",
      "As the founder of several ventures focused on digital and economic inclusion, Niousha has built platforms that connect underrepresented entrepreneurs and communities to capital, knowledge, and markets. She brings deep expertise in designing collaborative investment strategies, cultivating alliances, and directing financing into high-impact initiatives across Latin America, Africa, and the Middle East. Her academic credentials include a Postdoc at Harvard University, a PhD from the University College London, a Master's from Cornell University, and a BS in Civil Engineering.",
      "Fluent in five languages and of Irano-Ivorian heritage, she moves seamlessly across sectors and geographies. At her core, she is committed to transforming finance into a catalyst for systems-level change—bridging people, policy, and innovation to build more equitable and sustainable futures.",
    ],
    expertise: [
      "ESG Strategy",
      "Capital Markets",
      "Sustainable Finance",
      "Investor Relations",
      "Emerging Markets",
    ],
  },
  {
    slug: "camilo-angarita-ortiz",
    name: "Camilo Angarita Ortiz",
    role: "Strategy & Business Development",
    group: "managing_partner",
    image: "/team/foto-camilo.png",
    linkedin: "#",
    email: "Camilo.angarita@greenyieldconsulting.com",
    bio: [
      "Bringing a strategic and operational lens to the energy transition, Camilo is an experienced business and engineering professional with a background in corporate strategy, consulting, and business development. He has contributed to key growth and transformation initiatives in major Latin American corporations across the aeronautics and technology sectors, with a focus on market expansion and digital innovation.",
      "As Co-Founder of Green Yield Consulting, he helps structure and finance renewable-energy projects, focusing on emerging markets and high-impact opportunities. His expertise spans project development, stakeholder engagement, and capital mobilization—connecting developers, off-takers, and investors to unlock bankable energy solutions.",
      "Combining a technical foundation with a global perspective, Camilo brings years of international experience and a multilingual approach that enables him to navigate diverse business environments. He is known for forging effective cross-sector partnerships and supporting energy projects that deliver tangible results.",
      "Camilo holds a Master's in Business Analytics and a Bachelor's in Mechanical Engineering with a minor in Industrial Engineering from Universidad de los Andes. His academic background combines quantitative analysis, strategic thinking, and technical rigor—equipping him to tackle complex challenges at the intersection of finance, sustainability, and infrastructure development.",
    ],
    expertise: [
      "Corporate Strategy",
      "Business Development",
      "Project Structuring",
      "Partnership Development",
      "Energy Transition",
    ],
  },
  {
    slug: "andrea-toto-brocchi",
    name: "Andrea Toto Brocchi",
    role: "Energy Systems & Project Development",
    group: "managing_partner",
    image: null, // replace with "/team/andrea.jpg"
    linkedin: "#",
    email: "Andrea@greenyieldconsulting.com",
    bio: [
      "Andrea Toto Brocchi is a dynamic renewable energy strategist and impact-focused investor combining technical depth with financial acumen. With more than a decade of experience across Latin America and Europe, he has structured and financed infrastructure and clean energy initiatives—developing bankable solutions that balance environmental impact with long-term returns.",
      "He began his career at Enel Green Power, working on early-stage renewable energy projects, before moving to Metlen Energy & Metals, where he leads business development across Germany and Spain, with a focus on Battery Energy Storage Systems (BESS) and hybrid technologies.",
      "Andrea holds an MSc in Energy Engineering (Power Production) from Politecnico di Milano and a Master's in Business Development from SDA Bocconi. This combination of engineering and commercial training empowers him to guide projects from technical scoping through structured financing and capital raising.",
      "At Green Yield, Andrea drives the structuring and execution of clean energy projects across emerging markets—applying robust financial models, technical evaluation, and revenue-stack design to attract climate-aligned capital. Multilingual and systems-oriented, he brings a global perspective and a belief that well-structured finance, grounded in technical insight, is key to unlocking sustainable impact.",
    ],
    expertise: [
      "Energy Systems Design",
      "Project Development",
      "Feasibility Analysis",
      "Renewable Energy",
      "Technical Due Diligence",
    ],
  },
  {
    slug: "jose-miguel-carneiro",
    name: "Jose Miguel Carneiro",
    role: "Carbon Credits & Sustainability",
    group: "expert",
    image: null, // replace with "/team/jose.jpg"
    linkedin: "#",
    email: "",
    bio: [
      "José Miguel is a seasoned climate and sustainability expert with deep experience in greenhouse gas accounting, low-carbon project development, and urban climate policy. He served as Climate Change Manager for the City of Rio de Janeiro, where he led the city's GHG inventory and supported the design of major climate initiatives, including energy efficiency programs, adaptation strategies, and nature-based solutions.",
      "He is also the founder and Executive Director of MOWA – Carbon Neutral, a Brazilian startup that advises cities, companies, and institutions on their transition to low-carbon development through emissions reduction, offsetting strategies, and sustainability integration.",
      "At Green Yield, José Miguel leads efforts related to carbon credit structuring and commercialization—bringing his technical and regulatory expertise to support the development of bankable, climate-aligned projects within the firm's pipeline. His background in emissions quantification, climate finance, and multi-stakeholder coordination strengthens Green Yield's ability to unlock added value through carbon markets and ensure environmental integrity in project development.",
      "José Miguel holds a certification in Urban Greenhouse Gas Emissions Inventory from the City Climate Planner program (GBCI–WRI–ICLEI–World Bank). His work is rooted in a systems-thinking approach to climate action—combining technical rigor, policy fluency, and a commitment to scalable, equitable impact.",
    ],
    expertise: [
      "Carbon Markets",
      "Carbon Credit Structuring",
      "Voluntary Carbon Standards",
      "Sustainability Reporting",
      "Climate Finance",
    ],
  },
  {
    slug: "andres-quintero",
    name: "Andres Quintero",
    role: "Compliance & Financial Markets",
    group: "expert",
    image: null, // replace with "/team/andres.jpg"
    linkedin: "#",
    email: "",
    bio: [
      "Andrés is a financial markets compliance specialist with over a decade of experience in global markets, regulatory requirements and risk management. Having worked across major financial institutions—including Citibank, Macquarie Group and Westpac Institution Bank — he brings deep expertise in navigating complex regulatory environments and optimizing regulatory execution across borders.",
      "At Green Yield, Andrés brings a unique institutional perspective to energy finance—helping structure investment frameworks that align with international compliance standards. His skillset spans onboarding, deal documentation, client eligibility, bilateral derivatives, regulatory reporting, disclosures and financial risk management, with a focus on ensuring transparency, integrity, and resilience in every transaction.",
      "Andrés holds a Master in Finance from UNSW Sydney and a Bachelor of Economics from Macquarie University. With a global career rooted in Australia and Latin America, he combines technical precision with cross-cultural fluency to help Green Yield bridge capital markets with climate-aligned development goals.",
      "Driven by a strong commitment to responsible finance and long-term value creation, Andrés plays a key role in shaping the firm's internal governance, financial structure, and investor readiness for project pipelines in emerging markets.",
    ],
    expertise: [
      "Regulatory Compliance",
      "Financial Markets",
      "Investment Banking",
      "Risk Management",
      "Cross-border Transactions",
    ],
  },
  {
    slug: "julian-gonzales-torres",
    name: "Julian Gonzales Torres",
    role: "Legal, Corporate & Financial Affairs",
    group: "expert",
    image: null, // replace with "/team/julian.jpg"
    linkedin: "#",
    email: "",
    bio: [
      "Julian is a seasoned legal advisor specializing in civil, commercial, and public procurement law, with a strong track record in complex infrastructure and energy deals. His prior work at one of Latin America's top law firms placed him at the forefront of Colombia's largest PPP, EPC, and concession projects, where he provided legal guidance across all stages of structuring, bidding, and execution.",
      "He has extensive experience drafting and negotiating high-value infrastructure contracts, designing legal and financial risk mitigation instruments, and advising on regulatory frameworks and government contracting procedures. His background also includes litigation related to public procurement and infrastructure disputes.",
      "At Green Yield, Julian leads legal structuring for energy and capital intermediation transactions across Latin America and other emerging markets. He focuses on ensuring contractual soundness, regulatory compliance, and sovereign risk mitigation—strengthening the legal foundations of the firm's investment and project pipelines.",
    ],
    expertise: [
      "Energy Law",
      "Corporate Governance",
      "Deal Structuring",
      "Financial Compliance",
      "Contract Negotiation",
    ],
  },
];

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return team.map((m) => m.slug);
}
