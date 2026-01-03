import React, { useState } from 'react';
import { FileText, Video, BookOpen, Download, Search, ArrowRight, PlayCircle, ExternalLink, ChevronRight, Star, Clock, Users, Shield } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, description, link, type, imageUrl }) => {
  const typeColors = {
    'Guide': 'bg-sky-100 text-sky-700 border-sky-200',
    'Video': 'bg-blue-100 text-blue-700 border-blue-200',
    'Download': 'bg-indigo-100 text-indigo-700 border-indigo-200'
  };
  
  const defaultImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-sky-300 transition-all duration-300 h-full flex flex-col group hover:-translate-y-2 hover:shadow-2xl shadow-lg">
      {/* Image Container */}
      <div className="h-48 bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden relative">
        <img 
          src={imageUrl || defaultImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1.5 ${typeColors[type].split(' ')[0]} ${typeColors[type].split(' ')[1]} border ${typeColors[type].split(' ')[2]} rounded-full backdrop-blur-sm`}>
            {type}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 ${typeColors[type].split(' ')[0]} border ${typeColors[type].split(' ')[2]} rounded-xl`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-1">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full text-sky-600 font-semibold hover:text-sky-700 group/link transition-colors"
          >
            <span className="flex items-center gap-2">
              {type === 'Download' ? 'Download Now' : type === 'Video' ? 'Watch Video' : 'Read Guide'}
              <ExternalLink className="w-4 h-4" />
            </span>
            <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ResourceSection = ({ title, description, children, icon: Icon }) => (
  <section className="mb-16">
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center border border-sky-200">
          <Icon className="w-7 h-7 text-sky-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mt-2">{description}</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </section>
);

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = {
    guides: [
      {
        title: "Understanding Surplus Funds",
        description: "A comprehensive guide to how surplus funds work and how to claim them.",
        type: "Guide",
        icon: FileText,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Step-by-Step Claim Process",
        description: "Detailed walkthrough of the entire surplus funds recovery process.",
        type: "Guide",
        icon: FileText,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Common Mistakes to Avoid",
        description: "Learn about frequent pitfalls in the claims process and how to avoid them.",
        type: "Guide",
        icon: FileText,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ],
    videos: [
      {
        title: "Surplus Funds Explained",
        description: "A 10-minute overview of how surplus funds are created and claimed.",
        type: "Video",
        icon: Video,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Client Success Stories",
        description: "Hear from individuals who successfully recovered their surplus funds.",
        type: "Video",
        icon: Video,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Q&A with Our Experts",
        description: "Get answers to common questions about surplus funds recovery.",
        type: "Video",
        icon: Video,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ],
    downloads: [
      {
        title: "Claim Checklist",
        description: "Printable checklist to help you prepare for your claim.",
        type: "Download",
        icon: Download,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Document Templates",
        description: "Ready-to-use templates for common claim documents.",
        type: "Download",
        icon: Download,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "State-Specific Guidelines",
        description: "Download guides specific to your state's surplus funds process.",
        type: "Download",
        icon: Download,
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ]
  };

  // Filter by search and category
  const allResources = [
    ...resources.guides.map(r => ({ ...r, category: 'guides' })),
    ...resources.videos.map(r => ({ ...r, category: 'videos' })),
    ...resources.downloads.map(r => ({ ...r, category: 'downloads' }))
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group filtered resources by category
  const groupedResources = {
    guides: filteredResources.filter(r => r.category === 'guides'),
    videos: filteredResources.filter(r => r.category === 'videos'),
    downloads: filteredResources.filter(r => r.category === 'downloads')
  };

  const categories = [
    { id: 'all', label: 'All Resources', count: filteredResources.length },
    { id: 'guides', label: 'Guides', count: groupedResources.guides.length },
    { id: 'videos', label: 'Videos', count: groupedResources.videos.length },
    { id: 'downloads', label: 'Downloads', count: groupedResources.downloads.length }
  ];

  const features = [
    {
      icon: Star,
      title: "Expertly Curated",
      description: "Resources created by industry experts with years of experience"
    },
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Get straight to the information you need without the fluff"
    },
    {
      icon: Users,
      title: "Community Trusted",
      description: "Resources used and recommended by thousands of clients"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All information is thoroughly researched and verified"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Background Image */}
        <div className="relative bg-sky-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90"
              alt="Resources background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 to-sky-900/30"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <div className="inline-flex items-center justify-center p-5 bg-white/90 backdrop-blur-sm rounded-3xl mb-6 border border-white/20 shadow-2xl">
              <BookOpen className="w-12 h-12 text-sky-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Helpful <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Everything you need to understand and navigate the surplus funds recovery process.
            </p>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 mb-12 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all duration-200 shadow-sm hover:shadow-md text-gray-900 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-sky-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Resource Grid */}
        {searchQuery || activeCategory !== 'all' ? (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                <p className="text-gray-600">{filteredResources.length} resources found</p>
              </div>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center gap-2"
              >
                Clear filters
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
            
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={`filtered-${index}`} {...resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gradient-to-br from-white to-sky-50 rounded-3xl border border-gray-100">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-sky-200">
                  <Search className="w-12 h-12 text-sky-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">No resources found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  View All Resources
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Category Sections */
          <div className="space-y-20">
            <ResourceSection 
              title="Guides & Articles" 
              description="In-depth resources to help you understand surplus funds and the recovery process."
              icon={FileText}
            >
              {resources.guides.map((resource, index) => (
                <ResourceCard key={`guide-${index}`} {...resource} />
              ))}
            </ResourceSection>

            <ResourceSection 
              title="Video Resources" 
              description="Watch our video guides and success stories to learn more about the process."
              icon={Video}
            >
              {resources.videos.map((resource, index) => (
                <ResourceCard key={`video-${index}`} {...resource} />
              ))}
            </ResourceSection>

            <ResourceSection 
              title="Downloads" 
              description="Helpful documents and templates to assist with your claim."
              icon={Download}
            >
              {resources.downloads.map((resource, index) => (
                <ResourceCard key={`download-${index}`} {...resource} />
              ))}
            </ResourceSection>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 md:p-12 mt-20 border border-sky-200 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-sky-50 to-blue-50 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl mb-6 border border-sky-200">
                <PlayCircle className="w-12 h-12 text-sky-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Personalized Assistance?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our team of experts is here to help you navigate the surplus funds recovery process.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-sky-300/50 hover:-translate-y-0.5">
                <span className="relative z-10">Contact Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-sky-200 text-sky-600 hover:border-sky-300 hover:bg-sky-50 font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                Schedule a Free Consultation
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Free evaluation • No upfront fees • 30% contingency only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Resources', value: '24+', icon: BookOpen },
              { label: 'Video Hours', value: '5.5+', icon: Clock },
              { label: 'Downloads', value: '1.2k+', icon: Download },
              { label: 'Expert Contributors', value: '12+', icon: Users }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-sky-600" />
                </div>
                <div className="text-2xl font-bold text-sky-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;