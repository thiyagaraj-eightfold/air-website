import { motion } from "motion/react";
import { Clock, Users, TrendingUp, Shield, Globe, Zap } from "lucide-react";

const benefits = [
  {
    number: "1",
    title: "Fairness at scale",
    description: "Every candidate gets a chance to be heard.",
    icon: Clock,
    gradient: "from-[#6FD9CB] to-[#0000FF]",
  },
  {
    number: "2",
    title: "Faster hiring cycles",
    description: "Reduce time to interview by up to 90%.",
    icon: Users,
    gradient: "from-[#0000FF] to-[#A855F7]",
  },
  {
    number: "3",
    title: "Hire confidently",
    description: "Structured, explainable insights for every candidate.",
    icon: Shield,
    gradient: "from-[#A855F7] to-[#EC4899]",
  },
  {
    number: "4",
    title: "Empower recruiters",
    description: "Less scheduling, more human connection.",
    icon: Globe,
    gradient: "from-[#EC4899] to-[#FF6B6B]",
  },
  {
    number: "5",
    title: "Future-ready",
    description: "Integrated with ATS and Eightfold’s Talent Intelligence.",
    icon: TrendingUp,
    gradient: "from-[#EC4899] to-[#FF6B6B]",
  },
  {
    number: "6",
    title: "Enterprise Quality",
    description: "Secure, compliant, and ready for enterprise.",
    icon: Zap,
    gradient: "from-[#0000FF] to-[#A855F7]",
  },
];

export function KeyBenefitsSection() {
  return (
    <section id="key-benefits" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-4">
          Why Teams Choose AI Interviewer
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your hiring process with AI that works for everyone — candidates, recruiters, and organizations.
          </p> */}
        </motion.div>

        {/* Benefits horizontal layout */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Graphic illustration */}
              <div className="mb-6 mx-auto w-full max-w-[200px] h-32 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm relative overflow-hidden group">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #1A1D3D 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }} />
                </div>
                
                {/* Icon with gradient background */}
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 blur-sm" />
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-white/30 blur-sm" />
              </div>
              
              <h3 className="text-lg mb-2 text-[#1A1D3D]">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
