import { motion, animate } from 'motion/react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { TrialSignupModal } from './TrialSignupModal';

const interviewQuestions = [
  { text: 'Tell me about your Python experience', angle: 80, distance: 240 },
  { text: 'Describe a time you led a team', angle: 130, distance: 250 },
  { text: 'How do you solve complex problems?', angle: 180, distance: 260 },
  { text: 'Share a team collaboration example', angle: 230, distance: 250 },
  { text: "What's your management approach?", angle: 280, distance: 240 },
];

function FloatingOrb({ delay = 0, x = 0, y = 0 }) {
  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
      style={{
        background: 'linear-gradient(135deg, #0000FF, #A855F7)',
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.15, 0.25, 0.15],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function VoiceAIOrb() {
  const [state, setState] = useState<'listening' | 'thinking' | 'speaking'>('listening');

  useEffect(() => {
    const states: ('listening' | 'thinking' | 'speaking')[] = ['listening', 'thinking', 'speaking'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % states.length;
      setState(states[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStateColor = () => {
    if (state === 'listening') return 'bg-cyan-400';
    if (state === 'thinking') return 'bg-purple-400';
    return 'bg-pink-400';
  };

  const getStateLabel = () => {
    if (state === 'listening') return 'Listening...';
    if (state === 'thinking') return 'Thinking...';
    return 'Speaking...';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating interview questions */}
      {interviewQuestions.map((question, index) => {
        const angle = (question.angle * Math.PI) / 180;
        const x = Math.cos(angle) * question.distance;
        const y = Math.sin(angle) * question.distance;

        return (
          <motion.div
            key={question.text}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{
              opacity: [0, 0.4, 0.4, 0.4, 0],
              scale: [0.95, 1, 1, 1, 0.95],
              y: [10, 0, 0, 0, 10],
            }}
            transition={{
              duration: 12,
              delay: index * 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              {/* Question bubble - subtle */}
              <div className="px-4 py-2.5 bg-white/30 rounded-xl backdrop-blur-sm border border-gray-300/20 whitespace-nowrap">
                {/* Question text */}
                <p className="text-sm text-gray-500">{question.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Central voice orb */}
      <div className="relative">
        {/* Subtle pulsing rings behind the orb */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(196, 181, 253, 0.6), rgba(255, 165, 216, 0.6))',
            width: '360px',
            height: '360px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.7), rgba(196, 181, 253, 0.7), rgba(255, 165, 216, 0.7))',
            width: '320px',
            height: '320px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.9, 0.7, 0.9],
          }}
          transition={{
            duration: 3,
            delay: 0.15,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        {/* Main glassmorphic orb */}
        <motion.div
          className="relative rounded-full overflow-hidden"
          style={{
            width: '280px',
            height: '280px',
            zIndex: 1,
          }}
          animate={{
            scale: state === 'speaking' ? [1, 1.03, 1] : state === 'thinking' ? [1, 1.03, 1] : [1, 1.02, 1],
            rotate: state === 'thinking' ? [0, 2, -2, 0] : 0,
          }}
          transition={{
            duration: state === 'speaking' ? 1 : state === 'thinking' ? 2 : 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          {/* Gradient background - cyan to purple to pink - BRIGHTER */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 212, 255, 0.98) 0%, rgba(196, 181, 253, 0.98) 50%, rgba(255, 165, 216, 0.98) 100%)',
            }}
          />

          {/* Frosted glass effect */}
          <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 rounded-full" />

          {/* Inner glow - brighter */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 60%)',
            }}
          />

          {/* Subtle edge highlight - brighter */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(255,255,255,0.5) 80%, transparent 100%)',
            }}
          />

          {/* Outer glow ring - stronger glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 100px rgba(0, 212, 255, 0.8), 0 0 150px rgba(196, 181, 253, 0.7), 0 0 120px rgba(255, 165, 216, 0.6), inset 0 0 100px rgba(255,255,255,0.2)',
                '0 0 120px rgba(0, 212, 255, 0.9), 0 0 180px rgba(196, 181, 253, 0.8), 0 0 140px rgba(255, 165, 216, 0.7), inset 0 0 100px rgba(255,255,255,0.2)',
                '0 0 100px rgba(0, 212, 255, 0.8), 0 0 150px rgba(196, 181, 253, 0.7), 0 0 120px rgba(255, 165, 216, 0.6), inset 0 0 100px rgba(255,255,255,0.2)',
              ],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />

          {/* State-specific visualizations */}
          {state === 'listening' && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2 border-white/30"
                  style={{
                    width: `${120 + i * 40}px`,
                    height: `${120 + i * 40}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.2, 1.4],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          )}

          {state === 'thinking' && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2, 3, 4, 5].map(i => {
                const angle = (i * 60 * Math.PI) / 180;
                const radius = 70;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-white/60"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}
            </div>
          )}

          {state === 'speaking' && (
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  className="w-1.5 bg-white/70 rounded-full"
                  animate={{
                    height: [20, 60, 20],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200"
          style={{ zIndex: 2 }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full ${getStateColor()}`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <span className="text-sm text-gray-700">{getStateLabel()}</span>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedStats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 90, {
      duration: 2,
      delay: 0.5,
      onUpdate: latest => setCount(Math.floor(latest)),
    });

    return controls.stop;
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      {[
        { value: `${count}%`, label: 'Faster interviews' },
        { value: '155', label: 'Countries' },
        { value: '22+', label: 'Languages' },
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#0000FF] to-[#A855F7] bg-clip-text text-transparent mb-1">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center px-6 py-20 pt-32 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <FloatingOrb delay={0} x={20} y={10} />
          <FloatingOrb delay={1} x={70} y={60} />
          <FloatingOrb delay={2} x={40} y={80} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 rounded-full border border-[#6FD9CB]"
            >
              <Sparkles className="w-4 h-4 text-[#A855F7]" />
              <span className="text-sm font-semibold" style={{ color: '#1A1D3D' }}>
                Winner: 2025 Top HR Product of the Year.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-[#1A1D3D] leading-[1.1] font-semibold"
            >
               Hire with{' '}
              <span className="bg-gradient-to-r from-[#0000FF] to-[#A855F7] bg-clip-text text-transparent">Confidence and Fairness.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Eightfold’s AI Interviewer helps every candidate be seen for what they can do — delivering faster, fairer, more equitable hiring powered by trusted enterprise AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0000FF] to-[#A855F7] hover:from-[#0000DD] hover:to-[#9333EA] text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#A855F7] hover:border-[#8B5CF6] px-8 py-6 text-base rounded-xl text-[#1A1D3D] hover:bg-purple-50"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch demo
              </Button> */}
            </motion.div>

            {/* Stats */}
            <AnimatedStats />
          </div>

          {/* Right column: Voice AI Orb */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center h-[600px]"
          >
            <VoiceAIOrb />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Trial Signup Modal */}
      </section>
      <TrialSignupModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
