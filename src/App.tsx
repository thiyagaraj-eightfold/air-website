import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InterviewTimelineSection } from "./components/InterviewTimelineSection";
import { ValueBlocks } from "./components/ValueBlocks";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { SuccessStoriesSection } from "./components/SuccessStoriesSection";
import { KeyBenefitsSection } from "./components/KeyBenefitsSection";
import { ATSIntegrationSection } from "./components/ATSIntegrationSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <InterviewTimelineSection />
      <ValueBlocks />
      <HowItWorksSection />
      <SuccessStoriesSection />
      <KeyBenefitsSection />
      <ATSIntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
