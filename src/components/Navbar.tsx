import React, { useState } from "react";
import { Button } from "./ui/button";
import eightfoldLogo from "figma:asset/604fcf26b74e087a89bd89784835c92728b34b4a.png";
import { TrialSignupModal } from "./TrialSignupModal";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Success Stories", href: "#stories" },
  { label: "Integrations", href: "#integrations" },
];

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center cursor-pointer">
              <img 
                src={eightfoldLogo} 
                alt="Eightfold.ai" 
                className="h-8"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#1A1D3D] hover:text-[#A855F7] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Sign In and CTA */}
          <div className="flex items-center gap-4">
            {/* <a
              href="#signin"
              className="text-sm text-[#1A1D3D] hover:text-[#A855F7] transition-colors duration-200"
            >
              Sign In
            </a> */}
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#0000FF] to-[#A855F7] hover:from-[#0000DD] hover:to-[#9333EA] text-white px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Trial Signup Modal */}
      <TrialSignupModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </nav>
  );
}