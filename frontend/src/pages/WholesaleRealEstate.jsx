import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import autonomousImage from "../assets/autonomous.jpg";
import institutionImage from "../assets/instituition.jpg";
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
            1. HERO SECTION (Split 60/40 + Interactive AI Dashboard Mockup)
        =================================================================== */}
        <section className="relative min-h-[92vh] flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-white">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left 50% */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-6 w-fit shadow-xs">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Enterprise Real Estate AI Platform v4.2
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[62px] lg:leading-[68px] font-extrabold tracking-[-0.03em] text-[#0f172a] mb-6">
                Architecting the Future of <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#06b6d4] bg-clip-text text-transparent">Institutional Assets</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed mb-8 font-normal">
                Autonomous asset valuation, holographic due diligence, and predictive pipeline management built for $100M+ real estate portfolios and private equity funds.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button className="px-8 py-4 bg-[#2563eb] text-white rounded-2xl text-sm font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
                  Book Architecture Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-[#0f172a] border border-[#cbd5e1] rounded-2xl text-sm font-semibold hover:bg-slate-50 transition-all duration-300 shadow-xs flex items-center justify-center gap-2">
                  Explore Interactive Platform
                </button>
              </motion.div>

              {/* Client Metrics Strip */}
              <motion.div variants={fadeInUp} className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">350+</div>
                  <div className="text-xs text-[#64748b] font-medium mt-1">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#2563eb]">$8.4B+</div>
                  <div className="text-xs text-[#64748b] font-medium mt-1">Assets Managed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#06b6d4]">94.2%</div>
                  <div className="text-xs text-[#64748b] font-medium mt-1">Deal Accuracy</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right 50% - Floating Live Interactive SaaS Dashboard */}
            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-slate-900/40 text-white overflow-hidden">
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                </div>

                {/* IMAGE IN PLACE OF "AI Portfolio Monitor v4.2" */}
                <div className="rounded-2xl overflow-hidden border border-slate-800 relative group aspect-[16/10] bg-slate-950">
                  <img
                    src="/images/wholesale_real_estate.png"
                    alt="AI Portfolio Analytics Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Floating Live KPI Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    <div>
                      <div className="text-[10px] text-slate-400 font-mono">PORTFOLIO ROI</div>
                      <div className="text-base font-bold text-emerald-400">+31.4% YTD</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-mono">RISK SCORE</div>
                      <div className="text-base font-bold text-cyan-400">0.12 (Optimal)</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            2. STATISTICS SECTION (Dark High-Impact Strip)
        =================================================================== */}
        <section className="bg-slate-950 text-white py-16 px-6 md:px-16 border-y border-slate-800">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">350+</div>
              <p className="text-sm font-medium text-slate-400 mt-2">Institutional Clients</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">45+</div>
              <p className="text-sm font-medium text-slate-400 mt-2">Enterprise Projects Built</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">$8.4B+</div>
              <p className="text-sm font-medium text-slate-400 mt-2">Property Value Analyzed</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">99.98%</div>
              <p className="text-sm font-medium text-slate-400 mt-2">Platform Uptime SLA</p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. WHO WE SERVE (Bento Grid Layout)
        =================================================================== */}
        <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto" id="sectors">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3 block">Target Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">Purpose-Built for Industry Titans</h2>
            <p className="text-[#64748b] text-base mt-3">Architected to handle complex regulatory compliance, deal pipelines, and asset classes.</p>
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
                  <h3 className="text-2xl font-bold mb-2">Institutional Investors & RE Funds</h3>
                  <p className="text-slate-300 text-sm max-w-md">Multi-billion portfolio management with algorithmic risk scoring, automated LP distributions, and compliance tracking.</p>
                </div>
                <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-blue-400">
                  <span>140+ Active Funds</span> • <span>$5.2B Capital Deployed</span>
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Private Equity</h3>
                <p className="text-[#64748b] text-sm">High-velocity underwriting tools and automated exit analysis.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#2563eb]">82 Global Firms</div>
            </div>

            {/* Tile 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Commercial Developers</h3>
                <p className="text-[#64748b] text-sm">Feasibility modeling, AI construction tracking, and supply chain telemetry.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#2563eb]">64 Enterprise Teams</div>
            </div>

            {/* Tile 4 - Large */}
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Commercial Lenders & Banks</h3>
                  <p className="text-[#64748b] text-sm">Automated debt-yield analysis, AI title search, and credit default modeling.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Wholesalers & Mega Brokers</h3>
                  <p className="text-[#64748b] text-sm">Off-market property scraping, predictive seller intent, and lead engines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. PRODUCT SHOWCASE (Enterprise SaaS Dashboard Visuals)
        =================================================================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 block">Platform Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">The Synergy Real Estate OS</h2>
              <p className="text-slate-400 text-base mt-3">An end-to-end command center integrating underwriting, CRM, investor portal, and automated asset ops.</p>
            </div>

            {/* Browser Window Mockup */}
            <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 px-4 py-1 rounded-lg bg-slate-950 text-slate-400 font-mono text-xs border border-slate-800 hidden sm:block">
                    https://app.synergytech.ai/portfolio/analytics
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Role: Senior Portfolio Manager</span>
              </div>

              {/* Main SaaS Screen Graphics */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 space-y-3">
                  {["Asset Intelligence", "Pipeline Automation", "Investor Relations", "Debt & Risk Engine", "GIS Mapping"].map((item, idx) => (
                    <div key={idx} className={`p-3.5 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer transition-all ${idx === 0 ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}>
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold">Predictive Deal Flow & Automated Valuation</h4>
                      <p className="text-xs text-slate-400">Live feed across 18 target metropolitan areas</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium border border-slate-700 hover:bg-slate-700">Export Report</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Off-Market Properties Scanned</div>
                      <div className="text-2xl font-bold mt-1">14,290</div>
                      <div className="text-[10px] text-emerald-400 mt-1">↑ 12% vs last week</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Avg. Due Diligence Time</div>
                      <div className="text-2xl font-bold mt-1 text-cyan-400">4.8 Hrs</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Formerly 3 Weeks</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Internal Rate of Return (IRR)</div>
                      <div className="text-2xl font-bold mt-1 text-emerald-400">28.4%</div>
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
                          <th className="pb-3">Underwritten Cap</th>
                          <th className="pb-3">AI Confidence</th>
                          <th className="pb-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        <tr>
                          <td className="py-3 font-medium">Apex Industrial Park</td>
                          <td className="py-3 text-slate-400">Phoenix, AZ</td>
                          <td className="py-3">$42.5M</td>
                          <td className="py-3 text-emerald-400 font-bold">98.2%</td>
                          <td className="py-3 text-right"><span className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 font-medium">Underwrite</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Horizon Logistics Hub</td>
                          <td className="py-3 text-slate-400">Dallas, TX</td>
                          <td className="py-3">$88.0M</td>
                          <td className="py-3 text-emerald-400 font-bold">96.8%</td>
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
            5. SERVICES SECTION (Full-Width Alternating Feature Blocks)
        =================================================================== */}
        <section className="py-20 px-6 md:px-16 max-w-[1280px] mx-auto" id="services">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-2 block">
              Specialized Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Institutional Solutions Built to Scale
            </h2>
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Compact Visual Preview Header */}
                <div className="h-52 bg-slate-900 relative overflow-hidden">
                  <img
                    src={autonomousImage}
                    alt="GIS Satellite Mapping and Data Overlay"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Compact HUD Layer */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-blue-400/30">
                        PARCEL #482-991-A
                      </span>
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 font-mono uppercase">AI Valuation</div>
                        <div className="text-sm font-bold text-white">$24,800,000</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        98.4% Confidence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                    01 / Property Intelligence
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    Autonomous Due Diligence & GIS Mapping
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    Automated environmental, title, and cap-rate analysis integrating GIS contour data to evaluate commercial assets in minutes.
                  </p>

                  <ul className="space-y-2 text-xs font-medium text-[#334155] border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Real-time Title & Environmental Risk Scan
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Institutional Argus-Native Underwriting
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all"
                >
                  EXPLORE DUE DILIGENCE <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Compact Visual Preview Header */}
                <div className="h-52 bg-slate-900 relative overflow-hidden">
                  <img
                    src={institutionImage}
                    alt="Secure Investor Portal Interface"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Compact Security Badge Layer */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md text-emerald-400 text-[11px] font-mono font-bold border border-emerald-500/30 flex items-center gap-1.5">
                        <Lock className="w-3 h-3" /> 256-BIT PORTAL
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">Fund IV Distributions</span>
                      <span className="font-bold text-emerald-400">$1.42M Dispatched</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                    02 / Investor Ecosystems
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    Institutional Investor Portals
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    Transparent LP portals with automated capital calls, ACH distributions, tax document vaults, and live portfolio IRR.
                  </p>

                  <ul className="space-y-2 text-xs font-medium text-[#334155] border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Automated K-1 Generation & Secure Delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" /> Real-Time Portfolio Equity Dashboards
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all"
                >
                  VIEW PORTAL SPECS <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================
            6. STRATEGIC FRAMEWORK (Interactive Process Stepper)
        =================================================================== */}
        <section className="py-28 bg-slate-900 text-white px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 block">Implementation Methodology</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">From Technical Audit to Deployment</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { title: "1. Audit", desc: "Data infrastructure mapping and API compatibility review." },
                { title: "2. Modeling", desc: "Custom neural network training on historical asset data." },
                { title: "3. Architecture", desc: "Enterprise cloud setup with SOC-2 compliant security." },
                { title: "4. Automation", desc: "CRM, ERP, and GIS pipeline integration." },
                { title: "5. Scaling", desc: "Algorithmic execution and team onboarding." }
              ].map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${expandedStep === idx ? 'bg-blue-600 border-blue-400 text-white shadow-xl scale-102' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <div className="text-xs font-mono font-semibold mb-3">{`STEP 0${idx + 1}`}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs leading-relaxed opacity-90">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. CASE STUDIES (Measurable ROI Results)
        =================================================================== */}
        <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Outcomes</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">Featured Enterprise Transformations</h2>
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
                <span className="text-xs text-slate-400 font-mono">ASSETS: $1.2B</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Apex Capital Partners</h3>
              <p className="text-[#64748b] text-sm mb-6 leading-relaxed">
                Deployed autonomous underwriting pipeline across 4,000 multi-family units.
              </p>
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-600">+$3.2M</div>
                  <div className="text-xs text-slate-500 font-medium">Added Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#2563eb]">84%</div>
                  <div className="text-xs text-slate-500 font-medium">Faster Underwriting</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f172a] hover:text-[#2563eb]">
                READ FULL CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold">Industrial Portfolio</span>
                <span className="text-xs text-slate-400 font-mono">ASSETS: $850M</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Meridian Logistics Group</h3>
              <p className="text-[#64748b] text-sm mb-6 leading-relaxed">
                Integrated predictive seller intent models across major US freight hubs.
              </p>
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-600">48%</div>
                  <div className="text-xs text-slate-500 font-medium">Shorter Sales Cycle</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#2563eb]">3.8x</div>
                  <div className="text-xs text-slate-500 font-medium">Deal Volume Increase</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f172a] hover:text-[#2563eb]">
                READ FULL CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. CALL TO ACTION (Clean High-Contrast Gradient Banner)
        =================================================================== */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 rounded-[2.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Ready to Build Tomorrow's Real Estate Platform?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
                Book a 45-minute technical consultation with our principal software architects.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25">
                  Book Strategy Session
                </button>
                <a href="tel:+1800SYNERGY" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/15 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> +1 (800) SYNERGY
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Architecture Review Included</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Custom Product Roadmap</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Zero Sales Pitch</span>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}