import { Section } from "./Section";
import { ExternalLink } from "lucide-react";
import client1 from "@/assets/BioNathi.png";
import client2 from "@/assets/emmaceutics.png";

const clients = [
  { name: "BioNathi-Diagnostics", desc: "BioNathi Diagnostics develops accessible, locally-relevant diagnostic technologies — empowering African healthcare systems with the tools to detect, decide and treat sooner.", logo: client1, url: "https://www.bionathi.co.za" },
  { name: "Emmaceutics", desc: "Emmaceutics is pioneering breakthrough research in pharmaceutical development, focused on making life-saving treatments accessible to all through innovative drug formulation and cutting-edge synthesis technologies.", logo: client2, url: "https://www.emmaceuticspharma.co.za" },
];

export function Clients() {
  return (
    <Section id="clients" eyebrow="Client Work" title="Client Websites" subtitle="Selected websites delivered for real businesses under ML&L Solutions Inc.">
      <div className="grid sm:grid-cols-2 gap-6">
        {clients.map(c => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl overflow-hidden hover-lift flex flex-col"
          >
            {/* Logo hero — big, white-card area */}
            <div className="relative bg-white flex items-center justify-center p-10 min-h-52">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="w-full max-w-[220px] max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* External link badge top-right */}
              <span className="absolute top-3 right-3 bg-black/5 group-hover:bg-primary/10 rounded-full p-1.5 transition-colors">
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </span>
            </div>

            {/* Text content below logo */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-lg font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground flex-1">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Visit website
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}