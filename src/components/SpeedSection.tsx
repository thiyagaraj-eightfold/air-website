import { motion } from "motion/react";
import { Zap, Globe, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant engagement",
    description: "Interviews begin automatically after application—no scheduling delays.",
  },
  {
    icon: Globe,
    title: "Thousands of conversations at once",
    description: "Scalable interviewing across time zones, languages, and shift-based roles.",
  },
  {
    icon: FileText,
    title: "Structured insights",
    description: "Automatic transcripts and Interview Scores that help teams identify the right candidates fast.",
  },
  {
    icon: Users,
    title: "Human oversight",
    description: "Recruiters review every result and make final decisions. AI never replaces human judgment.",
  },
];

export function SpeedSection() {
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
            Speed and scale without losing humanity
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recruiters today juggle hundreds of openings, compliance requirements, and high-volume hiring. The AI Interviewer helps teams move quickly while ensuring fairness and structure at every step.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FB923C] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[#1A1D3D]">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 rounded-3xl p-12 border border-[#6FD9CB]"
        >
          <div className="text-center mb-6">
            <div className="inline-block">
              <span className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#0000FF] to-[#A855F7] bg-clip-text text-transparent">
                90%
              </span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-4">
            reduction in time-to-first-interview
          </p>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            In early pilots, organizations have reduced time-to-first-interview by up to 90%, while improving candidate satisfaction and recruiter productivity.
          </p>
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 text-center mt-16 max-w-3xl mx-auto leading-relaxed"
        >
          Speed here isn't about automation.{" "}
          <span className="text-[#1A1D3D]">It's about giving more people a chance, sooner.</span>
        </motion.p>
      </div>
    </section>
  );
}
