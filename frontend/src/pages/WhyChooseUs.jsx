import React from 'react';
import { CheckCircle, Shield, Globe2, Target, Users, Clock, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <CheckCircle className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "100% Contingency-Based — No Upfront Fees",
      description: "You pay nothing unless we successfully recover funds. We cover all research, filing, and legal costs up front.",
      highlight: "No Recovery, No Fee",
      color: "bg-blue-500",
      image: "/images/s8.jpg"
    },
    {
      icon: <Shield className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "Full-Service & Legal Support",
      description: "From claim research to final disbursement, we manage every step — including engaging licensed attorneys when necessary.",
      highlight: "End-to-End Management",
      color: "bg-blue-600",
      image: "/images/s9.jpg"
    },
    {
      icon: <Globe2 className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "Nationwide Coverage, Local Expertise",
      description: "Whether your property was in Seattle, Florida, California, Texas or elsewhere — our network and experience cover all U.S. states.",
      highlight: "50-State Network",
      color: "bg-blue-700",
      image: "/images/s10.jpg"
    },
    {
      icon: <Target className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "Transparent & Ethical",
      description: "We believe in clarity and fairness: clear contracts, honest communication, no hidden costs, and full disclosure before you sign.",
      highlight: "No Hidden Fees",
      color: "bg-blue-500",
      image: "/images/s11.jpg"
    },
    {
      icon: <Users className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "Client-First Approach",
      description: "Personalized attention, regular updates on your case status, and support until funds are safely in your hands.",
      highlight: "Personalized Service",
      color: "bg-blue-600",
      image: "/images/s1.jpg"
    },
    {
      icon: <Clock className="w-12 h-12 text-sky-500 p-2 bg-sky-50 rounded-full" />,
      title: "Fast, Efficient, and Reliable",
      description: "We understand the urgency — surplus funds are time-sensitive. We act quickly to ensure you don't miss claim deadlines.",
      highlight: "Time-Sensitive Action",
      color: "bg-blue-700",
      image: "/images/trust-word-made-with-wooden-blocks.webp"
    }
  ];

  const stats = [
    { value: "100%", label: "Contingency-Based", sublabel: "No upfront costs" },
    { value: "50+", label: "States Served", sublabel: "Nationwide coverage" },
    { value: "24/7", label: "Case Tracking", sublabel: "Always informed" },
    { value: "<30", label: "Day Evaluation", sublabel: "Quick start" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            What Sets Us Apart
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-sky-500">Tiberius Strategies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            While others may offer similar services, our approach combines professional expertise 
            with genuine client care — making the surplus fund recovery process seamless and stress-free.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 relative flex flex-col"
            >
              {item.image && (
                <div className="w-full h-72 bg-gray-100 flex items-center justify-center overflow-hidden p-1">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain scale-150"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="bg-sky-500 p-4 rounded-2xl text-white flex-shrink-0 shadow-md hover:shadow-lg transition-shadow">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-200">
          <div className="bg-gradient-to-r from-sky-800 to-sky-900 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Tiberius Difference</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              How we compare to typical recovery firms in prioritizing your success
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Aligned</h3>
                <p className="text-gray-600">
                  Our success is tied to yours — we only win when you win
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Transparency</h3>
                <p className="text-gray-600">
                  Clear communication and no surprises throughout the process
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Urgent Action</h3>
                <p className="text-gray-600">
                  Quick response to time-sensitive claim deadlines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-900 opacity-95"></div>
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          
          <div className="relative p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience the Difference for Yourself
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied clients who've recovered funds they didn't even know existed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sky-900 font-semibold py-4 px-10 rounded-full hover:bg-sky-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                Start Free Evaluation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 text-lg">
                Call (888) 225-6920
              </button>
            </div>
            
            <p className="mt-8 text-gray-300 text-sm">
              No obligation • Confidential consultation • 100% contingency-based
            </p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted By Clients Across America
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">A+</div>
              <div>BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">★ 4.9</div>
              <div>Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div>Ethical Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5,000+</div>
              <div>Clients Served</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          background-image: radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;