import { motion } from "motion/react";
import { Target, Brain, Focus, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Fairer access to opportunity",
    description: "Every capable candidate gets a timely, equitable chance to be heard. No more résumés lost in the queue.",
  },
  {
    icon: Brain,
    title: "More informed hiring decisions",
    description: "Structured, skills-based insights help recruiters and managers evaluate capability and potential objectively.",
  },
  {
    icon: Focus,
    title: "Greater recruiter focus",
    description: "Recruiters spend less time coordinating and documenting, and more time connecting and nurturing relationships with candidates.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and transparency by design",
    description: "No facial recognition. No emotional inference. Just fair, explainable AI that organizations and candidates can trust.",
  },
];

export function WhyItMattersSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-6">
            Why it matters
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming hiring for candidates, recruiters, and organizations
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#FB923C] flex items-center justify-center shadow-md">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl mb-3 text-[#1A1D3D]">
                  {reason.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
