"use client";

import Image from "next/image";
import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

// ============================================
// TYPES
// ============================================
type PinDef = { n: number; x: number; y: number };
type LegendDef = { n: number; title: string; body: string };

// ============================================
// PIN + LEGEND DATA
// Coordinates are % positions within each screenshot,
// tuned against the actual image so a pin sits on the
// control it describes.
// ============================================
const summaryPins: PinDef[] = [
  { n: 1, x: 5.6, y: 3.4 },
  { n: 2, x: 77, y: 2.8 },
  { n: 3, x: 2.2, y: 95.4 },
  { n: 4, x: 6.3, y: 12.6 },
  { n: 5, x: 6.3, y: 30.3 },
  { n: 6, x: 6.3, y: 52.8 },
  { n: 7, x: 9, y: 63 },
  { n: 8, x: 26, y: 12.5 },
  { n: 9, x: 42, y: 17.7 },
  { n: 10, x: 25, y: 21.8 },
  { n: 11, x: 58.3, y: 72.7 },
];

const summaryLegend: LegendDef[] = [
  { n: 1, title: "Tab bar", body: "Switch between live stats, history, and settings instantly — no reload." },
  { n: 2, title: "About", body: "Opens version info and a direct link to file an issue." },
  { n: 3, title: "Status bar", body: "Live download and upload speed, always visible along the bottom edge." },
  { n: 4, title: "Current Session", body: "Tracks how much you've used since the app started — resets on relaunch." },
  { n: 5, title: "Usage From", body: "Pick any start date and see your running total from that point on." },
  { n: 6, title: "Weekly Trend", body: "This week's usage at a glance, with the change against last week." },
  { n: 7, title: "Daily breakdown", body: "Hover any day's bar for its exact download/upload split." },
  { n: 8, title: "Active Processes", body: "Every app using your network right now, refreshed every second." },
  { n: 9, title: "Sortable columns", body: "Click a header to rank apps by current or total usage." },
  { n: 10, title: "Search online", body: "One click to look up what an unfamiliar process is." },
  { n: 11, title: "Speed chart", body: "A rolling real-time graph of your download and upload speed." },
];

const historyPins: PinDef[] = [
  { n: 1, x: 30.5, y: 14.4 },
  { n: 2, x: 48.5, y: 14.4 },
  { n: 3, x: 77, y: 14.4 },
  { n: 4, x: 4.5, y: 24.7 },
  { n: 5, x: 4.5, y: 88.8 },
];

const historyLegend: LegendDef[] = [
  { n: 1, title: "Profile selector", body: "Filter history by network adapter or connection profile." },
  { n: 2, title: "Date range", body: "Look back at usage for up to the last 60 days — older data is purged automatically." },
  { n: 3, title: "Filter", body: "Applies your date range and profile to refresh the table." },
  { n: 4, title: "Sortable headers", body: "Sort historical totals by process name, downloads, or uploads." },
  { n: 5, title: "Totals", body: "Combined download and upload totals for the selected period." },
];

const settingsPins: PinDef[] = [
  { n: 1, x: 4, y: 18.4 },
  { n: 2, x: 4, y: 25.7 },
  { n: 3, x: 4, y: 33 },
  { n: 4, x: 55.5, y: 19.8 },
  { n: 5, x: 55.5, y: 25.7 },
  { n: 6, x: 4, y: 50.5 },
  { n: 7, x: 56.5, y: 50.5 },
  { n: 8, x: 6.5, y: 78 },
  { n: 9, x: 56.5, y: 77.6 },
];

const settingsLegend: LegendDef[] = [
  { n: 1, title: "Startup launch", body: "Have OpenNetMeter running the moment you sign in." },
  { n: 2, title: "Minimize on start", body: "Launch quietly in the background — no window pops up." },
  { n: 3, title: "Dark mode", body: "Switch the whole interface between light and dark instantly." },
  { n: 4, title: "Mini widget toggle", body: "Turn the floating speed overlay on or off." },
  { n: 5, title: "Widget transparency", body: "Fine-tune how see-through the mini widget is." },
  { n: 6, title: "Network scope", body: "Choose whether to track your private network, public traffic, or both." },
  { n: 7, title: "Speed format", body: "Pick the magnitude and unit speeds are shown in." },
  { n: 8, title: "Delete all data", body: "Wipes saved usage history, with a confirmation step first." },
  { n: 9, title: "Updates", body: "Check for and install the latest version in one click." },
];

const widgetPins: PinDef[] = [
  { n: 1, x: 6.5, y: 38 },
  { n: 2, x: 57, y: 38 },
  { n: 3, x: 24, y: 78 },
  { n: 4, x: 96.5, y: 20 },
];

const widgetLegend: LegendDef[] = [
  { n: 1, title: "Download readout", body: "Current download speed, visible without opening the main app." },
  { n: 2, title: "Upload readout", body: "Current upload speed, right beside your download rate." },
  { n: 3, title: "Session totals", body: "A running total for this session sits under each speed." },
  { n: 4, title: "Pin button", body: "Locks the widget on top of every other window." },
  { n: 5, title: "Draggable chrome", body: "Move it anywhere — position is remembered." },
  { n: 6, title: "Right-click menu", body: "Quick access to reopen the full app or hide the widget." },
];

const trayPins: PinDef[] = [
  { n: 1, x: 7, y: 93 },
  { n: 2, x: 8, y: 12 },
  { n: 3, x: 8, y: 30 },
  { n: 4, x: 8, y: 56 },
];

const trayLegend: LegendDef[] = [
  { n: 1, title: "Tray icon", body: "OpenNetMeter keeps running in the background, one click away." },
  { n: 2, title: "Reset window positions", body: "Snap every window back on-screen if one ever drifts off-view." },
  { n: 3, title: "Show Mini Widget", body: "Bring the floating speed widget back from the tray." },
  { n: 4, title: "Open / Exit", body: "Reopen the main window, or fully quit the app." },
];

// ============================================
// COMPONENTS
// ============================================
function Pin({ n, x, y }: PinDef) {
  return (
    <span
      className="absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-peach-500 text-xs font-bold text-slate-900 shadow-lg ring-2 ring-slate-900/80"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {n}
    </span>
  );
}

function LegendList({ items }: { items: LegendDef[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.n} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-peach-500 text-xs font-bold text-slate-900">
            {item.n}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="text-sm leading-relaxed text-slate-400">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ThemeSwitch({ dark, onChange }: { dark: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-800 p-1 text-xs font-semibold">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          !dark ? "bg-peach-500 text-slate-900" : "text-slate-400 hover:text-white"
        }`}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          dark ? "bg-peach-500 text-slate-900" : "text-slate-400 hover:text-white"
        }`}
      >
        Dark
      </button>
    </div>
  );
}

function Shot({
  src,
  alt,
  width,
  height,
  altSrc,
  altAlt,
  showAlt,
  pins,
  minWidth = 640,
  maxWidth,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  altSrc?: string;
  altAlt?: string;
  showAlt?: boolean;
  pins: PinDef[];
  minWidth?: number;
  maxWidth?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-xl bg-slate-800 p-3">
      <div
        className="relative mx-auto overflow-hidden rounded-lg border border-slate-700 bg-white shadow-2xl"
        style={{ minWidth, maxWidth }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full"
          loading="eager"
        />
        {altSrc && (
          <Image
            src={altSrc}
            alt={altAlt ?? alt}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className={`object-cover transition-opacity duration-200 ${
              showAlt ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {pins.map((p) => (
          <Pin key={p.n} n={p.n} x={p.x} y={p.y} />
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400">{eyebrow}</p>
      <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <p className="leading-relaxed text-slate-400">{intro}</p>
    </div>
  );
}

const jumpNavItems = [
  { href: "#summary", label: "Summary" },
  { href: "#history", label: "History" },
  { href: "#settings", label: "Settings" },
  { href: "#widget", label: "Mini Widget" },
  { href: "#tray", label: "Tray" },
];

function JumpNav() {
  return (
    <div className="sticky top-16 z-40 border-b border-slate-800 bg-slate-900/90 px-6 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
        {jumpNavItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function TourHero() {
  return (
    <section className="bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 px-6 pb-12 pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          Every Feature,
          <br />
          <span className="text-peach-400">Explained</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          A closer look at every screen in OpenNetMeter. Numbered markers point at the exact
          control being described — match the number to the callout beside it.
        </p>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function FeaturesPage() {
  const [summaryDark, setSummaryDark] = useState(false);
  const [widgetDark, setWidgetDark] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <TourHero />
      <JumpNav />

      <section id="summary" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="01 / Live view"
            title="Main Window & Summary Tab"
            intro="Everything lives inside one frameless window with its own tab bar and status strip — and the Summary tab is what greets you first: session usage, a weekly trend, and exactly which process is using your bandwidth. Also available in dark mode."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <ThemeSwitch dark={summaryDark} onChange={setSummaryDark} />
              <Shot
                src="/screenshots/features/summary-light.png"
                alt="OpenNetMeter main window, Summary tab, light mode"
                altSrc="/screenshots/features/summary-dark.png"
                altAlt="OpenNetMeter main window, Summary tab, dark mode"
                showAlt={summaryDark}
                width={2100}
                height={1424}
                pins={summaryPins}
              />
            </div>
            <LegendList items={summaryLegend} />
          </div>
        </div>
      </section>

      <section id="history" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="02 / Looking back"
            title="History Tab"
            intro="Filter any date range and see exactly what each app used, per network profile."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/history-light.png"
              alt="OpenNetMeter History tab, light mode"
              width={2100}
              height={1424}
              pins={historyPins}
            />
            <LegendList items={historyLegend} />
          </div>
        </div>
      </section>

      <section id="settings" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="03 / Preferences"
            title="Settings Tab"
            intro="Tune how OpenNetMeter runs, what it watches, and how it looks."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/settings-light.png"
              alt="OpenNetMeter Settings tab, light mode"
              width={1000}
              height={887}
              minWidth={560}
              pins={settingsPins}
            />
            <LegendList items={settingsLegend} />
          </div>
        </div>
      </section>

      <section id="widget" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="04 / Always on top"
            title="Mini Widget"
            intro="A pocket-sized readout that floats over everything else on your desktop, in either theme."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <ThemeSwitch dark={widgetDark} onChange={setWidgetDark} />
              <Shot
                src="/screenshots/features/widget-light.png"
                alt="OpenNetMeter mini widget, light mode"
                altSrc="/screenshots/features/widget-dark.png"
                altAlt="OpenNetMeter mini widget, dark mode"
                showAlt={widgetDark}
                width={650}
                height={110}
                minWidth={320}
                maxWidth={640}
                pins={widgetPins.slice(0, 4)}
              />
              <div className="mt-4 flex flex-col gap-3">
                {widgetLegend.slice(4).map((item) => (
                  <p key={item.n} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-peach-500 text-xs font-bold text-slate-900">
                      {item.n}
                    </span>
                    <span>{item.body}</span>
                  </p>
                ))}
              </div>
            </div>
            <LegendList items={widgetLegend} />
          </div>
        </div>
      </section>

      <section id="tray" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="05 / Background"
            title="System Tray"
            intro="Runs quietly in the background until you need it — right-click the tray icon for quick actions."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/tray-menu-light.png"
              alt="OpenNetMeter tray icon and right-click menu, light mode"
              width={305}
              height={216}
              minWidth={280}
              maxWidth={460}
              pins={trayPins}
            />
            <LegendList items={trayLegend} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
