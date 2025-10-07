import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Loader2, CheckCircle } from "lucide-react";

interface TrialSignupFormData {
  name: string;
  email: string;
  company: string;
}

interface TrialSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Dummy API call function
const submitTrialSignup = async (data: TrialSignupFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate API response
  console.log("Trial signup data:", data);
  
  // Simulate success response
  return {
    success: true,
    message: "We will be in touch shortly."
  };
};

export function TrialSignupModal({ open, onOpenChange }: TrialSignupModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<TrialSignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (data: TrialSignupFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitTrialSignup(data);
      if (response.success) {
        setIsSuccess(true);
        setSuccessMessage(response.message);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting trial signup:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset states when modal closes
    setTimeout(() => {
      setIsSuccess(false);
      setSuccessMessage("");
      form.reset();
    }, 300);
  };

  const modalContent = (
    <motion.div 
      className="modal-portal-container flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay with blue effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-md" 
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
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer"
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

        {!isSuccess ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-[#1A1D3D]">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="h-10 px-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-[#1A1D3D]">Work Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your work email"
                        className="h-10 px-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                rules={{
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name must be at least 2 characters"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-[#1A1D3D]">Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your company name"
                        className="h-10 px-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <br/>

              <div className="flex flex-col gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 px-6 bg-gradient-to-r from-[#0000FF] to-[#A855F7] hover:from-[#0000DD] hover:to-[#9333EA] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Starting Trial...
                    </>
                  ) : (
                    "Start Free Trial"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="w-full h-10 px-6 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-all"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-[#1A1D3D] mb-3">
              Request sent!
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {successMessage}
            </p>
            <Button
              onClick={handleClose}
              className="h-10 px-6 bg-gradient-to-r from-[#0000FF] to-[#A855F7] hover:from-[#0000DD] hover:to-[#9333EA] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Done
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );

  return open ? createPortal(modalContent, document.body) : null;
}
