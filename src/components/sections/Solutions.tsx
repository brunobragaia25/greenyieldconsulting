"use client";

import { motion, type Variants } from "framer-motion";

const solutions = [
  {
    tag: "Investment Advisory",
    title: "Structuring Investable Opportunities",
    description:
      "We help project developers and fund managers structure deals that attract institutional capital — from financial modeling to investor-ready documentation.",
    accent: "#26a9b3",
  },
  {
    tag: "Transaction Support",
    title: "From Term Sheet to Close",
    description:
      "End-to-end transaction support for clean energy and sustainability deals, including due diligence coordination, negotiation, and financial close.",
    accent: "#22595d",
  },
  {
    tag: "Market Entry",
    title: "New Markets, New Opportunities",
    description:
      "Strategic guidance for organizations entering new geographies or sectors in the energy transition — identifying partners, navigating regulations, and building local networks.",
    accent: "#26a9b3",
  },
  {
    tag: "ESG Integration",
    title: "Embedding Sustainability at the Core",
    description:
      "Helping businesses and investors integrate ESG frameworks into strategy, portfolio management, and reporting to meet regulatory and stakeholder expectations.",
    accent: "#22595d",
  },
  {
    tag: "Capacity Building",
    title: "Strengthening Teams & Ecosystems",
    description:
      "Training, mentoring, and ecosystem development programs that build the human capital required to scale the energy transition.",
    accent: "#26a9b3",
  },
  {
    tag: "Strategic Partnerships",
    title: "Connecting the Right People",
    description:
      "Facilitating high-value introductions and partnerships between investors, developers, governments, and NGOs to unlock collaborative solutions.",
    accent: "#22595d",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs font-medium text-[#26a9b3] uppercase tracking-widest mb-3 block">
            Solutions
          </span>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#343b44] leading-tight">
            Built for the Energy Transition
          </h2>
          <p className="text-base text-[#343b44]/55 mt-4 leading-relaxed">
            A full-spectrum advisory platform covering every stage of the
            project and investment lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-[17px] p-7 border border-[#f5f5f5] hover:border-[#26a9b3]/20 bg-white hover:shadow-[0_14px_143.1px_#0000000d] transition-all duration-300 cursor-default"
            >
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
                style={{
                  color: solution.accent,
                  backgroundColor: `${solution.accent}15`,
                }}
              >
                {solution.tag}
              </span>
              <h3 className="text-base font-semibold text-[#343b44] mb-2 leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-[#343b44]/55 leading-relaxed">
                {solution.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-5 flex items-center gap-1.5 text-xs text-[#26a9b3] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="#26a9b3"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
