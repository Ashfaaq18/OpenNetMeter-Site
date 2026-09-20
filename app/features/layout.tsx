import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - OpenNetMeter",
  description:
    "An annotated tour of every screen in OpenNetMeter — the Summary tab, History, Settings, the mini widget, and the system tray.",
  openGraph: {
    title: "Features - OpenNetMeter",
    description:
      "An annotated tour of every screen in OpenNetMeter — the Summary tab, History, Settings, the mini widget, and the system tray.",
    url: "https://opennetmeter.com/features",
    siteName: "OpenNetMeter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - OpenNetMeter",
    description:
      "An annotated tour of every screen in OpenNetMeter — the Summary tab, History, Settings, the mini widget, and the system tray.",
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
