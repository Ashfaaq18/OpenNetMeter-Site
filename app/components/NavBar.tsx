import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { links } from "@/app/lib/links";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="OpenNetMeter" width={32} height={32} />
          <span className="font-bold text-lg text-white">OpenNetMeter</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/features"
            className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block"
          >
            Features
          </Link>
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
  );
}
