import { useState } from "react";
const WHATSAPP_NUMBER = "917331120829"; // +91 73311 20829, no symbols, per wa.me format
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export default function WhatsAppButton() {
    const [hovered, setHovered] = useState(false);
    return (<div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setHovered(true)} onBlur={() => setHovered(false)} className="wa-fab group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16">
        {/* Pulsing ring */}
        <span className="wa-pulse pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"/>

        {/* Official WhatsApp glyph */}
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.646 4.47 1.77 6.312L4 29l7.86-1.73A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.665 1.027 1.02-4.55-.232-.365A9.68 9.68 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75Zm5.62-7.36c-.307-.154-1.816-.897-2.098-1-.28-.103-.484-.154-.688.154-.204.307-.79 1-.97 1.205-.178.205-.357.23-.663.077-.307-.154-1.296-.478-2.47-1.523-.913-.814-1.53-1.82-1.708-2.127-.178-.307-.019-.473.135-.626.138-.137.307-.358.46-.537.154-.18.205-.307.307-.512.103-.205.051-.384-.026-.538-.077-.154-.688-1.658-.943-2.27-.248-.596-.5-.516-.688-.526l-.586-.01c-.204 0-.537.077-.818.384-.28.307-1.07 1.045-1.07 2.548s1.096 2.955 1.25 3.16c.153.204 2.155 3.29 5.222 4.613.73.315 1.298.503 1.742.644.732.233 1.398.2 1.925.121.587-.088 1.816-.742 2.072-1.46.256-.717.256-1.332.18-1.46-.077-.128-.281-.205-.588-.358Z"/>
        </svg>

        {/* Tooltip */}
        <span role="tooltip" className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white shadow-soft transition-all duration-200 ${hovered ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0"}`}>
          Chat with us on WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink"/>
        </span>
      </a>

      <style jsx>{`
        .wa-pulse {
          animation: wa-pulse 2.4s ease-out infinite;
        }
        @keyframes wa-pulse {
          0% {
            opacity: 0.55;
            transform: scale(1);
          }
          70% {
            opacity: 0;
            transform: scale(1.9);
          }
          100% {
            opacity: 0;
            transform: scale(1.9);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>);
}
