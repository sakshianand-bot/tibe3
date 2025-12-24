import React from 'react';
import { 
  Quote, 
  Star, 
  Users,
  DollarSign,
  FileText,
  CheckCircle,
  Shield,
  Award,
  ChevronRight,
  Scale,
  MessageSquare
} from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Highly Professional People",
      content: "United States Surplus Funds exemplifies true professionalism. What sets them apart is their commitment to handling the entire claim process on my behalf. They didn't just keep me informed, they represented me and navigated the complex terrain of recovering my funds with the utmost professionalism.",
      author: "Michael Rodriguez",
      location: "Miami, FL",
      amount: "$24,500",
      type: "Foreclosure Surplus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "Recovered in 3 months"
    },
    {
      id: 2,
      title: "Even My Small Claim",
      content: "These people came to my rescue when I had a relatively small claim of $5,000. What stood out was their reasonable fee of just 30%, which came to $1,500. This was a game-changer for me, especially when regular lawyers were demanding more than the claim's worth.",
      author: "Sarah Johnson",
      location: "Austin, TX",
      amount: "$5,000",
      type: "Tax Sale Recovery",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "Completed in 2 months"
    },
    {
      id: 3,
      title: "Life-Changing Recovery",
      content: "After my father passed away, we discovered foreclosure surplus funds from years ago. The team handled the complex heir documentation with such care and professionalism. They recovered $67,000 that we never knew existed.",
      author: "Jennifer Lee",
      location: "Seattle, WA",
      amount: "$67,000",
      type: "Inheritance Claim",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "4 months including probate"
    },
    {
      id: 4,
      title: "Nationwide Expertise",
      content: "My property was in a different state, and I thought recovering the funds would be impossible. United States Surplus Funds handled the interstate complexities seamlessly. Their knowledge of different state laws is remarkable.",
      author: "Robert Chen",
      location: "New York, NY",
      amount: "$38,200",
      type: "Multi-State Recovery",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "3.5 months"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "$4.2M+", label: "Total Recovered", icon: <DollarSign className="w-5 h-5" /> },
    { value: "5 Days", label: "Avg. Recovery Time", icon: <FileText className="w-5 h-5" /> },
    { value: "50 States", label: "Nationwide Coverage", icon: <Users className="w-5 h-5" /> }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-sky-500 via-sky-600 to-gray-900 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Hear from our clients <span className="bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent">in their own words</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who've successfully recovered their surplus funds with our help.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-xl">
                  <div className="text-sky-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              </div>
              <div className="text-sm font-medium text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Horizontal Testimonials Section */}
        <div className="mb-20">
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative rounded-2xl overflow-hidden group">
                {/* Glass background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl group-hover:border-sky-400/30 transition-all duration-500"></div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="w-full">
                    <div className="relative h-full">
                      <Quote className="absolute -top-2 left-0 w-8 h-8 text-sky-400/50 group-hover:text-sky-300/70 transition-colors duration-300" />
                      <div className="pl-10">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-200 transition-colors duration-300">
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-300/90 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Guarantee Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 border border-gray-200 shadow-md">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent">Promise</span> to You
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We operate on a simple principle: Your success is our success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Recovery, No Fee",
                description: "We only get paid when you recover your funds. No upfront costs or hidden fees.",
                icon: <CheckCircle className="w-8 h-8 text-white" />
              },
              {
                title: "Full Legal Representation",
                description: "We handle all court filings, documentation, and legal proceedings on your behalf.",
                icon: <Scale className="w-8 h-8 text-white" />
              },
              {
                title: "Transparent Process",
                description: "Clear communication and regular updates throughout your recovery journey.",
                icon: <MessageSquare className="w-8 h-8 text-white" />
              }
            ].map((promise, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-sky-100">
                  {React.cloneElement(promise.icon, { className: 'w-8 h-8 text-sky-500' })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{promise.title}</h3>
                <p className="text-gray-400">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-1 mb-8 shadow-md">
            <div className="bg-white rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Ready to Start Your Recovery?
              </h3>
              <p className="text-gray-400">
                Free evaluation • No upfront fees • 30% contingency only
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 font-semibold py-4 px-10 rounded-2xl border-2 border-gray-700 hover:border-sky-500 hover:shadow-xl transition-all duration-300 text-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View More Testimonials
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-white border-2 border-blue-500 rounded-2xl text-blue-600 font-semibold py-4 px-10 hover:bg-blue-50 transition-all duration-200 text-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Evaluation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
