import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, FileText, Shield, Clock, AlertCircle, Mail, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are “surplus funds”?",
      answer: "Surplus (or overage) funds are the leftover money when a property sells at foreclosure or tax-sale for more than what was owed on liens, mortgages or taxes. That extra amount legally belongs to the former owner or their heirs — not the bank or county.",
      icon: <HelpCircle className="w-6 h-6" />,
      category: "basics"
    },
    {
      question: "Why don't previous owners always get notified?",
      answer: "Counties or trustees sometimes send notices only to the old property address — and if the owner moved, they may never receive the notice. Many funds go unclaimed because owners don't know about them.",
      icon: <AlertCircle className="w-6 h-6" />,
      category: "process"
    },
    {
      question: "Can I claim surplus funds on my own?",
      answer: "Yes — but the process can be complicated. It often involves researching public records, filing legal claims, and meeting strict deadlines. Mistakes or missed deadlines can result in losing the funds altogether.",
      icon: <FileText className="w-6 h-6" />,
      category: "process"
    },
    {
      question: "Do I have to pay upfront?",
      answer: "No. At Tiberius Strategies, we operate on a contingency basis: you pay only if we successfully recover your funds.",
      icon: <Shield className="w-6 h-6" />,
      category: "pricing"
    },
    {
      question: "How long does the process take?",
      answer: "It varies. Simple claims may resolve in a few weeks to a few months. More complex cases (multiple owners, heirs, probate, competing liens) can take longer. We provide an estimate during your free case evaluation.",
      icon: <Clock className="w-6 h-6" />,
      category: "timeline"
    },
    {
      question: "What documents will you need from me?",
      answer: "Typically: proof of ownership (deed, last mortgage statement), foreclosure / sale documentation (if available), ID, and any notices you may have received. If you are an heir, death certificate and probate documents may also be required.",
      icon: <FileText className="w-6 h-6" />,
      category: "process"
    },
    {
      question: "Is this legal and legitimate?",
      answer: "Yes. Surplus funds belong to owners/beneficiaries by law. We use recognized legal procedures and licensed attorneys to file claims on your behalf. We never ask for upfront fees, and we provide clear, written agreements before starting work.",
      icon: <Shield className="w-6 h-6" />,
      category: "legal"
    },
    {
      question: "What if I don't have all my documents?",
      answer: "Don't worry — our team specializes in helping clients who have lost or misplaced important documents. We can often locate necessary records through our nationwide database searches and public records access.",
      icon: <HelpCircle className="w-6 h-6" />,
      category: "process"
    },
    {
      question: "Are there any hidden fees?",
      answer: "Absolutely not. We operate on a transparent, contingency-fee basis. You'll know exactly what percentage we charge (only upon successful recovery) before we begin. Any court filing fees will be discussed upfront.",
      icon: <Shield className="w-6 h-6" />,
      category: "pricing"
    },
    {
      question: "What happens if you can't recover my funds?",
      answer: "You pay nothing. Our contingency model means we only get paid when you get paid. If we're unsuccessful in recovering your funds, there is no charge for our services.",
      icon: <HelpCircle className="w-6 h-6" />,
      category: "pricing"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", count: faqs.length },
    { id: "basics", name: "Basics", count: faqs.filter(f => f.category === "basics").length },
    { id: "process", name: "Process", count: faqs.filter(f => f.category === "process").length },
    { id: "pricing", name: "Pricing", count: faqs.filter(f => f.category === "pricing").length },
    { id: "timeline", name: "Timeline", count: faqs.filter(f => f.category === "timeline").length },
    { id: "legal", name: "Legal", count: faqs.filter(f => f.category === "legal").length }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  // Split FAQs into two columns
  const leftColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 1);

  const toggleFAQ = (originalIndex) => {
    setOpenIndex(openIndex === originalIndex ? null : originalIndex);
  };

  // Helper to find original index
  const getOriginalIndex = (colIndex, isRightColumn = false) => {
    if (isRightColumn) {
      return colIndex * 2 + 1;
    }
    return colIndex * 2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-sky-200">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Clear Answers to Common <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-sky-100">
            Everything you need to know about surplus funds and how we can help you recover what's rightfully yours.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 backdrop-blur-sm bg-white/80">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">$10M+</div>
              <div className="text-gray-600">Recovered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 backdrop-blur-sm bg-white/80">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600">No Upfront Fees</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 backdrop-blur-sm bg-white/80">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 backdrop-blur-sm bg-white/80">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-sky-100 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(null); // Close any open FAQ when changing category
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md shadow-sky-100' 
                    : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-200 hover:border-sky-300'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/30 text-white'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion - Two Independent Columns */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {leftColumnFAQs.map((faq, colIndex) => {
                const originalIndex = getOriginalIndex(colIndex, false);
                const isOpen = openIndex === originalIndex;
                
                return (
                  <div
                    key={originalIndex}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
                      isOpen 
                        ? 'ring-2 ring-blue-500 border-blue-200' 
                        : 'border-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                      onClick={() => toggleFAQ(originalIndex)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-xl transition-colors ${
                          isOpen
                            ? 'bg-sky-500 text-white'
                            : 'bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white'
                        }`}>
                          {React.cloneElement(faq.icon, { className: 'w-5 h-5' })}
                        </div>
                        <h3 className={`text-lg font-semibold transition-colors ${
                          isOpen
                            ? 'text-sky-700'
                            : 'text-gray-900 group-hover:text-sky-700'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-sky-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-sky-600 transition-colors" />
                      )}
                    </button>
                    
                    {/* Animated content area */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 ml-16">
                        <div className="p-4 rounded-lg border-l-4 border-sky-300 bg-sky-50/50">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightColumnFAQs.map((faq, colIndex) => {
                const originalIndex = getOriginalIndex(colIndex, true);
                const isOpen = openIndex === originalIndex;
                
                return (
                  <div
                    key={originalIndex}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
                      isOpen 
                        ? 'ring-2 ring-blue-500 border-blue-200' 
                        : 'border-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                      onClick={() => toggleFAQ(originalIndex)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-xl transition-colors ${
                          isOpen
                            ? 'bg-sky-500 text-white'
                            : 'bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white'
                        }`}>
                          {React.cloneElement(faq.icon, { className: 'w-5 h-5' })}
                        </div>
                        <h3 className={`text-lg font-semibold transition-colors ${
                          isOpen
                            ? 'text-sky-700'
                            : 'text-gray-900 group-hover:text-sky-700'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-sky-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-sky-600 transition-colors" />
                      )}
                    </button>
                    
                    {/* Animated content area */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 ml-16">
                        <div className="p-4 rounded-lg border-l-4 border-sky-300 bg-sky-50/50">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3">Contingency-Based</h3>
            <p className="text-sky-100">No recovery = No fees. Period.</p>
          </div>
          
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-3">Legal Expertise</h3>
            <p className="text-sky-100">Licensed attorneys handle all filings</p>
          </div>
          
          <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Fast Response</h3>
            <p className="text-sky-100">Time-sensitive claims handled urgently</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg border border-sky-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-sky-600" />
                <span>Still have questions?</span>
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                We're here to help. Contact our support team for personalized assistance with your surplus funds claim.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <a
                      href="mailto:support@tiberiusstrategies.com"
                      className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-sky-200 hover:border-sky-300 rounded-xl text-sky-700 font-medium transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5" />
                      Email Support
                    </a>
                    <a
                      href="tel:8882256920"
                      className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 rounded-xl text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 shadow-sky-100"
                    >
                      <Phone className="w-5 h-5" />
                      Call (888) 225-6920
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Question"
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;