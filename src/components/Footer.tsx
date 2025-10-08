import eightfoldLogo from "figma:asset/604fcf26b74e087a89bd89784835c92728b34b4a.png";

export function Footer() {
  return (
    <footer className="bg-[#1A1D3D] py-8 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={eightfoldLogo} 
            alt="Eightfold.ai" 
            className="h-6 brightness-0 invert"
          />
        </div>

        {/* Links and Copyright */}
        <div className="flex items-center gap-8">
          <a
            href="https://eightfold.ai/privacy-policy/"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Privacy Policy
          </a>
          <a
            href="https://eightfold.ai/security/"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Terms of Service
          </a>
          <span className="text-sm text-gray-400">
            © 2024 Eightfold AI. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
