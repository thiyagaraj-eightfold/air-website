import { motion } from "motion/react";
import { FileText, MessageSquare, BarChart3, UserCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Apply, and start instantly",
    description: "As soon as candidates submit an application, they receive a call from our AI Voice Interviewer.",
    icon: FileText,
    gradient: "from-[#6FD9CB] to-[#0000FF]",
  },
  {
    number: "2",
    title: "Voice conversation",
    description: "Candidates speak naturally with AI. Role-specific questions, real-time responses, just like a human interviewer.",
    icon: MessageSquare,
    gradient: "from-[#0000FF] to-[#A855F7]",
  },
  {
    number: "3",
    title: "Smart summaries",
    description: "Recruiters receive voice transcripts, conversation highlights, and an AI Interview Score.",
    icon: BarChart3,
    gradient: "from-[#A855F7] to-[#EC4899]",
  },
  {
    number: "4",
    title: "Human review",
    description: "Recruiters review conversations, add context, or override recommendations at any time.",
    icon: UserCheck,
    gradient: "from-[#EC4899] to-[#FF6B6B]",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-4">
            How it works
          </h2>
        </motion.div>

        {/* Simple step grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 blur-sm" />
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-white/30 blur-sm" />
              </div>
              
              <h3 className="text-lg mb-2 text-[#1A1D3D]">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
