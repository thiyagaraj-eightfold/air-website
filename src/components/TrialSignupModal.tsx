import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
// create marketo form css file
import "../styles/marketo-form.css";

interface TrialSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Extend Window interface to include MktoForms2
declare global {
  interface Window {
    MktoForms2?: {
      loadForm: (baseUrl: string, munchkinId: string, formId: number, callback?: (form: any) => void) => void;
      lightbox: (form: any) => { show: () => void };
    };
  }
}

export function TrialSignupModal({ open, onOpenChange }: TrialSignupModalProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const marketoScriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load Marketo script only once
    if (!marketoScriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "//pages.eightfold.ai/js/forms2/js/forms2.min.js";
      script.async = true;
      document.body.appendChild(script);
      marketoScriptLoadedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (open && formContainerRef.current) {
      // Wait for MktoForms2 to be available
      const checkMarketoLoaded = setInterval(() => {
        if (window.MktoForms2) {
          clearInterval(checkMarketoLoaded);
          
          // Load the Marketo form
          window.MktoForms2.loadForm("//pages.eightfold.ai", "278-NXO-307", 2422);
        }
      }, 100);

      return () => clearInterval(checkMarketoLoaded);
    }
  }, [open]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const modalContent = (
    <motion.div 
      className="modal-portal-container flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay */}
      <motion.div 
        className="bg-overlay" 
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Modal Content */}
      <motion.div 
        className="trial-signup-modal relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-[500px] mx-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ 
          zIndex: 99999,
          position: 'relative',
          isolation: 'isolate'
        }}
      >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="close-button absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1A1D3D] mb-2">
                Start Your Free Trial
              </h2>
              <p className="text-gray-600 text-sm">
                Get instant access to AI-powered voice interviews. No credit card required.
              </p>
            </div>

        {/* Marketo Form Container */}
        <div ref={formContainerRef}>
          <form id="mktoForm_2422"></form>
        </div>
      </motion.div>
    </motion.div>
  );

  return open ? createPortal(modalContent, document.body) : null;
}
