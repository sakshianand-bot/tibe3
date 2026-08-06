import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import wholesale from "../assets/wholesale.jpg";
import offmarket from "../assets/offmarket.jpg"
import property from "../assets/property.jpg"
import {
  ArrowRight,
  BarChart2,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Database,
  Globe,
  Layers,
  LineChart,
  Lock,
  MapPin,
  Maximize2,
  Phone,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Briefcase,
  Landmark,
  Scale
} from "lucide-react";

export default function SynergyTechRealEstate() {
  const [expandedStep, setExpandedStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] font-['Hanken_Grotesk',sans-serif] min-h-screen overflow-x-hidden selection:bg-[#2563eb]/20 selection:text-[#1d4ed8]">

      <main>
        {/* ===================================================================
            1. HERO SECTION
        =================================================================== */}
        <section className="relative min-h-[92vh] flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-white">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Removed items-center to allow full-height flex stretching */}
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">

            {/* Left 50% - Added h-full and flex column distribution */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-between h-full"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div>
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[62px] lg:leading-[68px] font-extrabold tracking-[-0.03em] text-[#0f172a] mb-6">
                  Find Opportunities. Build Wealth. <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#06b6d4] bg-clip-text text-transparent">Close Smarter.</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed mb-8 font-normal">
                  At Tiberius Strategies LLC, we help investors, wholesalers, buyers, and strategic partners discover high-potential off-market real estate opportunities across the United States. Whether you're a first-time investor or an experienced buyer looking to scale your portfolio, our team provides market intelligence, lead generation support, property research, and acquisition strategies designed to help you make confident investment decisions.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                  <button className="px-8 py-4 bg-[#2563eb] text-white rounded-2xl text-sm font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
                    Book a Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white text-[#0f172a] border border-[#cbd5e1] rounded-2xl text-sm font-semibold hover:bg-slate-50 transition-all duration-300 shadow-xs flex items-center justify-center gap-2">
                    Get Started Today
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right 50% - Added h-full & flex box to auto-stretch height */}
            <motion.div
              className="lg:col-span-6 relative h-full flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-slate-900/40 text-white overflow-hidden h-full flex flex-col">
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* Dashboard Image Display - Removed fixed aspect ratio and added flex-1 to fill remaining height */}
                <div className="rounded-2xl overflow-hidden border border-slate-800 relative group bg-slate-950 flex-1 min-h-[300px]">
                  <img
                    src={wholesale}
                    alt="Wholesale Real Estate Intelligence Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Floating Live KPI Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    <div>
                      <div className="text-[10px] text-slate-400 font-mono">PORTFOLIO ROI</div>
                      <div className="text-base font-bold text-emerald-400">Positive Growth</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-mono">RISK SCORE</div>
                      <div className="text-base font-bold text-cyan-400">Optimal</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ===================================================================
            3. WHO WE SERVE
        =================================================================== */}
        <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto" id="sectors">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3 block">Target Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">Who We Serve</h2>
            <p className="text-[#64748b] text-base mt-3">Empowering investors, wholesalers, buyers, and partners with market intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1 - Large */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group shadow-xl border border-slate-800">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Real Estate Investors & Wholesale Buyers</h3>
                  <p className="text-slate-300 text-sm max-w-md">First-time buyers to experienced investors looking to scale their portfolios efficiently.</p>
                </div>
                <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-blue-400">
                  <span>New Investors</span> • <span>Property Buyers</span>
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Investment Groups</h3>
                <p className="text-[#64748b] text-sm">Targeted off-market pipeline generation and deal matching.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#2563eb]">Strategic Capital</div>
            </div>

            {/* Tile 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Private Lenders</h3>
                <p className="text-[#64748b] text-sm">Verified property records, history, and asset due diligence.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#2563eb]">Capital Preservation</div>
            </div>

            {/* Tile 4 - Large */}
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Real Estate Entrepreneurs</h3>
                  <p className="text-[#64748b] text-sm">Automated workflows and CRM support to grow wholesale operations.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Nationwide Strategic Partners</h3>
                  <p className="text-[#64748b] text-sm">End-to-end lead qualification, buyer matching, and closing support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. TECHNOLOGY WE USE
        =================================================================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 block">Modern Infrastructure</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technology We Use</h2>
              <p className="text-slate-400 text-base mt-3">Advanced systems backing every deal, lead, and research report.</p>
            </div>

            {/* Browser Window Mockup */}
            <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 px-4 py-1 rounded-lg bg-slate-950 text-slate-400 font-mono text-xs border border-slate-800 hidden sm:block">
                    https://app.tiberiusstrategies.com/tech-stack
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Powered by Tiberius Strategies</span>
              </div>

              {/* Tech Stack List */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 space-y-3">
                  {[
                    "AI-powered property research",
                    "CRM automation",
                    "Workflow automation",
                    "Market intelligence",
                    "Public records analysis",
                    "Data visualization",
                    "Lead management systems"
                  ].map((item, idx) => (
                    <div key={idx} className={`p-3.5 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer transition-all ${idx === 0 ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}>
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold">Integrated Market Intelligence</h4>
                      <p className="text-xs text-slate-400">Seamless lead sourcing and analysis</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium border border-slate-700 hover:bg-slate-700">Explore Stack</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Off-Market Scanning</div>
                      <div className="text-2xl font-bold mt-1">Active</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Continuous Updates</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Avg. Due Diligence Time</div>
                      <div className="text-2xl font-bold mt-1 text-cyan-400">Accelerated</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Streamlined Workflow</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Internal Rate of Return (IRR)</div>
                      <div className="text-2xl font-bold mt-1 text-emerald-400">Optimized</div>
                      <div className="text-[10px] text-slate-400 mt-1">Risk Adjusted</div>
                    </div>
                  </div>

                  {/* Mock Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800">
                          <th className="pb-3">Property Asset</th>
                          <th className="pb-3">Location</th>
                          <th className="pb-3">AI Confidence</th>
                          <th className="pb-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        <tr>
                          <td className="py-3 font-medium">Apex Industrial Park</td>
                          <td className="py-3 text-slate-400">Phoenix, AZ</td>
                          <td className="py-3 text-emerald-400 font-bold">High</td>
                          <td className="py-3 text-right"><span className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 font-medium">Underwrite</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Horizon Logistics Hub</td>
                          <td className="py-3 text-slate-400">Dallas, TX</td>
                          <td className="py-3 text-emerald-400 font-bold">High</td>
                          <td className="py-3 text-right"><span className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 font-medium">Underwrite</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. OUR SERVICES
        =================================================================== */}
        <section className="py-20 px-6 md:px-16 max-w-[1280px] mx-auto" id="services">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-2 block">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Our Services
            </h2>
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="flex flex-col h-full">
                {/* Balanced 50/50 image container using flex-1 with aspect-ratio fallback */}
                <div className="flex-1 min-h-[260px] bg-slate-900 relative overflow-hidden">
                  <img
                    src={offmarket}
                    alt="Off-Market Property Research"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-blue-400/30">
                        OFF-MARKET RESEARCH
                      </span>
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 font-mono uppercase">ANALYSIS</div>
                        <div className="text-sm font-bold text-white">Public Records & History</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body scaled equally */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                      Lead Generation & Intelligence
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                      Off-Market Property Research & Investor Leads
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                      In-depth market intelligence, public record analysis, and investor lead generation tailored for high-conversion deal sourcing.
                    </p>

                    <ul className="space-y-2 text-xs font-medium text-[#334155] border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Off-Market Property Research
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Investor Lead Generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Ownership Verification & Property History
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Public Record Analysis & Market Comparisons
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Foreclosure & Surplus Opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all"
                >
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="flex flex-col h-full">
                {/* Balanced 50/50 image container using flex-1 with aspect-ratio fallback */}
                <div className="flex-1 min-h-[260px] bg-slate-900 relative overflow-hidden">
                  <img
                    src={property}
                    alt="Property Due Diligence & Wholesale Support"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md text-emerald-400 text-[11px] font-mono font-bold border border-emerald-500/30 flex items-center gap-1.5">
                        <Lock className="w-3 h-3" /> TRANSACTION SUPPORT
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">Buyer Matching & Closing</span>
                      <span className="font-bold text-emerald-400">Streamlined</span>
                    </div>
                  </div>
                </div>

                {/* Content Body scaled equally */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                      Acquisition & Closing
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                      Property Due Diligence & Wholesale Support
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                      Thorough investment potential reviews, lead qualification, buyer matching, and complete closing support for your team.
                    </p>

                    <ul className="space-y-2 text-xs font-medium text-[#334155] border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Property Due Diligence & Investment Potential Review
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Wholesale Transaction Support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Lead Qualification
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Buyer Matching & Closing Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all"
                >
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================
            6. WHY WORK WITH TIBERIUS STRATEGIES?
        =================================================================== */}
        <section className="py-28 bg-slate-900 text-white px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 block">Competitive Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why Work With Tiberius Strategies?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
              {[
                { title: "Data-driven market research", desc: "Deep market analysis and verified ownership analytics." },
                { title: "AI-powered lead sourcing", desc: "Automated, high-intent deal flow engines." },
                { title: "Nationwide market support", desc: "Comprehensive coverage across US markets." },
                { title: "Professional transaction coordination", desc: "Seamless, end-to-end transaction support." },
                { title: "Transparent communication", desc: "Clear reporting and direct updates at every step." },
                { title: "Ethical business practices", desc: "Uncompromising integrity and business standards." },
                { title: "Fast response times", desc: "Agile execution tailored to fast-moving deals." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${expandedStep === idx ? 'bg-blue-600 border-blue-400 text-white shadow-xl scale-102' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs leading-relaxed opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. CASE STUDIES / PROVEN SUCCESS
        =================================================================== */}
        <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Outcomes</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">Featured Success Stories</h2>
            </div>
            <button className="text-[#2563eb] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
              VIEW ALL CASE STUDIES <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">Commercial Real Estate Fund</span>
                <span className="text-xs text-slate-400 font-mono">PORTFOLIO EXPANSION</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Apex Capital Partners</h3>
              <p className="text-[#64748b] text-sm mb-6 leading-relaxed">
                Deployed autonomous lead qualification and property research pipeline across multi-family assets.
              </p>
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-600">Expanded</div>
                  <div className="text-xs text-slate-500 font-medium">Pipeline Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#2563eb]">Accelerated</div>
                  <div className="text-xs text-slate-500 font-medium">Lead Sourcing Speed</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f172a] hover:text-[#2563eb]">
                READ FULL CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold">Industrial Wholesale Group</span>
                <span className="text-xs text-slate-400 font-mono">PORTFOLIO EXPANSION</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Meridian Logistics Group</h3>
              <p className="text-[#64748b] text-sm mb-6 leading-relaxed">
                Integrated AI-powered off-market research and seller intent models across key markets.
              </p>
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-600">Reduced</div>
                  <div className="text-xs text-slate-500 font-medium">Acquisition Cycle Time</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#2563eb]">Improved</div>
                  <div className="text-xs text-slate-500 font-medium">Deal Match Precision</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f172a] hover:text-[#2563eb]">
                READ FULL CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. CALL TO ACTION (Closing CTA)
        =================================================================== */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 rounded-[2.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Let's Build Your Investment Pipeline
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
                Whether you're searching for your next investment property or looking to grow your wholesale business, Tiberius Strategies is ready to help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25">
                  Book a Free Consultation
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/15 flex items-center justify-center gap-2">
                  Contact Us
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2">
                  Get Started Today
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Market Research Included</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Customized Acquisition Strategy</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Transparent Communication</span>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}