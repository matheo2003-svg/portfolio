import profile from "@/assets/me.jpeg";
import cv from "@/assets/Matheo_Chauke_CV.pdf";
import { ArrowDown, Download, Mail, FolderGit2 } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "linear-gradient(oklch(0.95 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
        }} /> 
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Matheo Chauke</span>
            <br />
            <span className="text-foreground/90">I build software</span><br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">that solves real problems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Software Engineer & Co-Founder at <span className="text-foreground font-medium">
              <a
              href="https://www.mlandlsolutions.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              ML&L Solutions Inc
            </a>
            </span> — building web apps,
            LMS platforms, serverless tools, and backend APIs for real-world businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={cv} download className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover-lift">
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-surface transition">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-display font-bold text-foreground">6+</div>Projects shipped</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">3+</div>Client websites</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display font-bold text-foreground">2+</div>Years building</div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="relative rounded-3xl glass p-3 shadow-glow">
              <img src={profile} alt="Portrait" width={1024} height={1024}
                className="w-full aspect-square object-cover rounded-2xl" />
              
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition" aria-label="Scroll">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
