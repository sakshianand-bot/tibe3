import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Search,
  Bot,
  Mail,
  Share2,
  Workflow,
  Cpu,
  Layers,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Star,
  Quote,
  Sparkles,
  PhoneCall,
  Activity,
  Database,
  MapPin,
  Lock,
  Code2,
  Building2,
  Compass
} from "lucide-react";

export default function AIDigitalMarketing() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO at FutureFlow Tech",
      quote:
        "Synergy Tech fundamentally transformed our customer acquisition engine. Their AI GEO strategy increased our organic LLM citations and traffic by 240% in just six months.",
      metric: "240%",
      metricLabel: "Organic Traffic Lift",
      stars: 5
    },
    {
      name: "Marcus Vance",
      role: "VP Marketing, Omnipresent SaaS",
      quote:
        "The automated lead scoring and predictive ad bidding cut our CPA by 42%. We went from guessing to scaling with absolute mathematical certainty.",
      metric: "5.3x",
      metricLabel: "Blended Marketing ROI",
      stars: 5
    },
    {
      name: "Elena Rostova",
      role: "Head of Growth, Apex Health",
      quote:
        "Their AI content engine didn't just scale output—it preserved our medical brand voice completely while capturing zero-click generative search results.",
      metric: "312%",
      metricLabel: "Lead Volume Increase",
      stars: 5
    }
  ];

  return (
    <div className="bg-[#040816] text-[#FFFFFF] font-['Inter',sans-serif] min-h-screen overflow-x-hidden selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      <main className="pt-12">
        {/* ===================================================================
            1. HERO SECTION (With Image replacing Synergy_OS Dashboard Content)
        =================================================================== */}
        <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 lg:px-24 pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#040816] via-[#0B1220] to-[#040816]">
          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                Next-Gen AI Marketing Intelligence
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-[60px] lg:leading-[68px] font-extrabold tracking-tight mb-6"
              >
                Grow Faster with <br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">
                  AI-Powered Marketing
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-4"
              >
                Your website should do more than look good—it should generate leads, build trust, and drive measurable business growth.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8"
              >
                At <span className="font-semibold text-white">Tiberius Strategies LLC</span>, we combine modern website development with AI-powered digital marketing strategies that help businesses compete in today's rapidly evolving online marketplace.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
              >
                <button className="px-8 py-4 bg-[#2563EB] text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group">
                  Claim Free AI Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-[#0B1220] text-[#FFFFFF] border border-[#2563EB]/30 rounded-xl text-sm font-semibold hover:bg-[#111827] transition-all flex items-center justify-center gap-2">
                  Explore Interactive Platform
                </button>
              </motion.div>

              {/* Live Metric Badges */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 pt-6 border-t border-[#111827]">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF]">350+</div>
                  <div className="text-xs text-[#94A3B8] mt-1">Global Brands</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#38BDF8]">35M+</div>
                  <div className="text-xs text-[#94A3B8] mt-1">Leads Generated</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#22C55E]">98%</div>
                  <div className="text-xs text-[#94A3B8] mt-1">Retention Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right 40% - Image Dashboard Mockup in place of text */}
            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl bg-[#0B1220] border border-[#2563EB]/30 p-4 sm:p-5 shadow-2xl shadow-blue-900/20 text-[#FFFFFF] overflow-hidden">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#111827]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-[#94A3B8]">Synergy_OS // Marketing_Intelligence</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" /> Live Feed
                  </span>
                </div>

                {/* IMAGE IN PLACE OF SYNERGY_OS DASHBOARD CONTENT */}
                <div className="rounded-xl overflow-hidden border border-slate-800 relative group aspect-[16/10] bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="Synergy OS Marketing Intelligence Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent"></div>

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-[#0B1220]/90 backdrop-blur-md border border-slate-700/80">
                    <div>
                      <div className="text-[10px] text-[#94A3B8] font-mono">ORGANIC TRAFFIC LIFT</div>
                      <div className="text-sm font-bold text-[#22C55E]">+243% Growth</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#94A3B8] font-mono">CAMPAIGN ROI</div>
                      <div className="text-sm font-bold text-[#38BDF8]">+420%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            2. ANIMATED STATISTICS STRIP
        =================================================================== */}
        <section className="bg-[#0B1220] py-16 px-6 md:px-16 border-y border-[#111827]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-sm font-medium text-[#94A3B8] mt-2">Enterprise Businesses</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                35M+
              </div>
              <p className="text-sm font-medium text-[#94A3B8] mt-2">Qualified Leads Generated</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                $120M+
              </div>
              <p className="text-sm font-medium text-[#94A3B8] mt-2">Revenue Influenced</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                97%
              </div>
              <p className="text-sm font-medium text-[#94A3B8] mt-2">Annual Retention Rate</p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. AI MARKETING ECOSYSTEM
        =================================================================== */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 block">Unified Neural Core</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">The AI Marketing Ecosystem</h2>
            <p className="text-[#94A3B8] text-base mt-3">Connecting every digital channel through central intelligence for unified execution.</p>
          </div>

          <div className="relative max-w-3xl mx-auto py-12 flex flex-col items-center justify-center">
            {/* Center Core Node */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="w-28 h-28 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30 z-20 cursor-pointer border-4 border-[#040816]"
            >
              <Cpu className="w-8 h-8 text-white mb-1 animate-pulse" />
              <span className="text-xs font-black tracking-wider text-white">AI CORE</span>
            </motion.div>

            {/* Orbit Ring */}
            <div className="absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full border border-[#2563EB]/20 pointer-events-none" />

            {/* Radial Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 mt-12 w-full relative z-10">
              {[
                { title: "AI SEO & GEO", icon: Search, desc: "Ranking in LLM zero-click search" },
                { title: "Predictive CRM", icon: Database, desc: "Automated pipeline deal scoring" },
                { title: "Programmatic Ads", icon: Target, desc: "Real-time algorithmic bidding" },
                { title: "Generative Email", icon: Mail, desc: "1-to-1 dynamic personalized messaging" },
                { title: "Attribution Analytics", icon: BarChart3, desc: "Multi-touch revenue modeling" },
                { title: "Social Automation", icon: Share2, desc: "Autonomous content generation" }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, borderColor: "#38BDF8" }}
                  className="bg-[#111827] border border-slate-800 rounded-xl p-5 text-center transition-all cursor-pointer shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/15 text-[#38BDF8] flex items-center justify-center mx-auto mb-3">
                    <node.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{node.title}</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">{node.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. SERVICES SHOWCASE (With Image Cards for AI Citation & Content Output)
        =================================================================== */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto space-y-24">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">01 / GEO & LLM Optimization</span>
              <h3 className="text-3xl font-bold">Generative Engine Search Dominance</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Traditional SEO isn't enough. We optimize your digital presence so generative AI engines (ChatGPT, Perplexity, Gemini) cite your business as the primary solution.
              </p>
              <ul className="space-y-3 font-medium text-sm text-[#94A3B8]">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Vector Database Indexing & Citation Optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> LLM Brand Mention Tracking</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Schema & Structured Knowledge Graph Architecture</li>
              </ul>
              <button className="pt-2 text-[#38BDF8] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                EXPLORE GEO STRATEGIES <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* IMAGE CARD IN PLACE OF "AI Citation Analytics" */}
            <div className="lg:col-span-6 bg-[#0B1220] border border-slate-800 rounded-2xl aspect-[4/3] relative overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="AI Citation Analytics Preview"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-black/30"></div>

              {/* Overlay Label */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-md bg-[#2563EB]/90 backdrop-blur-md text-white text-xs font-mono font-bold border border-blue-400/30">
                    AI CITATION ANALYTICS
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-mono font-bold border border-[#22C55E]/30">
                    RANK #1 PROMPT SEARCH
                  </span>
                </div>

                <div className="p-3 bg-[#0B1220]/90 backdrop-blur-md rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Perplexity & ChatGPT Citations</span>
                  <span className="font-bold text-[#38BDF8]">98.2% Visibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* IMAGE CARD IN PLACE OF "Content Output Metrics 10x Production Speed" */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-[#0B1220] border border-slate-800 rounded-2xl aspect-[4/3] relative overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Content Output Metrics Preview"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-black/30"></div>

              {/* Overlay Label */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-md bg-[#38BDF8]/20 backdrop-blur-md text-[#38BDF8] text-xs font-mono font-bold border border-[#38BDF8]/40">
                    CONTENT OUTPUT METRICS
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-mono font-bold border border-[#22C55E]/30">
                    10X PRODUCTION SPEED
                  </span>
                </div>

                <div className="p-3 bg-[#0B1220]/90 backdrop-blur-md rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Brand Tone Accuracy</span>
                  <span className="font-bold text-[#22C55E]">99.4% Match Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">02 / Content Automation Engine</span>
              <h3 className="text-3xl font-bold">Autonomous Multi-Channel Content Pipelines</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Scale high-quality articles, ad copy, and social campaigns automatically without sacrificing editorial integrity or brand voice.
              </p>
              <ul className="space-y-3 font-medium text-sm text-[#94A3B8]">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Custom Trained LLM Brand Voice Models</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Automated SEO Content Optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Multi-Platform Auto-Publishing Workflows</li>
              </ul>
              <button className="pt-2 text-[#38BDF8] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                SEE CONTENT ENGINE SPECS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. SERVICES & INDUSTRIES (Redesigned Equal-Height Premium Cards)
        =================================================================== */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto relative">
          {/* Radial Blue Background Glow & Grid Overlay */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 block">Website Development & AI Marketing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Website Development & Digital Marketing</h2>
            <p className="text-[#94A3B8] text-base mt-3">
              We deliver websites and digital marketing that work together to capture leads, improve conversions, and drive measurable growth.
            </p>
          </div>

          {/* 3 Equal-Height Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* CARD 1: Website Development */}
            <div className="h-full flex flex-col rounded-[32px] bg-[#0B1220] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden group hover:-translate-y-2.5 hover:border-[#2563EB] transition-all duration-500 relative">
              {/* Top Radial Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#2563EB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Illustration (Image 45% height) */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Website Development UI Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2563EB]/80 backdrop-blur-md border border-blue-400/30 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3 h-3" /> Web Engineering
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 pb-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  Website Development
                </h3>
                <p className="text-[#94A3B8] text-sm min-h-[80px] leading-relaxed">
                  Custom development for modern digital brands with mobile-first, CMS, analytics, and conversion optimization baked in.
                </p>
              </div>

              {/* 2-Column Feature Grid */}
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    'Business Websites',
                    'E-commerce',
                    'Landing Pages',
                    'CRM Integration',
                    'Speed Optimization',
                    'Analytics'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                      </div>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Button with Hover Animation */}
                <div className="pt-4 border-t border-white/[0.08] backdrop-blur-md">
                  <button className="w-full py-3.5 px-5 rounded-2xl bg-[#111827] border border-white/10 group-hover:border-[#2563EB] text-sm font-semibold text-white flex items-center justify-between transition-all">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2: AI Digital Marketing */}
            <div className="h-full flex flex-col rounded-[32px] bg-[#0B1220] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden group hover:-translate-y-2.5 hover:border-[#2563EB] transition-all duration-500 relative">
              {/* Top Radial Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#2563EB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Illustration (Image 45% height) */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="AI Marketing Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#38BDF8]/20 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Growth Engine
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 pb-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  AI Digital Marketing
                </h3>
                <p className="text-[#94A3B8] text-sm min-h-[80px] leading-relaxed">
                  Intelligent marketing services that optimize search, paid media, social, email, and automation with generative AI.
                </p>
              </div>

              {/* 2-Column Feature Grid */}
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    'AI SEO',
                    'Google Ads',
                    'GEO',
                    'ChatGPT Visibility',
                    'Social Media',
                    'Automation'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                      </div>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Button with Hover Animation */}
                <div className="pt-4 border-t border-white/[0.08] backdrop-blur-md">
                  <button className="w-full py-3.5 px-5 rounded-2xl bg-[#111827] border border-white/10 group-hover:border-[#2563EB] text-sm font-semibold text-white flex items-center justify-between transition-all">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3: Industries We Serve */}
            <div className="h-full flex flex-col rounded-[32px] bg-[#0B1220] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden group hover:-translate-y-2.5 hover:border-[#2563EB] transition-all duration-500 relative md:col-span-2 lg:col-span-1">
              {/* Top Radial Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#2563EB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Illustration (Image 45% height) */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Business Ecosystem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3 h-3" /> Business Ecosystem
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 pb-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  Industries We Serve
                </h3>
                <p className="text-[#94A3B8] text-sm min-h-[80px] leading-relaxed">
                  Our AI website and marketing services are tailored for high-growth leaders across diverse industry domains.
                </p>
              </div>

              {/* 2-Column Feature Grid */}
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    'Professional',
                    'Healthcare',
                    'Real Estate',
                    'Construction',
                    'Technology',
                    'Finance',
                    'Education',
                    'Startups'
                  ].map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                      </div>
                      <span className="truncate">{ind}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Button with Hover Animation */}
                <div className="pt-4 border-t border-white/[0.08] backdrop-blur-md">
                  <button className="w-full py-3.5 px-5 rounded-2xl bg-[#111827] border border-white/10 group-hover:border-[#2563EB] text-sm font-semibold text-white flex items-center justify-between transition-all">
                    <span>View Industries</span>
                    <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================
            6. PRODUCT DASHBOARD PREVIEW
        =================================================================== */}
        <section className="py-24 bg-[#0B1220] border-y border-[#111827] px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto text-center">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 block">Central Command</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">Total Marketing Visibility in One Screen</h2>

            {/* Browser Mockup */}
            <div className="rounded-2xl bg-[#040816] border border-slate-800 shadow-2xl overflow-hidden text-left">
              <div className="bg-[#0B1220] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 font-mono text-xs text-[#94A3B8] hidden sm:block">https://app.synergytech.ai/campaigns/overview</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#38BDF8]">
                  <Activity className="w-4 h-4" /> Live Tracking
                </div>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Google Ads CTR</div>
                  <div className="text-2xl font-bold mt-1 text-[#22C55E]">8.4%</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ 2.1% higher than benchmark</div>
                </div>
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Meta Ads Conversion Rate</div>
                  <div className="text-2xl font-bold mt-1 text-[#38BDF8]">4.2%</div>
                  <div className="text-[10px] text-[#38BDF8] mt-1">Real-time bidding active</div>
                </div>
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Cost Per Acquisition (CPA)</div>
                  <div className="text-2xl font-bold mt-1 text-white">$14.20</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↓ 32% cost reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. IMPLEMENTATION TIMELINE
        =================================================================== */}
        <section className="py-24 px-6 md:px-16 max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 block">Deployment Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How We Execute AI Precision</h2>
          </div>

          <div className="relative border-l-2 border-[#2563EB]/40 ml-4 md:ml-32 space-y-12">
            {[
              { step: "01", title: "Research & Data Ingestion", desc: "Connecting GA4, CRM, and ad historical data into our central neural model." },
              { step: "02", title: "AI Predictive Analysis", desc: "Identifying high-intent search gaps, audience personas, and CPA vulnerabilities." },
              { step: "03", title: "Model Calibration", desc: "Custom training on brand guidelines, voice rules, and compliance parameters." },
              { step: "04", title: "Campaign Generation", desc: "Automated deployment of ad creative, GEO content, and landing page funnels." },
              { step: "05", title: "Algorithmic Optimization", desc: "24/7 automated bid adjustments, budget reallocation, and multivariate testing." },
              { step: "06", title: "Enterprise Scaling", desc: "Expanding winning campaigns across secondary channels and global territories." }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-[#040816] group-hover:scale-125 transition-transform" />
                <span className="text-xs font-mono font-bold text-[#38BDF8] block mb-1">STEP {item.step}</span>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            8. TESTIMONIALS CAROUSEL
        =================================================================== */}
        <section className="py-24 bg-[#0B1220] border-y border-slate-800 px-6 md:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-[#2563EB] mx-auto mb-6 opacity-60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1 text-amber-400 mb-6">
                  {[...Array(testimonials[testimonialIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl italic leading-relaxed mb-8">
                  "{testimonials[testimonialIndex].quote}"
                </blockquote>

                <div className="font-bold text-white text-lg">{testimonials[testimonialIndex].name}</div>
                <div className="text-sm text-[#94A3B8]">{testimonials[testimonialIndex].role}</div>

                <div className="mt-6 inline-block px-4 py-2 rounded-xl bg-[#111827] border border-slate-800 text-xs text-[#22C55E] font-bold">
                  {testimonials[testimonialIndex].metricLabel}: {testimonials[testimonialIndex].metric}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    testimonialIndex === i ? "bg-[#38BDF8] w-8" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. FAQ SECTION
        =================================================================== */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-6">
              <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest block">Inquiries</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Frequently Asked Questions</h2>
              <p className="text-[#94A3B8]">Have questions about deploying AI marketing in your organization?</p>
              <button className="px-6 py-3 bg-[#111827] border border-slate-800 text-white font-semibold rounded-xl text-sm flex items-center gap-2 hover:border-[#38BDF8]">
                <PhoneCall className="w-4 h-4 text-[#38BDF8]" /> Book Technical Call
              </button>
            </div>

            <div className="md:col-span-7 space-y-4">
              {[
                { q: "What is GEO and how does it differ from traditional SEO?", a: "Generative Engine Optimization (GEO) focuses on optimizing your digital footprint so AI models like ChatGPT, Claude, and Perplexity cite your brand in answer summaries." },
                { q: "How quickly can we expect to see measurable ROI?", a: "Paid ad optimization and automated bidding show initial uplift within 14 days, while organic LLM GEO strategies take 60-90 days." },
                { q: "Does the AI engine integrate with our existing CRM?", a: "Yes, we provide native multi-directional integrations with HubSpot, Salesforce, Zapier, GA4, and Meta Business Suite." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-[#111827] border border-slate-800 rounded-xl p-6">
                  <h4 className="font-bold text-white text-base mb-2">{faq.q}</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PREMIUM CALL TO ACTION
        =================================================================== */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#0B1220] border border-[#2563EB]/40 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Ready to Scale Your Business with AI?
              </h2>
              <p className="text-[#94A3B8] text-base sm:text-lg mb-10">
                Claim your complimentary 45-minute AI marketing audit and custom growth roadmap.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-semibold text-[#FFFFFF]">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 100% Free Consultation</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 45 Minutes Technical Audit</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Custom Roadmap</span>
              </div>

              <button className="px-10 py-5 bg-[#2563EB] text-white font-bold rounded-xl text-base hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25">
                Claim Your Free AI Audit Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}