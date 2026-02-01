import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Mail,
  Calendar,
  Menu,
  X,
  Database,
  Workflow,
  BarChart3,
  Globe
} from 'lucide-react';

// --- DATA: This is where you add new projects easily ---
const PROJECTS_DATA = [
  {
    id: 'medicine-reminder',
    title: 'Automated Patient Refill System',
    shortDesc: 'Eliminating revenue leakage for a multi-branch pharmacy through proactive WhatsApp reminders.',
    category: 'Healthcare / CRM',
    problem: 'Manual reminder calls were inconsistent. Customers forgot refills, leading to a 25% drop in recurring revenue and staff burnout.',
    solution: 'Engineered a logic-heavy n8n workflow connected to the Pharmacy Management System (PMS) and WhatsApp Business API.',
    tools: ['n8n', 'WhatsApp API', 'Google Sheets', 'PostgreSQL'],
    metrics: [
      { label: 'Manual Work', value: '0%', trend: 'down' },
      { label: 'Missed Refills', value: '-82%', trend: 'down' },
      { label: 'Retention Rate', value: '94%', trend: 'up' },
      { label: 'ROI', value: '12x', trend: 'up' }
    ],
    architecture: [
      'Daily Cron Trigger at 9:00 AM',
      'Data fetch from PMS via API',
      'Filter patients with refills due in 3 days',
      'Conditional check: Is user already notified?',
      'Send personalized WhatsApp message via Cloud API',
      'Update "Last Notified" timestamp in DB'
    ],
    videoUrl: '#'
  },
  {
    id: 'lead-nurture',
    title: 'AI Lead Qualification Engine',
    shortDesc: 'Automating high-volume lead filtering for a real estate agency to focus agents on hot deals.',
    category: 'Sales / AI',
    problem: 'Agents were spending 4 hours/day calling "junk" leads. Response time was > 2 hours, losing hot prospects.',
    solution: 'Built an AI-powered triage system using n8n + OpenAI that qualifies leads in 30 seconds.',
    tools: ['n8n', 'OpenAI', 'Typeform', 'HubSpot'],
    metrics: [
      { label: 'Response Time', value: '30 sec', trend: 'down' },
      { label: 'Agent Productivity', value: '+300%', trend: 'up' },
      { label: 'Qualified Leads', value: '2.5x', trend: 'up' },
      { label: 'Human Error', value: 'Zero', trend: 'down' }
    ],
    architecture: [
      'Web-hook trigger from Facebook Ads/Typeform',
      'Analyze lead input using GPT-4o for intent',
      'Calculate Lead Score based on budget/timeline',
      'If Score > 80: Alert Agent on WhatsApp immediately',
      'If Score < 80: Start automated email nurturing sequence'
    ],
    videoUrl: 'https://gemini.google.com/share/6cde6bcbe465'
  }
];

const SERVICES = [
  {
    title: 'WhatsApp Automation',
    desc: 'Reminders, follow-ups, and lead nurturing that meets your customers where they are.',
    icon: <MessageSquare className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Email & CRM Sync',
    desc: 'Auto-replies, invoice alerts, and keeping your customer data clean across all platforms.',
    icon: <Mail className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Custom n8n Workflows',
    desc: 'Tailor-made automation architecture built for your specific business logic.',
    icon: <Workflow className="w-6 h-6 text-purple-500" />
  },
  {
    title: 'Process Optimization',
    desc: 'Converting manual "human-heavy" processes into scalable digital systems.',
    icon: <Zap className="w-6 h-6 text-amber-500" />
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

  const navigateToProject = (project) => {
    setSelectedProject(project);
    setActivePage('project-detail');
  };

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg mr-2">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">AUTO<span className="text-blue-600">SCALE</span></span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => setActivePage('home')} className={`text-sm font-medium ${activePage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Home</button>
            <button onClick={() => setActivePage('projects')} className={`text-sm font-medium ${activePage === 'projects' || activePage === 'project-detail' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Projects</button>
            <button onClick={() => setActivePage('services')} className={`text-sm font-medium ${activePage === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Services</button>
            <button onClick={() => setActivePage('docs')} className={`text-sm font-medium ${activePage === 'docs' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>How it Works</button>
            <button onClick={() => setActivePage('contact')} className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Book Free Audit
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4 space-y-4 flex flex-col items-start">
          <button onClick={() => { setActivePage('home'); setIsMenuOpen(false) }} className="text-gray-600 font-medium">Home</button>
          <button onClick={() => { setActivePage('projects'); setIsMenuOpen(false) }} className="text-gray-600 font-medium">Projects</button>
          <button onClick={() => { setActivePage('services'); setIsMenuOpen(false) }} className="text-gray-600 font-medium">Services</button>
          <button onClick={() => { setActivePage('docs'); setIsMenuOpen(false) }} className="text-gray-600 font-medium">How it Works</button>
          <button onClick={() => { setActivePage('contact'); setIsMenuOpen(false) }} className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">Book Free Audit</button>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <Zap className="w-3 h-3 mr-1.5 fill-current" /> Automation Problem Solver
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI & Automation systems</span> that save businesses time & money.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop wasting human talent on manual tasks. Scale your operations with custom n8n workflows that work 24/7 without errors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setActivePage('contact')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center">
              Book Free Automation Audit <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button onClick={() => setActivePage('projects')} className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center">
              See Real Projects
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
            <div>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Workflows Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">10k+</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Hours Saved Yearly</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">System Monitoring</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">0%</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Human Error</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-0"></div>
    </section>
  );

  const ProjectGrid = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-gray-600">Real problems solved with automation. No fluff.</p>
          </div>
          <button onClick={() => setActivePage('projects')} className="hidden sm:flex items-center text-blue-600 font-bold hover:underline">
            View All Projects <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all flex flex-col">
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{project.shortDesc}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">{m.label}</p>
                      <p className="text-xl font-bold text-gray-900">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-8 pt-0">
                <button
                  onClick={() => navigateToProject(project)}
                  className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectDetailPage = ({ project }) => (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setActivePage('home')}
            className="text-gray-400 hover:text-white mb-8 flex items-center text-sm font-bold uppercase tracking-widest"
          >
            <ChevronRight className="rotate-180 mr-1 w-4 h-4" /> Back to Home
          </button>
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-6 inline-block">Case Study</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{project.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-10">{project.shortDesc}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">{m.label}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold">{m.value}</p>
                  {m.trend === 'up' ? <TrendingUp className="ml-2 w-5 h-5 text-emerald-500" /> : <TrendingUp className="ml-2 w-5 h-5 text-rose-500 rotate-180" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Main Content */}
          <div className="p-8 md:p-12 space-y-12">

            {/* 1. Problem */}
            <section>
              <div className="flex items-center mb-6">
                <div className="bg-rose-100 p-2 rounded-lg mr-4"><ShieldCheck className="text-rose-600" /></div>
                <h2 className="text-2xl font-bold text-gray-900">The Business Problem</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{project.problem}</p>
            </section>

            {/* 2. Solution */}
            <section>
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-2 rounded-lg mr-4"><Zap className="text-emerald-600" /></div>
                <h2 className="text-2xl font-bold text-gray-900">The Automation Solution</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.solution}</p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center"><Workflow className="w-4 h-4 mr-2" /> Workflow Architecture</h4>
                <div className="space-y-4">
                  {project.architecture.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold mt-1 mr-4 shrink-0">{idx + 1}</div>
                      <p className="text-gray-600 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Tech Stack */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">{tool}</span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="pt-10 border-t border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want a similar system for your business?</h3>
              <p className="text-gray-600 mb-8">Let's hop on a 15-minute call to audit your current manual processes.</p>
              <button onClick={() => setActivePage('contact')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 transition-all">
                Book My Free Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">I sell Outcomes, not just Tools.</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Don't hire a developer. Hire a growth partner who understands business ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all">
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const DocsPage = () => (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">The Framework</span>
            <h2 className="text-4xl font-bold mb-8">Professional Architecture. <br /><span className="text-gray-500">Not YouTube Automation.</span></h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-4"><ShieldCheck className="text-blue-500" /></div>
                <div>
                  <h4 className="font-bold mb-1">Data Security & Encryption</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Everything is built with API security and data privacy as a priority. No plain-text passwords or exposed endpoints.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4"><Database className="text-purple-500" /></div>
                <div>
                  <h4 className="font-bold mb-1">Error Handling & Logging</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Built-in retry logic and error alerting via Slack/Telegram so systems never silently fail.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-600/20 p-2 rounded-lg mr-4"><BarChart3 className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold mb-1">Scalability & Documentation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Workflows are documented for your team so you're never "locked-in" to a single developer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="bg-black/40 rounded-xl p-6 font-mono text-sm space-y-2 overflow-x-auto">
                <p className="text-blue-400">{"{"}</p>
                <p className="pl-4 text-white">"workflow": "Lead_Qualification_v3",</p>
                <p className="pl-4 text-white">"status": <span className="text-emerald-400">"active"</span>,</p>
                <p className="pl-4 text-white">"triggers": ["webhook", "cron"],</p>
                <p className="pl-4 text-white">"security": <span className="text-blue-400">"AES-256"</span>,</p>
                <p className="pl-4 text-white">"retention": "30_days",</p>
                <p className="pl-4 text-blue-400">{"}"}</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's audit your business.</h2>
        <p className="text-xl text-gray-600 mb-12">I'll identify 3 manual processes that you can automate this week to save at least 5 hours/month.</p>

        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full text-white mb-4 shadow-lg shadow-blue-200">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Book a Call</h4>
              <p className="text-gray-600 mb-6">15-minute intro session</p>
              <button className="text-blue-600 font-bold hover:underline">Calendly Link →</button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-500 p-4 rounded-full text-white mb-4 shadow-lg shadow-emerald-200">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">WhatsApp Me</h4>
              <p className="text-gray-600 mb-6">Direct technical chat</p>
              <button className="text-emerald-600 font-bold hover:underline">Launch Chat →</button>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 mb-2">Prefer Email?</p>
            <p className="text-lg font-bold text-gray-900">hello@autoscale.agency</p>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center">
          <div className="bg-blue-600 p-1 rounded-lg mr-2">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">AUTO<span className="text-blue-600">SCALE</span></span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500 font-medium">
          <button onClick={() => setActivePage('home')}>Home</button>
          <button onClick={() => setActivePage('projects')}>Work</button>
          <button onClick={() => setActivePage('docs')}>Methodology</button>
          <button onClick={() => setActivePage('contact')}>Contact</button>
        </div>
        <p className="text-xs text-gray-400">© 2024 AutoScale Agency. Built for ROI.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {activePage === 'home' && (
        <>
          <Hero />
          <ProjectGrid />
          <ServicesPage />
          <DocsPage />
          <ContactPage />
        </>
      )}

      {activePage === 'projects' && (
        <>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-4xl font-extrabold mb-4">The Portfolio</h1>
              <p className="text-gray-600 mb-12">Proof of delivery for real business owners.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS_DATA.map((project) => (
                  <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all flex flex-col p-8">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider self-start mb-6">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-8">{project.shortDesc}</p>
                    <button
                      onClick={() => navigateToProject(project)}
                      className="mt-auto w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all"
                    >
                      Deep Dive Study
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <ContactPage />
        </>
      )}

      {activePage === 'project-detail' && <ProjectDetailPage project={selectedProject} />}

      {activePage === 'services' && (
        <>
          <ServicesPage />
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">How I charge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-xl mb-2">Build-to-Own</h4>
                  <p className="text-gray-500 mb-4">One-time fee for a custom workflow hand-off.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-xl mb-2">Automation Retainer</h4>
                  <p className="text-gray-500 mb-4">Monthly fee for maintenance & continuous improvement.</p>
                </div>
              </div>
            </div>
          </section>
          <ContactPage />
        </>
      )}

      {activePage === 'docs' && <DocsPage />}

      {activePage === 'contact' && <ContactPage />}

      <Footer />
     
    </div>
  );
}