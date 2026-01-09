import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, X, CreditCard, Shield, FileText, Users, Award, Zap, Clock, DollarSign, Lock, User, ShieldCheck, FileSearch, Wallet, Handshake, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const BenefitCard = ({ icon, title, description, image, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-card rounded-xl p-6 border border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 flex flex-col h-full"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-navy-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
        <p className="text-sky-600 text-sm mt-3 font-medium group-hover:text-sky-700 transition-colors">
          Click to learn more →
        </p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {image && (
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-navy-900">{title}</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{description}</p>
              <ul className="space-y-2 mb-6">
                {details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDunsPopup, setShowDunsPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '');
    formData.append('from_name', 'Tiberius Strategies Free Case Review');
    formData.append('subject', 'New Free Case Review Submission');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your submission! We will review your case and get back to you soon.'
        });
        formRef.current?.reset();
        setTimeout(() => {
          setSubmitStatus({ success: false, message: '' });
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to submit your request. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);

  // Show the D-U-N-S popup shortly after page load
  useEffect(() => {
    const dunsTimer = setTimeout(() => {
      setShowDunsPopup(true);
    }, 1500);

    return () => clearTimeout(dunsTimer);
  }, []);

  const quickBullets = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Expert Recovery",
      text: "Nationwide surplus-fund recovery via experienced professionals"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Full-Service",
      text: "We handle research, paperwork, filings — you get paid, hassle-free"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "No Preliminary Fees",
      text: "Advance charges are absent — we charge only if your funds are successfully recovered"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trusted Partner",
      text: "Transparent, ethical, and client-first approach"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Quick and efficient processing to get your funds as soon as possible",
      image: "/images/s4.webp",
      details: [
        "Expedited claim processing",
        "Direct communication with our team",
        "Regular updates on your case status"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Paperwork Handled",
      description: "We handle all the complex paperwork and legal procedures",
      image: "/images/s5.webp",
      details: [
        "Document preparation and filing",
        "Legal expertise on your side",
        "No need to navigate complex forms"
      ]
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "No Upfront Cost",
      description: "Pay nothing until we successfully recover your funds",
      image: "/images/s6.webp",
      details: [
        "No hidden fees",
        "Success-based payment",
        "Free initial consultation"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Your information is protected with bank-level security",
      image: "/images/s7.webp",
      details: [
        "256-bit encryption",
        "Secure document handling",
        "Strict privacy policies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
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

      {/* D-U-N-S Left Popup */}
      {showDunsPopup && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-black text-white rounded-lg px-4 py-3 w-56 animate-fade-in-up ring-2 ring-white/20 shadow-[0_24px_80px_rgba(255,255,255,0.18)] backdrop-blur-md border border-white/6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-wide">Registered with <span className="font-semibold">Dun &amp; Bradstreet</span></div>
                <div className="text-sm font-semibold mt-1">D‑U‑N‑S®:144923452</div>
              </div>
              <button
                onClick={() => setShowDunsPopup(false)}
                aria-label="Close D-U-N-S popup"
                className="text-gray-100 hover:text-white ml-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Consultation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-primary/30 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-card rounded-2xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center relative p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 shadow-lg -mb-2">
              <div className="absolute inset-0 bg-white/20 rounded-2xl -z-10" />
              <div className="w-14 h-14 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CreditCard className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-1">
                Free Case Review
              </h3>
              <p className="text-sky-600 text-sm font-medium">
                Find out if you're owed surplus funds
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-6">
              <div className="absolute inset-0 bg-white/20 rounded-2xl -z-10" />
              {submitStatus.message && (
                <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="flex items-start">
                    {submitStatus.success ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
                <input
                  type="text"
                  name="property_address"
                  placeholder="Property Address (if known)"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500/90 to-sky-600/90 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:from-sky-600/90 hover:to-sky-700/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Submitting...
                    </>
                  ) : (
                    'Submit for Free Review'
                  )}
                </button>
              </form>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              By submitting, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start overflow-hidden bg-navy-900 pt-4">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/sa2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full pt-4 pb-12 text-center">
          <div>
              {/* Trust Badge */}
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full mb-6 text-sm border border-white/20 mx-auto w-auto">
                <Award className="h-5 w-5 text-gold-500" />
                <span className="font-medium">Nationwide Recovery Experts</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-center mx-auto text-white">
                Recover Your Money<br />
                <span className="text-white font-medium">No Upfront Costs</span>
              </h1>

              {/* Subheadline */}
              <div className="relative inline-block mb-4 max-w-2xl mx-auto">
                <p className="text-xl text-white font-medium p-4 text-center italic">
                  If your home went through foreclosure or tax sale, you could be owed thousands in surplus funds. We've helped recover over $50M for homeowners just like you.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span className="text-lg">Check Eligibility Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:1-800-399-0132"
                  className="bg-gradient-to-r from-blue-600/70 via-blue-700/70 to-blue-800/70 hover:from-blue-500/70 hover:to-blue-700/70 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform z-10" />
                  <span className="text-lg font-medium z-10">(800) 225-6920</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80 w-full">
                <div className="flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-navy-900" />
                    ))}
                  </div>
                  <span>2,500+ Clients Served</span>
                </div>
                <div className="flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>4.9/5 (1,200+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/60 text-sm">Scroll to learn more</div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-background to-navy-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Why Choose Tiberius Strategies
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-sky-100 to-sky-50 px-2 py-1 rounded-md">Professional, hassle-free surplus funds recovery with your success as our priority</span>
            </p>
          </div>

          {/* Benefits Grid - Clickable Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((item, index) => (
              <BenefitCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                image={item.image}
                details={item.details}
              />
            ))}
          </div>

          {/* Quick Bullets Section */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-50 rounded-2xl p-8 md:p-12 shadow-lg border border-sky-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-sky-800 mb-4">
                How We Make It Simple
              </h3>
              <p className="text-sky-600 text-lg font-medium">
                We handle the complexity so you don't have to
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {quickBullets.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-sky-50 hover:border-sky-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-sky-100 group-hover:to-sky-200 transition-colors duration-300">
                      <div className="text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-sky-900 mb-1">{item.title}</h4>
                      <p className="text-sky-700 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-accent to-gold-600 text-accent-foreground font-bold py-4 px-8 rounded-xl hover:shadow-2xl flex items-center justify-center space-x-3 mx-auto transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                <span className="text-lg">Start Your Free Review</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                No obligation • 100% confidential • Get results in days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage Section */}
      <section className="py-20 bg-gradient-to-b from-white to-navy-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Serving All 50 States
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-sky-100 to-sky-50 px-2 py-1 rounded-md">
                We have the expertise and network to recover surplus funds nationwide
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Coverage Map/Image */}
            <div className="relative flex items-start justify-center">
              <div className="relative w-full max-w-2xl">
                <img
                  src="/images/map-with-american-flag-us-national-loyalty-day-celebration-removebg-preview.png"
                  alt="Nationwide Coverage Map"
                  className="w-full h-auto object-contain scale-110 transform transition-all duration-300 hover:scale-115"
                  style={{
                    filter: 'drop-shadow(0 5px 30px rgba(0, 0, 0, 0.9))',
                    WebkitFilter: 'drop-shadow(0 5px 30px rgba(0, 0, 0, 0.9))',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-navy-50/30" />
              </div>
              
              {/* Animated Dots Overlay */}
              <div className="absolute inset-0">
                {[
                  { top: '20%', left: '15%', label: 'CA' },
                  { top: '30%', left: '50%', label: 'TX' },
                  { top: '25%', left: '80%', label: 'FL' },
                  { top: '40%', left: '35%', label: 'IL' },
                  { top: '55%', left: '60%', label: 'GA' },
                  { top: '45%', left: '20%', label: 'WA' },
                ].map((dot, index) => (
                  <div
                    key={index}
                    className="absolute animate-pulse"
                    style={{ top: dot.top, left: dot.left }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg animate-ping opacity-75" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                      <div className="absolute -top-6 -left-2 bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
                        {dot.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-sky-100 h-full flex flex-col min-h-[350px]">
                <div className="flex-1">
                  <div className="flex items-start space-x-6 mb-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">Complete Coverage</h3>
                      <p className="text-navy-700 leading-relaxed">
                        Our team operates in every state, with local expertise in all 50 states' foreclosure and tax sale laws.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-sky-50 rounded-xl p-6 text-center hover:bg-sky-100 transition-all duration-300 hover:shadow-lg">
                    <div className="text-4xl font-bold text-sky-700 mb-2">50</div>
                    <div className="text-base font-semibold text-sky-800">States</div>
                  </div>
                  <div className="bg-sky-50 rounded-xl p-5 text-center hover:bg-sky-100 transition-colors duration-300">
                    <div className="text-4xl font-bold text-sky-700 mb-2">3,000+</div>
                    <div className="text-base font-semibold text-sky-800">Counties</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
              </div>
            </div>
          </div>

          {/* State Highlights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-2xl font-bold text-center text-navy-900 mb-8">
              Recent Recoveries Across the Country
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { state: "California", amount: "$142K", cases: "Recent Cases" },
                { state: "Texas", amount: "$89K", cases: "Average Recovery" },
                { state: "Florida", amount: "$67K", cases: "This Month" },
                { state: "New York", amount: "$118K", cases: "Total Recovered" },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 hover:bg-sky-50 rounded-xl transition-colors duration-300">
                  <div className="text-2xl font-bold text-sky-700 mb-1">{item.state}</div>
                  <div className="text-3xl font-bold text-navy-900 mb-2">{item.amount}</div>
                  <div className="text-sm text-navy-700 font-medium">{item.cases}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Final CTA with Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Claim What's Yours?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands who've successfully recovered their funds with our expert assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Clock className="w-10 h-10 text-sky-600 mx-auto mb-4" />,
                title: "Quick Turnaround",
                description: "Average claim processing in 30-45 days"
              },
              {
                icon: <Shield className="w-10 h-10 text-sky-600 mx-auto mb-4" />,
                title: "No Out-of-Pocket Expenses",
                description: "We only get paid when you get paid"
              },
              {
                icon: <Users className="w-10 h-10 text-sky-600 mx-auto mb-4" />,
                title: "Dedicated Support",
                description: "Personal case manager for every client"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            {/* Button and text removed as requested */}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Success Stories</h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Real recoveries for real people across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                amount: "$28,450",
                location: "Miami, FL",
                type: "Foreclosure Surplus",
                story: "After my home was foreclosed, I had no idea I was entitled to surplus funds. Tiberius Strategies recovered $28,450 I didn't know existed!"
              },
              {
                amount: "$42,300",
                location: "Dallas, TX",
                type: "Tax Sale Surplus",
                story: "The team at Tiberius made the entire process simple. They handled all the paperwork and kept me informed every step of the way."
              },
              {
                amount: "$36,750",
                location: "Atlanta, GA",
                type: "Foreclosure Surplus",
                story: "I was skeptical at first, but their no-upfront-fee policy convinced me to try. Best decision ever - they recovered over $36k!"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="text-gold-600 text-2xl font-bold mb-2">{story.amount}</div>
                <div className="text-sm text-gray-500 mb-4">{story.location} • {story.type}</div>
                <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mr-3">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Client {index + 1}</div>
                    <div className="text-sm text-gray-500">Verified Client</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Ready to See If You Qualify?</h3>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-7 h-7 text-sky-600" />
                  </div>
                  <h4 className="font-semibold mb-1">1. Submit Your Info</h4>
                  <p className="text-sm text-gray-600">Quick and secure form</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-7 h-7 text-sky-600" />
                  </div>
                  <h4 className="font-semibold mb-1">2. Free Case Review</h4>
                  <p className="text-sm text-gray-600">No obligation, 100% confidential</p>
                </div>
                {/* Second arrow removed as requested */}
                <div className="md:col-span-3 text-center">
                  {/* Button and text removed as requested */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;