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
  { n: 1, x: 6.6, y: 4.6 },
  { n: 2, x: 80.6, y: 2.9 },
  { n: 3, x: 2.2, y: 97.2 },
  { n: 4, x: 3.7, y: 13.1 },
  { n: 5, x: 3.7, y: 31.4 },
  { n: 6, x: 3.7, y: 54.6 },
  { n: 7, x: 10, y: 63.7 },
  { n: 8, x: 28.1, y: 13.4 },
  { n: 9, x: 66.1, y: 13.4 },
  { n: 10, x: 61.7, y: 19.2 },
  { n: 11, x: 27.7, y: 23.3 },
  { n: 12, x: 40, y: 76.6 },
];

const summaryLegend: LegendDef[] = [
  { n: 1, title: "Tab bar", body: "Switch between live stats, history, and settings instantly — no reload." },
  { n: 2, title: "About", body: "Opens version info and a direct link to file an issue." },
  { n: 3, title: "Status bar", body: "Live download and upload speed, plus the adapter being counted — the dot turns green while it's active." },
  { n: 4, title: "Current Session", body: "Tracks how much you've used since the app started — resets on relaunch." },
  { n: 5, title: "Usage From", body: "Pick any start date and see your running total from that point on." },
  { n: 6, title: "Weekly Trend", body: "This week's usage at a glance, with the change against last week." },
  { n: 7, title: "Daily breakdown", body: "Hover any day's bar for its exact download/upload split." },
  { n: 8, title: "Active Processes", body: "Every app using your network right now, refreshed every second." },
  { n: 9, title: "Record", body: "Start a recording to capture per-app usage until you press Stop. The header shows elapsed time and running totals." },
  { n: 10, title: "Sortable columns", body: "Click a header to rank apps by current or total usage." },
  { n: 11, title: "Search online", body: "One click to look up what an unfamiliar process is." },
  { n: 12, title: "Speed chart", body: "A rolling real-time graph of your download and upload speed." },
];

const recordingPins: PinDef[] = [
  { n: 1, x: 57.5, y: 20 },
  { n: 2, x: 42, y: 24.7 },
  { n: 3, x: 28, y: 30.3 },
  { n: 4, x: 59.6, y: 83.7 },
  { n: 5, x: 85, y: 13.4 },
];

const recordingLegend: LegendDef[] = [
  { n: 1, title: "Time and adapters", body: "Start and end time, duration, and every network adapter seen while recording." },
  { n: 2, title: "Totals", body: "Download and upload for the whole recording, counted the same way as the live view." },
  { n: 3, title: "Per-app breakdown", body: "What each app used during the recording, largest first." },
  { n: 4, title: "Export", body: "Save the recording as CSV, JSON or a self-contained HTML report." },
  { n: 5, title: "Last result", body: "Reopen the last recording any time until you start a new one or close the app." },
];

const historyPins: PinDef[] = [
  { n: 1, x: 35.8, y: 14.9 },
  { n: 2, x: 43.3, y: 14.8 },
  { n: 3, x: 74.5, y: 14.9 },
  { n: 4, x: 83.2, y: 14.9 },
  { n: 5, x: 44, y: 20.6 },
  { n: 6, x: 9.1, y: 28.4 },
  { n: 7, x: 8.0, y: 89.9 },
];

const historyLegend: LegendDef[] = [
  { n: 1, title: "Profile selector", body: "Pick which network adapter or connection profile to look at." },
  { n: 2, title: "Date range", body: "Any range within your history retention: 60 days by default, up to forever (set it in Settings)." },
  { n: 3, title: "Filter", body: "Applies your date range and profile to refresh the table." },
  { n: 4, title: "Export", body: "Save the selected profile and range as CSV, JSON or a self-contained HTML report." },
  { n: 5, title: "Last filtered", body: "Shows which profile and time the table was last loaded for." },
  { n: 6, title: "Sortable headers", body: "Sort historical totals by process name, downloads, or uploads." },
  { n: 7, title: "Totals", body: "Combined download and upload totals for the selected period." },
];

const reportPins: PinDef[] = [
  { n: 1, x: 15.8, y: 13.3 },
  { n: 2, x: 59.5, y: 14.5 },
  { n: 3, x: 10.8, y: 28.1 },
  { n: 4, x: 14.5, y: 42.6 },
  { n: 5, x: 88.5, y: 38.7 },
];

const reportLegend: LegendDef[] = [
  { n: 1, title: "Report summary", body: "The profile and date range the report covers." },
  { n: 2, title: "Totals", body: "Download and upload for the whole period." },
  { n: 3, title: "By process", body: "Every app's usage for the period, largest first. A By day table follows further down." },
  { n: 4, title: "Per-day breakdown", body: "Click a process to expand its usage day by day." },
  { n: 5, title: "Share bars", body: "How much of the total each app accounts for." },
];

const settingsPins: PinDef[] = [
  { n: 1, x: 40, y: 18.4 },
  { n: 2, x: 40, y: 26.1 },
  { n: 3, x: 40, y: 33.9 },
  { n: 4, x: 89.2, y: 18.4 },
  { n: 5, x: 71.2, y: 27.3 },
  { n: 6, x: 72.7, y: 36.9 },
  { n: 7, x: 22, y: 60.3 },
  { n: 8, x: 23.6, y: 69.9 },
  { n: 9, x: 16.8, y: 79.3 },
  { n: 10, x: 81, y: 59.5 },
  { n: 11, x: 81, y: 67.4 },
  { n: 12, x: 81, y: 76 },
  { n: 13, x: 76.8, y: 89.7 },
];

const settingsLegend: LegendDef[] = [
  { n: 1, title: "Startup launch", body: "Have OpenNetMeter running the moment you sign in." },
  { n: 2, title: "Minimize on start", body: "Launch quietly in the background — no window pops up." },
  { n: 3, title: "Dark mode", body: "Switch the whole interface between light and dark instantly." },
  { n: 4, title: "Mini widget toggle", body: "Turn the floating speed overlay on or off." },
  { n: 5, title: "Widget transparency", body: "Fine-tune how see-through the mini widget is." },
  { n: 6, title: "Widget total", body: "Count the widget's total for this session, or since a date you choose." },
  { n: 7, title: "Network adapter", body: "Automatic follows the adapter Windows routes internet traffic through, so full-tunnel VPNs are counted per app. Or pin one adapter." },
  { n: 8, title: "Network scope", body: "Choose whether to track your private network, public traffic, or both." },
  { n: 9, title: "Speed format", body: "Pick the magnitude and unit speeds are shown in." },
  { n: 10, title: "History retention", body: "Keep daily usage for 60 days, 180 days, a year, or forever." },
  { n: 11, title: "Export usage data", body: "Save all stored history as CSV, JSON or an HTML report." },
  { n: 12, title: "Delete usage history", body: "Wipes saved usage history, with a confirmation step first." },
  { n: 13, title: "About & updates", body: "App version, GitHub and privacy policy links, and a one-click update check." },
];

const widgetPins: PinDef[] = [
  { n: 1, x: 6.2, y: 49.1 },
  { n: 2, x: 50.2, y: 49.1 },
  { n: 3, x: 18, y: 75 },
  { n: 4, x: 93.8, y: 30.9 },
];

const widgetLegend: LegendDef[] = [
  { n: 1, title: "Download readout", body: "Current download speed, visible without opening the main app." },
  { n: 2, title: "Upload readout", body: "Current upload speed, right beside your download rate." },
  { n: 3, title: "Totals", body: "The total under each speed counts this session, or usage since a date you pick." },
  { n: 4, title: "Pin button", body: "Locks the widget on top of every other window." },
  { n: 5, title: "Draggable chrome", body: "Move it anywhere — position is remembered." },
  { n: 6, title: "Right-click menu", body: "Reopen the full app, hide the widget, or switch the total between this session and a date." },
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
      className="absolute z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-peach-500 text-[10px] font-bold text-slate-900 shadow-lg ring-2 ring-slate-900/80"
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
  minWidth,
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
        style={{ minWidth, maxWidth, width: "100%" }}
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
  { href: "#recording", label: "Recording" },
  { href: "#history", label: "History" },
  { href: "#report", label: "Report" },
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
  const [reportDark, setReportDark] = useState(false);
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
            intro="Everything lives inside one frameless window with its own tab bar and status strip — and the Summary tab is what greets you first: session usage, a weekly trend, exactly which process is using your bandwidth, and a Record button for capturing any stretch of time. Also available in dark mode."
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
                width={1000}
                height={725}
                pins={summaryPins}
              />
            </div>
            <LegendList items={summaryLegend} />
          </div>
        </div>
      </section>

      <section id="recording" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="02 / Capture a moment"
            title="Traffic Recording"
            intro="Press Record before a download, game or video call, then Stop to see exactly what each app used in between. A recording keeps running across reconnects and adapter switches."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/recording-light.png"
              alt="OpenNetMeter traffic recording results, light mode"
              width={1000}
              height={725}
              pins={recordingPins}
            />
            <LegendList items={recordingLegend} />
          </div>
        </div>
      </section>

      <section id="history" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="03 / Looking back"
            title="History Tab"
            intro="Filter any date range and see exactly what each app used, per network profile — then export it."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/history-light.png"
              alt="OpenNetMeter History tab, light mode"
              width={1000}
              height={725}
              pins={historyPins}
            />
            <LegendList items={historyLegend} />
          </div>
        </div>
      </section>

      <section id="report" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="04 / Share it"
            title="HTML Report"
            intro="Export from History, Settings or a recording as a single offline HTML file. No scripts and no external requests, so it opens anywhere and is safe to share. It follows your light or dark theme and prints cleanly."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <ThemeSwitch dark={reportDark} onChange={setReportDark} />
              <Shot
                src="/screenshots/features/html-report-light.png"
                alt="OpenNetMeter HTML usage report, light mode"
                altSrc="/screenshots/features/html-report-dark.png"
                altAlt="OpenNetMeter HTML usage report, dark mode"
                showAlt={reportDark}
                width={2000}
                height={1720}
                pins={reportPins}
              />
            </div>
            <LegendList items={reportLegend} />
          </div>
        </div>
      </section>

      <section id="settings" className="scroll-mt-32 border-t border-slate-800 bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="05 / Preferences"
            title="Settings Tab"
            intro="Tune how OpenNetMeter runs, what it watches, and how it looks."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/settings-light.png"
              alt="OpenNetMeter Settings tab, light mode"
              width={1000}
              height={950}
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
            eyebrow="06 / Always on top"
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
                width={325}
                height={55}
                minWidth={300}
                maxWidth={480}
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
            eyebrow="07 / Background"
            title="System Tray"
            intro="Runs quietly in the background until you need it — right-click the tray icon for quick actions."
          />
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Shot
              src="/screenshots/features/tray-menu-light.png"
              alt="OpenNetMeter tray icon and right-click menu, light mode"
              width={305}
              height={216}
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
