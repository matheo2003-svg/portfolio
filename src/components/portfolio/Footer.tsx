import { Mail, User, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-display font-bold text-lg text-gradient">MATHEO'S Portfolio</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">Software Engineer & Co-Founder at ML&amp;L Solutions Inc.</p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Navigate</div>
          <ul className="grid grid-cols-2 gap-y-1.5 text-muted-foreground">
            {["About","Stack","Experience","Projects","Clients","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="text-sm sm:text-right">
          <div className="font-medium mb-3">Connect</div>
          <div className="flex gap-3 sm:justify-end">
            {[
              { icon: User, href: "https://github.com/matheo2003-svg", label: "GitHub" },
              { icon: Globe, href: "https://linkedin.com/in/matheochauke", label: "LinkedIn" },
              { icon: Mail, href: "mailto:matheowisani2@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-primary/20 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} MATHEO Chauke. All rights reserved.</span>
          <span>Built with React & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
