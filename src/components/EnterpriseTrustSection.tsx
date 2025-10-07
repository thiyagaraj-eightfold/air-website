import { motion } from "motion/react";
import { Shield, CheckCircle2, Globe2, TrendingUp } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Responsible, transparent AI",
    description: "Every recommendation can be explained and audited. The system focuses only on skills, experience, and potential—never biometric data—eliminating the risks tied to facial recognition or emotional analysis.",
  },
  {
    icon: CheckCircle2,
    title: "Enterprise compliance",
    description: "FedRAMP Moderate authorized, SOC 2, and ISO 42001 certified for data security and governance.",
  },
  {
    icon: Globe2,
    title: "Global trust",
    description: "Proven in 155 countries, with millions of hiring and mobility decisions supported.",
  },
  {
    icon: TrendingUp,
    title: "Continuous intelligence",
    description: "Every interview enriches Eightfold's broader Talent Intelligence Cloud, powering better decisions across sourcing, mobility, and retention.",
  },
];

export function EnterpriseTrustSection() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-6">
            Enterprise trust and platform power
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike experimental AI tools, Eightfold's AI Interviewer is built on the enterprise-grade Talent Intelligence Platform used by global leaders to manage hiring, internal mobility, and workforce planning at scale.
          </p>
        </motion.div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0000FF] to-[#8B5CF6] flex items-center justify-center shadow-md">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 text-[#1A1D3D]">
                {point.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 rounded-3xl p-12 border border-[#6FD9CB] text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            For employers, that means a hiring system that's not only effective—but{" "}
            <span className="text-[#1A1D3D]">ethical, explainable, and future-ready.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
