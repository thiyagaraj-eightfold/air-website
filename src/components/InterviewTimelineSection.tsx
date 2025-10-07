import { motion } from 'motion/react';
import { Clock, CheckCircle, XCircle, ArrowDown } from 'lucide-react';

const beforeItems = [
  "Days spent coordinating schedules",
  "Hours of finding the right candidate to interview", 
  "Documenting conversations manually",
];

const afterItems = [
  "Instant interview scheduling",
  "Interview every candidate, anytime",
  "Immediate feedback and insights", 
];

export function InterviewTimelineSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Title and subtitle */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1D3D] leading-tight mb-6"
            >
              The First Interview Shouldn't Take{' '}
              <span className="bg-gradient-to-r from-[#0000FF] to-[#A855F7] bg-clip-text text-transparent">
                Weeks to Happen.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Recruiters spend days coordinating schedules, reviewing resumes, and documenting conversations — while capable candidates go unseen, their potential never reaching the hiring team. The result: missed talent, slower decisions, and a frustrating experience for everyone.
            </motion.p>
          </div>

          {/* Right side: Before vs After comparison */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="interview-timeline-container"
          >
            {/* Before section */}
            <div className="interview-timeline-section">
              <div className="interview-timeline-header">
                <h3 className="text-xl font-semibold text-gray-900">Before</h3>
              </div>
              <div className="interview-timeline-items">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="interview-timeline-box"
                  >
                    <XCircle className="interview-timeline-icon interview-timeline-icon--red" />
                    <span className="interview-timeline-text">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow pointing down with more spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0000FF] to-[#A855F7] rounded-full flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* After section */}
            <div className="interview-timeline-section">
              <div className="interview-timeline-header">
                <h3 className="text-xl font-semibold text-gray-900">After</h3>
              </div>
              <div className="interview-timeline-items">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="interview-timeline-box"
                  >
                    <CheckCircle className="interview-timeline-icon interview-timeline-icon--green" />
                    <span className="interview-timeline-text">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
