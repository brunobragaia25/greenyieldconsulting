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
    slug: "mariana-barrientos",
    name: "Mariana Barrientos",
    role: "M&A & Capital deployment",
    group: "expert",
    image: null, // replace with "/team/mariana.jpg"
    linkedin: "#",
    email: "Mariana@greenyieldconsulting.com",
    bio: [
      "Mariana is an infrastructure investor and board operator with a track record of building and reshaping platforms across energy, utilities, water, and digital networks. She has led major mergers, carve-outs, refinancings, and operational roadmaps for scaled assets across 15 countries. With $20bn+ of transaction experience and a career spanning PE, investment management, and advisory, she blends investor depth with hands-on governance and strategic problem-solving.",
      "Mariana currently serves as a Principal at Basalt Infrastructure Partners, where she leads origination, investment execution, and value creation for a ~$3bn European core-plus/value-add fund. She has stewarded multiple platform-building and consolidation plays—most recently architecting the merger of FullFibre and Zzoomm to create the UK's fifth-largest FTTH (fibre-to-the-home) provider, and driving governance, integration, and strategic planning across scaled digital-infrastructure and industrial-water assets. Her board roles include Altnet Partners and Circle Infra Partners, where she has shaped operational strategy, refinancing, carve-outs, merger integration, and long-term capital structure.",
      "Previously, Mariana was a Senior Director at CBRE Investment Management's global infrastructure program, leading co-investments and strategic partnerships with GPs on energy transition, utilities, and digital infrastructure—spanning battery storage, LNG regasification, district heating, and next-generation utility networks. Earlier, she was a Vice President in Citi's Power & Utilities Investment Banking franchise across London and the Americas, advising on landmark transactions in renewables, networks, and energy services, and structuring multibillion-euro financings across Europe and Latin America.",
      "She holds an MBA from Northwestern University's Kellogg School of Management and master's and bachelor's degrees in economics from Fordham University and the University of Oklahoma, respectively.",
    ],
    expertise: [
      "M&A Strategy",
      "Capital Deployment",
      "Infrastructure Investing",
      "Corporate Governance",
      "Energy Transition",
    ],
  },
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
    slug: "steven-morgan",
    name: "Steven Morgan",
    role: "Financial advisory & Capital Strategy",
    group: "expert",
    image: null, // replace with "/team/steven.jpg"
    linkedin: "#",
    email: "Steven@greenyieldconsulting.com",
    bio: [
      "Steven Morgan is a senior financial markets and operations executive with over two decades of experience across global banking and capital markets. As a Managing Director at Citibank, he has led large-scale platforms supporting equity, fixed income, and prime finance businesses across multiple regions.",
      "Throughout his career, Steve has held global leadership roles spanning capital markets operations and securities infrastructure. He has overseen complex post-trade environments across more than 50 markets, working closely with institutional investors, financial institutions, and regulated entities.",
      "Steve began his career at the Bank of England and later held senior roles at Lehman Brothers and Credit Suisse before joining Citi in 2009, where he went on to lead global teams across multiple continents.",
      "At Green Yield, Steve supports the structuring and execution of complex transactions by bringing institutional-grade rigor, strong governance frameworks, and deep capital markets experience—helping ensure projects meet the standards required for large-scale capital deployment.",
    ],
    expertise: [
      "Capital Markets",
      "Financial Advisory",
      "Transaction Structuring",
      "Capital Strategy",
      "Operations Management",
    ],
  },
  {
    slug: "murefu-barasa",
    name: "Murefu Barasa",
    role: "Energy systems & project development",
    group: "expert",
    image: null, // replace with "/team/murefu.jpg"
    linkedin: "#",
    email: "Murefu@greenyieldconsulting.com",
    bio: [
      "Murefu Barasa is an energy access and sustainability expert with over 20 years of experience advancing renewable energy and clean cooking solutions across emerging markets. As the Founding Partner and Executive Chair of EED Advisory Limited, he has led projects across more than 15 countries in Africa, as well as in Brazil and the United States. Through its partnership with Green Yield, EED supports the sourcing of high-quality projects and the identification of energy opportunities to accelerate investment and drive progress across the African continent.",
      "He has worked with institutions such as the World Bank, national governments, and development partners to design energy access strategies, conduct market assessments, and support investment frameworks for underserved regions. His experience includes leading Kenya's national clean cooking strategy toward universal access by 2028, managing technical assistance facilities, and delivering programs on green finance and ESG.",
      "Murefu combines strong technical expertise with deep on-the-ground market knowledge and stakeholder engagement capabilities, enabling him to translate complex challenges into scalable, investment-ready opportunities.",
      "At Green Yield, he supports the origination and structuring of energy access and distributed energy projects, leveraging his regional expertise, institutional relationships, and track record in driving impactful solutions across high-growth markets.",
    ],
    expertise: [
      "Energy Access",
      "Project Development",
      "Market Assessment",
      "Renewable Energy",
      "Emerging Markets",
    ],
  },
  {
    slug: "julian-gonzales",
    name: "Julian Gonzales",
    role: "Legal Counsel",
    group: "expert",
    image: "/team/foto-julian.png", // Using existing photo
    linkedin: "#",
    email: "Julian@greenyieldconsulting.com",
    bio: [
      "Julian is a seasoned legal advisor specializing in civil, commercial, and public procurement law, with a strong track record in complex infrastructure and energy deals. His prior work at one of Latin America's top law firms placed him at the forefront of Colombia's largest PPP, EPC, and concession projects, where he provided legal guidance across all stages of structuring, bidding, and execution.",
      "He has extensive experience drafting and negotiating high-value infrastructure contracts, designing legal and financial risk mitigation instruments, and advising on regulatory frameworks and government contracting procedures. His background also includes litigation related to public procurement and infrastructure disputes.",
      "At Green Yield, Julian leads legal structuring for energy and capital intermediation transactions across Latin America and other emerging markets. He focuses on ensuring contractual soundness, regulatory compliance, and sovereign risk mitigation—strengthening the legal foundations of the firm's investment and project pipelines.",
    ],
    expertise: [
      "Energy Law",
      "Legal Structuring",
      "Contract Negotiation",
      "Regulatory Compliance",
      "Deal Structuring",
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
];

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return team.map((m) => m.slug);
}
