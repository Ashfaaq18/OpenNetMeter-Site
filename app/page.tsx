import Image from "next/image";
import type { ElementType } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  Cpu,
  Download,
  Github,
  Monitor,
  Moon,
  Pin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { links } from "@/app/lib/links";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const valuePoints = [
  {
    icon: Cpu,
    title: "See what is using your bandwidth",
    description:
      "Break down your network usage by app and process so you can spot spikes and stop hidden drains.",
  },
  {
    icon: TrendingUp,
    title: "Track usage over time",
    description:
      "Review daily and monthly trends to understand how your connection behaves across the week and month.",
  },
  {
    icon: Pin,
    title: "Keep the essentials in view",
    description:
      "Pin a floating widget over your desktop and retain the real-time readout without interrupting your workflow.",
  },
];

const featureCards = [
  {
    icon: Cpu,
    title: "Per-process monitoring",
    description:
      "See exactly which apps are consuming bandwidth in real time, with clean totals and clear rankings.",
  },
  {
    icon: Calendar,
    title: "History and trends",
    description:
      "Look back across sessions and compare data usage over time with date filters and reporting views.",
  },
  {
    icon: Moon,
    title: "Comfortable dark mode",
    description:
      "Work late or stay focused with a clean low-light interface that keeps the app easy to read.",
  },
  {
    icon: ShieldCheck,
    title: "Built for everyday Windows use",
    description:
      "Stay lightweight, simple, and transparent without the complexity of heavy enterprise monitoring tools.",
  },
];

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 px-4 sm:px-6 bg-linear-to-br from-slate-900 via-slate-800 to-teal-950">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-12">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-5 sm:mb-6 bg-teal-950 text-teal-300 border border-teal-800">
            <Monitor className="w-4 h-4" />
            Free Open Source | Pro Coming Soon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Monitor your network.
            <br />
            <span className="text-peach-400">Own your data.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-xl">
            OpenNetMeter helps you understand exactly how your connection is being used,
            which apps are consuming data, and how your speeds change over time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href={links.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg bg-teal-500 hover:bg-teal-600 text-white transition-all transform hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" />
              Download for Windows
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border border-slate-600 text-slate-200 hover:bg-slate-800 transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              Windows 10/11
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-peach-400" />
              Lightweight
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              Open source
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-peach-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-2xl">
            <Image
              src="/screenshots/features/summary-light.png"
              alt="OpenNetMeter summary dashboard"
              width={1200}
              height={760}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="px-6 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-semibold mb-3">
            Why it matters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Understand your connection without the noise.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {valuePoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6">
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-semibold mb-3">
              Features
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Built to stay useful, not complicated.
            </h2>
          </div>
          <a
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-teal-600 transition-all shadow-lg shadow-slate-950/20"
          >
            Explore the product tour
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-teal-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="px-6 py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">
          <Image
            src="/screenshots/features/history-light.png"
            alt="OpenNetMeter history page"
            width={1200}
            height={760}
            className="w-full h-auto block"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-semibold mb-3">
            Real usage insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See the full story behind your download and upload activity.
          </h2>

          <ul className="space-y-4">
            {[
              "Spot which apps are consuming the most data at any given moment.",
              "Look back at your history to understand long-term usage patterns.",
              "Keep a floating mini-widget visible while you work without leaving the app.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-900">
                  <Check className="w-4 h-4" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-24 bg-linear-to-br from-teal-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-300 font-semibold mb-4">
          Start today
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Make your network usage visible.
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Download OpenNetMeter and take control of your bandwidth with a simple,
          transparent, open-source tool made for Windows users.
        </p>
        <a
          href={links.releases}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-peach-500 hover:bg-peach-600 text-white transition-all transform hover:scale-[1.02]"
        >
          <Download className="w-5 h-5" />
          Download OpenNetMeter
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <Hero />
      <ValueSection />
      <FeatureGrid />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  );
}
