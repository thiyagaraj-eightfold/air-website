import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const screenshots = [
  {
    title: "Conversational AI Interview",
    description: "Role-specific questions that adapt to each candidate's experience",
    src: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNvbnZlcnNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTk4MTkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "AI Interview interface showing conversational questions",
  },
  {
    title: "Structured Insights Dashboard",
    description: "Interview scores and summaries at a glance for faster decisions",
    src: "https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5ODE1OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Dashboard showing candidate insights and interview scores",
  },
  {
    title: "Skills-Based Analytics",
    description: "See exactly what matters—capabilities, not impressions",
    src: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHNvZnR3YXJlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTgxOTMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Analytics view showing skills-based evaluation metrics",
  },
];

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#030213] mb-6">
            See it in practice
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From application to advancement—effortless, equitable, and transparent
          </p>
        </motion.div>

        {/* Main screenshot display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <div className="aspect-video relative bg-gray-100">
              <ImageWithFallback
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Screenshot info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <motion.h3
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl text-white mb-2"
              >
                {screenshots[activeIndex].title}
              </motion.h3>
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base md:text-lg text-white/90"
              >
                {screenshots[activeIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Screenshot thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-6"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "ring-4 ring-blue-500 shadow-lg scale-105"
                  : "ring-2 ring-gray-200 hover:ring-gray-300 hover:scale-102"
              }`}
            >
              <div className="aspect-video relative bg-gray-100">
                <ImageWithFallback
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    activeIndex === index
                      ? "bg-blue-600/20"
                      : "bg-black/40 group-hover:bg-black/20"
                  }`}
                />
              </div>
              
              {/* Title for thumbnails */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs md:text-sm text-white truncate">
                  {screenshot.title}
                </p>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Optional: Add your own screenshots instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200 text-center"
        >
          <p className="text-sm text-gray-600">
            💡 Replace these placeholder images with your actual product screenshots by updating the <code className="px-2 py-1 bg-white rounded text-blue-600 border border-gray-200">src</code> URLs in{" "}
            <code className="px-2 py-1 bg-white rounded text-blue-600 border border-gray-200">/components/ScreenshotsSection.tsx</code>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
