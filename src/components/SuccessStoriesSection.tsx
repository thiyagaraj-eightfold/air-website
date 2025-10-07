import { motion } from 'motion/react';
import { Quote, TrendingUp, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stories = [
  {
    quote:
      "With AI Interviewer, we realized we can concentrate on creating more strategic value, while we progress recruiting to staff critical tech initiatives; basically in our sleep",
    author: 'Nicole Brungo',
    role: 'Global Talent Acquisition',
    company: 'Eightfold',
    avatar:
      'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc1OTc0NTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: Clock, value: '65%', label: 'Faster hiring' },
      { icon: Users, value: '3,000+', label: 'Monthly interviews' },
    ],
  },
  {
    quote:
      "We were impressed by Eightfold AI Recruiter's sophisticated understanding of both job requirements and candidate profiles, enabling truly personalized interview questions while allowing human recruiters to add contextual insights",
    author: 'HR Tech Panel',
    role: '',
    company: 'HR Executive.com',
    avatar:
      'https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NTk3NjExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, value: '40%', label: 'More diverse hires' },
      { icon: Users, value: '95%', label: 'Candidate satisfaction' },
    ],
  },
  {
    quote:
      'Our recruiters love it. They spend less time scheduling and more time building relationships. The AI Interview Score helps us identify top talent faster than ever.',
    author: 'Niran Kundapur',
    role: 'Head of Product',
    company: 'Wisdom Labs',
    avatar:
      'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTcyMzMyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: Clock, value: '80%', label: 'Time saved' },
      { icon: TrendingUp, value: '2x', label: 'Quality of hire' },
    ],
  },
];

export function SuccessStoriesSection() {
  return (
    <section id="stories" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#6FD9CB]/10 to-[#A855F7]/10 rounded-full border border-[#6FD9CB]/30">
            <Quote className="w-4 h-4 text-[#A855F7]" />
            <span className="text-sm text-[#1A1D3D] font-semibold">Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-6">
            Designed for Everyone. Built for Enterprises.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Powered by Eightfold’s Talent Intelligence Platform, which is trusted by over 100 organizations in 155 countries, and is certified for FedRAMP Moderate, SOC 2, and ISO 42001 compliance.
          </p>
        </motion.div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#6FD9CB]/50 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#6FD9CB] to-[#A855F7] flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote text */}
                <blockquote className="text-base text-gray-700 leading-relaxed mb-8 italic">"{story.quote}"</blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4 ">
                  {/* <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#6FD9CB]/20">
                    <ImageWithFallback src={story.avatar} alt={story.author} className="w-full h-full object-cover" />
                  </div> */}
                  <div>
                    <div className="text-[#1A1D3D] font-semibold">{story.author}</div>
                    <div className="text-sm text-gray-600">{story.role}</div>
                    <div className="text-sm text-[#A855F7] font-medium">{story.company}</div>
                  </div>
                </div>

                {/* Metrics */}
                {/* <div className="grid grid-cols-2 gap-4">
                  {story.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FD9CB]/20 to-[#A855F7]/20 flex items-center justify-center">
                        <metric.icon className="w-4 h-4 text-[#A855F7]" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-[#1A1D3D]">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div> */}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6FD9CB]/0 via-transparent to-[#A855F7]/0 group-hover:from-[#6FD9CB]/5 group-hover:to-[#A855F7]/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
