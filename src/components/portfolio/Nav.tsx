import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-glow" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">{"</>"}</span>
            <span className="text-gradient">MATHEO Chauke</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Let's talk
          </a>
          <button onClick={() => setOpen(v => !v)} className="md:hidden text-foreground p-2" aria-label="Menu">
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3 animate-fade-up">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
