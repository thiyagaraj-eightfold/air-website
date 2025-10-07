import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueBlocks } from "./components/ValueBlocks";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { SuccessStoriesSection } from "./components/SuccessStoriesSection";
import { ATSIntegrationSection } from "./components/ATSIntegrationSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueBlocks />
      <HowItWorksSection />
      <SuccessStoriesSection />
      <ATSIntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
