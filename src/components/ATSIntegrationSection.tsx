import { motion } from "motion/react";
import { Plug } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import workdayLogo from "figma:asset/8e2b81b73779d1835d4330b9390f09373188b56c.png";
import ukgLogo from "figma:asset/29ac70ffefd2f06f28cf1c4051cc24e94f94be71.png";
import successFactorsLogo from "figma:asset/551327742acdb8aa6b9caa2d0b45e2eae4358aae.png";

const atsProviders = [
  { 
    name: "Workday",
    logo: workdayLogo
  },
  { 
    name: "UKG",
    logo: ukgLogo
  },
  { 
    name: "SAP SuccessFactors",
    logo: successFactorsLogo
  },
  { 
    name: "Oracle Taleo",
    logo: "https://images.unsplash.com/photo-1617091076336-03dc99aff1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlJTIwaWNvbnxlbnwxfHx8fDE3NTk4Mjg1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "iCIMS",
    logo: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MXx8fHwxNzU5ODAxNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "Greenhouse",
    logo: "https://images.unsplash.com/photo-1562705121-e624542c7b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTczODU1MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "Lever",
    logo: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NzczMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "SmartRecruiters",
    logo: "https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhdGZvcm18ZW58MXx8fHwxNzU5ODI4NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

const integrationFeatures = [
  "Automatic candidate syncing",
  "Real-time status updates",
  "Seamless data flow",
  "One-click setup",
];

export function ATSIntegrationSection() {
  return (
    <section id="integrations" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#6FD9CB]/10 to-[#A855F7]/10 rounded-full border border-[#6FD9CB]/30">
            <Plug className="w-4 h-4 text-[#6FD9CB]" />
            <span className="text-sm text-[#1A1D3D]">Easy Integration</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1D3D] mb-6">
            Seamless Integration with Your ATS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect effortlessly with your existing applicant tracking system. Our platform integrates with all major ATS providers to streamline your hiring workflow.
          </p>
        </motion.div>

        {/* ATS Provider Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {atsProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#6FD9CB] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-20 h-20 mb-3 rounded-lg overflow-hidden bg-white flex items-center justify-center p-2">
                  {typeof provider.logo === 'string' && provider.logo.startsWith('http') ? (
                    <ImageWithFallback
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  )}
                </div>
                <span className="text-sm text-center text-gray-700 group-hover:text-[#1A1D3D] transition-colors">
                  {provider.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
