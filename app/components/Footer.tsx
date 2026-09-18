import Image from "next/image";
import { Github } from "lucide-react";
import { links } from "@/app/lib/links";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2 md:flex-1 md:justify-start">
          <Image src="/logo.png" alt="OpenNetMeter" width={32} height={32} />
          <span className="font-bold text-lg text-white">OpenNetMeter</span>
        </div>
        <div className="text-slate-500 text-sm md:flex-1 md:text-center">
          Made with ♥ by{" "}
          <a
            href={links.author}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            Ashfaaq
          </a>
        </div>
        <div className="flex items-center gap-4 md:flex-1 md:justify-end">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
