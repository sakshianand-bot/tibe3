import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  UserCheck,
  FileText,
  DollarSign,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Lock,
  Users,
  TrendingUp,
  Home,
  Scale,
  Banknote,
  Target,
  X
} from 'lucide-react';

// Helper component for alert triangle icon
const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const HowItWorks = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);
  const steps = [
    {
      number: 1,
      icon: <Search className="h-8 w-8" />,
      title: "We Research & Locate",
      description: "We audit foreclosure and tax-sale records nationwide to find properties sold for more than what was owed.",
      details: "Using proprietary databases and public records, we identify cases where surplus funds (overage) may exist for former owners or heirs. Our team covers all 50 states, ensuring no potential claim goes unnoticed.",
      image: "/images/reading-night.webp"
    },
    {
      number: 2,
      icon: <UserCheck className="h-8 w-8" />,
      title: "We Verify & Contact You",
      description: "If we find a potential match, we reach out to verify you're the rightful claimant.",
      details: "We check ownership history, liens, and legal eligibility — ensuring there's a valid claim before proceeding. Our verification process protects both you and us from fraudulent claims.",
      image: "/images/standard-quality-control-collage.webp"
    },
    {
      number: 3,
      icon: <FileText className="h-8 w-8" />,
      title: "We Handle the Paperwork & Legal Filing",
      description: "Our team prepares and files all necessary documents with trustees, courts, or government agencies.",
      details: "We handle the complex legal paperwork, court filings, and communication with agencies. Our network of vetted legal partners ensures everything is filed correctly and efficiently.",
      image: "/images/lawyers-handshake-agreement.webp"
    },
    {
      number: 4,
      icon: <DollarSign className="h-8 w-8" />,
      title: "You Get Your Funds",
      description: "Once approved, we arrange for funds to be disbursed to you.",
      details: "Funds are typically sent via secure check or wire transfer. You receive your money, minus our contingency-based fee. No upfront costs, no hidden fees.",
      image: "/images/crowd-funding-funding-give-help-nonprofit-concept.webp"
    }
  ];

  const keyBenefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Upfront Costs",
      description: "We work on contingency - you only pay if we successfully recover your funds."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "No Time Required",
      description: "We handle everything. No court appearances or complicated paperwork for you."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Maximum Recovery",
      description: "We ensure you receive the maximum amount you're legally entitled to."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Process",
      description: "Bank-level security and complete confidentiality throughout the process."
    }
  ];

  const stats = [
    { value: "$50M+", label: "Funds Recovered" },
    { value: "10K+", label: "Clients Helped" },
    { value: "50", label: "States Covered" },
    { value: "95%", label: "Success Rate" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Animation variants for framer-motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white to-sky-50/20" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-sky-50 text-sky-700 font-medium px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <DollarSign className="h-4 w-4" />
              <span>Recover What's Rightfully Yours</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">How We Help You Claim</span>
              <span className="block text-sky-600 mt-3">Surplus Funds</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              After foreclosure or tax sale, surplus funds often go unclaimed. We help former property owners and heirs recover these funds through a simple, no-risk process.
            </motion.p>

          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-gradient-to-b from-sky-50/30 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Is Important
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Thousands lose money every year simply because they don't know it exists
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-sky-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-sky-600 mb-4">
                  <AlertTriangle className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Hidden Problem
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    After a foreclosure or tax sale, when a property sells for more than what was owed, the extra money (surplus funds) legally belongs to the former owner or their heirs.
                  </p>
                  <p className="text-gray-700">
                    However, most people are unaware this money exists. Government agencies typically don't actively search for rightful owners, and strict deadlines often apply.
                  </p>
                  <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded">
                    <p className="text-sky-700 font-semibold">
                      In many cases, if unclaimed within a set period (often 1-5 years), the state keeps the money permanently.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-sky-500/10 to-sky-600/10 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Limited Time Window</h4>
                        <p className="text-gray-600">Most states have 1-5 year deadlines to claim surplus funds.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Home className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Property Sold Years Ago</h4>
                        <p className="text-gray-600">Many people have moved on and don't receive notices.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Scale className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Complex Legal Process</h4>
                        <p className="text-gray-600">Filing requirements vary by state and can be confusing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Simple 4-Step Recovery Process
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined the recovery process to make it as simple and stress-free as possible for you
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Progress line */}
            <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-200 to-sky-100"></div>
            
            <div className="space-y-16 md:space-y-40">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white border-4 border-sky-100 shadow-lg flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Connecting line for mobile */}
                  <div className="md:hidden absolute top-24 left-1/2 transform -translate-x-1/2 h-8 w-0.5 bg-sky-200"></div>

                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-sky-50 text-sky-600">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                    <p className="text-gray-500">{step.details}</p>
                    
                    {/* Step indicator for desktop */}
                    <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>  

                  {/* Step Image */}
                  <div className="w-full md:w-5/12 lg:w-1/3 rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center bg-white">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-auto max-h-80 object-contain p-4"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gradient-to-b from-sky-50/30 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We make the recovery process simple, secure, and risk-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-sky-100 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, shadow: 'lg' }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-sky-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-300 via-sky-400 via-sky-400 to-sky-500 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Let Your Money Disappear
            </h2>
            <p className="text-xl text-sky-50 mb-8 max-w-2xl mx-auto">
              Every day you wait could bring you closer to losing funds permanently. Let us help you check if you're owed money.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-amber-700 font-bold rounded-xl hover:shadow-xl flex items-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Free Claim Search</span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="tel:18002256920"
                className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (800) 225-6920</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100% Free Search</div>
              <div className="text-amber-200">No cost to check for funds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">No Obligation</div>
              <div className="text-amber-200">No commitment if funds are found</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7 Support</div>
              <div className="text-amber-200">Questions answered anytime</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Popup Image */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
          <div className="relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 bg-white text-navy-900 rounded-full w-6 h-6 flex items-center justify-center z-10 hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Close popup"
            >
              <X className="h-4 w-4 text-navy-900" />
            </button>
            <img
              src="/images/1000073630-removebg-preview.png"
              alt="Special Offer"
              className="h-32 w-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;