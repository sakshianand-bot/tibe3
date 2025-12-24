import React, { memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Move static data outside the component
const SERVICES = [
  {
    title: "Foreclosure & Tax-Sale Surplus Fund Recovery",
    description: "We identify and recover surplus funds generated from property auctions that closed for more than the owed amount. Our team specializes in tracking down these often-overlooked funds that rightfully belong to previous property owners.",
    features: [
      "Comprehensive surplus identification",
      "Multi-state foreclosure expertise",
      "Tax-sale surplus recovery",
      "Auction analysis and tracking"
    ],
    icon: "/images/unrecognizable-man-filling-application-form.webp",
    backgroundImage: "/images/unrecognizable-man-filling-application-form.webp"
  },
  {
    title: "Full Claim Filing & Legal Representation",
    description: "End-to-end legal management of your claim. We handle all court petitions, filings, and correspondence with government entities until your funds are successfully released.",
    features: [
      "Complete legal documentation",
      "Court petition preparation",
      "Government agency liaison",
      "Ongoing case management"
    ],
    icon: "/images/top-view-career-guidance-items-judges.webp",
    backgroundImage: "/images/top-view-career-guidance-items-judges.webp"
  },
  {
    title: "Nationwide Record Audit & Search",
    description: "Our proprietary system scours public records and ownership databases across all 50 states to identify potential unclaimed funds. We leave no stone unturned in our search for your money.",
    features: [
      "50-state coverage",
      "Title database access",
      "Public records audit",
      "Systematic search protocols"
    ],
    icon: "/images/photorealistic-earth-planet.webp",
    backgroundImage: "/images/photorealistic-earth-planet.webp",
    isSearchCard: true
  },
  {
    title: "Heir & Beneficiary Claims",
    description: "When the original property owner has passed away, we guide heirs and beneficiaries through the claim process, handling the complex documentation required for inheritance-based claims.",
    features: [
      "Heir identification services",
      "Inheritance documentation",
      "Beneficiary verification",
      "Probate claim support"
    ],
    icon: "/images/group-positive-young-women-cheering-together.webp",
    backgroundImage: "/images/group-positive-young-women-cheering-together.webp"
  },
  {
    title: "Estate & Probate Assistance",
    description: "We provide expert guidance through probate processes and maintain a network of trusted probate attorneys for specialized cases requiring additional legal support.",
    features: [
      "Probate process guidance",
      "Attorney referral network",
      "Estate claim facilitation",
      "Document coordination"
    ],
    icon: "/images/vertical-low-angle-shot-modern-glass-business-buildings-touching-sky.webp",
    backgroundImage: "/images/vertical-low-angle-shot-modern-glass-business-buildings-touching-sky.webp"
  },
  {
    title: "Free Case Evaluation",
    description: "Start with a no-obligation review of your situation. We'll determine the viability of your claim before you make any commitment, ensuring transparency from day one.",
    features: [
      "No-cost assessment",
      "Claim viability analysis",
      "Recovery potential estimate",
      "Clear action plan"
    ],
    icon: "/images/front-view-lawyer-portrait.webp",
    backgroundImage: "/images/front-view-lawyer-portrait.webp"
  }
];

const PROCESS_STEPS = [
  { step: "1", title: "Free Evaluation", desc: "We review your case at no cost to determine claim viability." },
  { step: "2", title: "Documentation", desc: "We gather and prepare all required legal documents and evidence." },
  { step: "3", title: "Claim Filing", desc: "We file all necessary petitions and manage court proceedings." },
  { step: "4", title: "Fund Recovery", desc: "We secure the release of your funds and ensure you receive payment." }
];

// Extract repeated styles
const gradientText = "bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent";
const commonButtonStyles = "font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg";

const ServiceCard = memo(({ service }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const { title, backgroundImage, icon, features, isSearchCard, description } = service;
  const isEvaluation = title === 'Free Case Evaluation';
  const bgImage = backgroundImage || icon;

  return (
    <article 
      ref={cardRef}
      className={`relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col will-change-transform backface-visible -webkit-backface-visible transform-gpu ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      aria-label={title}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 ${
          isEvaluation ? 'brightness-80 contrast-120 scale-105' : 'brightness-90 contrast-110'
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-800/40 to-sky-900/80" />
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col h-full">
        <div className={`p-6 text-center flex-1 flex flex-col items-center justify-center ${isSearchCard ? 'py-12' : 'py-8'}`}>
          <div className="w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-lg">
            <img 
              src={icon} 
              alt={`${title} icon`}
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/placeholder-icon.png';
              }}
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 px-4">
            {title}
          </h3>
        </div>
        <div className="p-6 pt-0 flex-1 flex flex-col">
          <p className="text-sky-100 mb-6 leading-relaxed flex-grow text-center">
            {description}
          </p>
          <div className="space-y-3">
            <div className="mt-4">
              <h4 className="font-semibold text-sky-100 text-center mb-3">What We Provide:</h4>
              <div className="grid gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-sky-300 rounded-full mt-1.5"></div>
                    </div>
                    <span className="ml-3 text-sky-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-300/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </article>
  );
});

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    isSearchCard: PropTypes.bool,
  }).isRequired,
};

ServiceCard.displayName = 'ServiceCard';

const ProcessStep = memo(({ step, title, description }) => (
  <div className="text-center" role="listitem">
    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-sky-700">{step}</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sky-600">{description}</p>
  </div>
));

ProcessStep.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProcessStep.displayName = 'ProcessStep';

const Services = memo(function Services() {
  const [isVisible, setIsVisible] = useState({
    services: false,
    process: false,
    cta: false
  });

  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const refs = [
      { ref: servicesRef, section: 'services' },
      { ref: processRef, section: 'process' },
      { ref: ctaRef, section: 'cta' }
    ];

    refs.forEach(({ ref, section }) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', section);
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleStartEvaluation = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewCases = () => {
    window.location.href = '/case-studies';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className={gradientText}>Services</span>
          </h1>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Comprehensive surplus fund recovery solutions designed to maximize your claim's success 
            while minimizing your involvement and stress.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div 
          ref={processRef}
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-sky-100 transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className={gradientText}>4-Step</span> Recovery Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep 
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.desc}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="inline-block bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-full p-1 mb-8">
            <div className="bg-white rounded-full px-8 py-4">
              <h3 className="text-2xl font-bold text-gray-900">
                No Recovery • No Fee*
              </h3>
            </div>
          </div>
          
          <p className="text-xl text-sky-600 mb-8 max-w-2xl mx-auto">
            Our success is tied to yours. We only get paid when you recover your funds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartEvaluation}
              className={`bg-gradient-to-r from-sky-600 to-sky-800 text-white ${commonButtonStyles} hover:from-sky-700 hover:to-sky-900 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
              aria-label="Start free evaluation"
            >
              Start Free Evaluation
            </button>
            <button 
              onClick={handleViewCases}
              className={`bg-white text-sky-700 border-2 border-sky-600 ${commonButtonStyles} hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
              aria-label="View sample cases"
            >
              View Sample Cases
            </button>
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            *Client responsible for court filing fees in some jurisdictions. We never charge upfront fees for our recovery services.
          </p>
          
          {/* Dark blue accent at the end */}
          <div className="mt-16 h-2 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
});

// Add display name for better debugging
Services.displayName = 'Services';

// Simple error boundary for production
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <div className="text-red-600 font-bold text-lg mb-2">Something went wrong</div>
          <p className="text-gray-700">Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ServicesWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Services />
    </ErrorBoundary>
  );
}

export { Services };