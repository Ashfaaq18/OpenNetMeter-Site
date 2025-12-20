import Image from 'next/image'
import { Activity, Pin, BarChart3, Calendar, Download, Github, Monitor, Cpu, Clock } from 'lucide-react'

// ============================================
// LINKS CONFIG - Update these as needed
// ============================================
const links = {
  github: 'https://github.com/Ashfaaq18/OpenNetMeter',
  releases: 'https://github.com/Ashfaaq18/OpenNetMeter/releases',
  author: 'https://github.com/Ashfaaq18',
}

// ============================================
// FEATURE DATA
// ============================================
const features = [
  {
    icon: Pin,
    title: 'Mini Widget Window',
    description: 'Always-on-top floating widget that you can pin anywhere on your screen. Monitor your network at a glance without interrupting your workflow.',
  },
  {
    icon: Cpu,
    title: 'Per-Process Monitoring',
    description: 'See exactly which applications are consuming your bandwidth. Identify data-hungry programs and take control of your network usage.',
  },
  {
    icon: Calendar,
    title: '3-Month History',
    description: 'Access up to 3 months of detailed usage history. Select any date range to analyze per-process data consumption over time.',
  },
]

// ============================================
// COMPONENTS
// ============================================
function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="OpenNetMeter" width={32} height={32} />
          <span className="font-bold text-lg text-white">OpenNetMeter</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block">
            Features
          </a>
          <a href="#screenshots" className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block">
            Screenshots
          </a>
          <a
            href={links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-teal-500 hover:bg-teal-600 text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 bg-teal-950 text-teal-300 border border-teal-800">
          <Monitor className="w-4 h-4" />
          Free & Open Source
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Monitor Your Network.
          <br />
          <span className="text-peach-400">Own Your Data.</span>
        </h1>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          A simple program to monitor your network/data usage.
          <br />
          <span className="text-slate-400">Made for the average Windows user.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-teal-500 hover:bg-teal-600 text-white transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download for Windows
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-all"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            Windows 10/11
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-peach-400"></div>
            Lightweight
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            No Ads
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 transition-all hover:scale-105 hover:border-teal-700">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-teal-950">
        <Icon className="w-6 h-6 text-teal-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to
            <span className="text-teal-400"> Track Your Network</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Simple, powerful, and designed for everyday users. No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 transition-all hover:scale-[1.02] hover:border-teal-700">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-auto"
      />
    </div>
  )
}

function Screenshots() {
  return (
    <section id="screenshots" className="py-24 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See It In
            <span className="text-peach-400"> Action</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Clean interface designed for clarity and ease of use.
          </p>
        </div>

        {/* Main dashboard - hero screenshot */}
        <div className="mb-8 max-w-4xl mx-auto">
          <p className="text-slate-400 text-sm mb-3 text-center">Main Dashboard</p>
          <Screenshot src="/screenshots/main_page.png" alt="OpenNetMeter Main Dashboard" />
        </div>

        {/* Two column grid: History and Dark Mode */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-slate-400 text-sm mb-3 text-center">History View</p>
            <Screenshot src="/screenshots/history_page.png" alt="OpenNetMeter History Page" />
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-3 text-center">Dark Mode</p>
            <Screenshot src="/screenshots/darkmode_main_page.png" alt="OpenNetMeter Dark Mode" />
          </div>
        </div>

        {/* Mini widget - centered and smaller */}
        <div className="max-w-s mx-auto">
          <p className="text-slate-400 text-sm mb-3 text-center">Mini Widget (Always on Top)</p>
          <Screenshot src="/screenshots/miniwidget.png" alt="OpenNetMeter Mini Widget" />
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-teal-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Take Control?</h2>
        <p className="text-slate-300 mb-8 text-lg">
          Download OpenNetMeter today. It's free, open source, and always will be.
        </p>
        <a
          href={links.releases}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-peach-500 hover:bg-peach-600 text-white transition-all transform hover:scale-105"
        >
          <Download className="w-5 h-5" />
          Download Now
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="OpenNetMeter" width={32} height={32} />
          <span className="font-bold text-lg text-white">OpenNetMeter</span>
        </div>
        <div className="text-slate-500 text-sm">
          Made with ♥ by{' '}
          <a href={links.author} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            Ashfaaq
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
      <Footer />
    </main>
  )
}