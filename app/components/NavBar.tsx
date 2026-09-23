import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { links } from "@/app/lib/links";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image src="/logo.png" alt="OpenNetMeter" width={32} height={32} />
          <span className="font-bold text-base sm:text-lg text-white truncate">OpenNetMeter</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-8">
          <Link
            href="/features"
            className="inline-flex items-center rounded-lg px-2 py-2 text-xs text-slate-300 hover:text-white transition-colors sm:block sm:rounded-none sm:px-0 sm:py-0 sm:text-sm"
          >
            Product Tour
          </Link>
          <a
            href={links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm bg-teal-500 hover:bg-teal-600 text-white transition-colors sm:px-4"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
