import { motion } from "motion/react";
import { Shield, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    heading: "Fair and inclusive",
    benefit: "Evaluates skills, experience, and potential — not appearance or emotion.",
  },
  {
    icon: Zap,
    heading: "Instant at scale",
    benefit: "AI interviews begin the moment someone applies. Thousands of simultaneous conversations, across time zones, with structured insights ready in hours.",
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
          Meet the AI Interviewer.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
          Eightfold’s AI Interviewer conducts structured, bias-audited interviews automatically after application. Candidates can interview in their own language, on their own time, while recruiters receive consistent, explainable insights in hours — not weeks.
          Unlike legacy video-analysis tools, it evaluates only what candidates say, never how they look or sound.
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
