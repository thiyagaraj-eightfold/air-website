import { motion } from "motion/react";
import { Shield, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    heading: "Built for equity",
    benefit: "Voice-based skills evaluation. No facial analysis, no tone judgment. Just fair, bias-audited conversations in 22+ languages.",
  },
  {
    icon: Zap,
    heading: "Instant at scale",
    benefit: "Voice interviews begin the moment someone applies. Thousands of simultaneous conversations, across time zones, with structured insights ready in hours.",
  },
  {
    icon: Heart,
    heading: "Human by design",
    benefit: "AI conducts the voice conversations. Recruiters focus on people. Every decision stays in human hands, always.",
  },
];

export function ValueBlocks() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-6">
            Hiring that works for everyone
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by 100+ organizations in 155 countries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6FD9CB] to-[#A855F7] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl mb-4 text-[#1A1D3D]">
                {value.heading}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {value.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
