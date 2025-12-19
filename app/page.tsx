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
          <Activity className="w-6 h-6 text-teal-400" />
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

function ScreenshotPlaceholder({ title, aspectRatio = 'aspect-video' }: { title: string; aspectRatio?: string }) {
  return (
    <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
      <div className={`${aspectRatio} flex items-center justify-center bg-gradient-to-br from-slate-800 to-teal-950/40`}>
        <div className="text-center">
          <Monitor className="w-12 h-12 mx-auto mb-3 text-slate-600" />
          <p className="text-slate-500 text-sm">{title}</p>
          <p className="text-slate-600 text-xs mt-1">Screenshot placeholder</p>
        </div>
      </div>
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

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ScreenshotPlaceholder title="Main Dashboard" />
          <ScreenshotPlaceholder title="Mini Widget (Always on Top)" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ScreenshotPlaceholder title="Per-Process View" aspectRatio="aspect-[4/3]" />
          <ScreenshotPlaceholder title="History & Analytics" aspectRatio="aspect-[4/3]" />
          <ScreenshotPlaceholder title="Settings" aspectRatio="aspect-[4/3]" />
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
          <Activity className="w-5 h-5 text-teal-400" />
          <span className="text-slate-400">OpenNetMeter</span>
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