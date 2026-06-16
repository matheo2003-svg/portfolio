import { useEffect, useState } from "react";
import { Section } from "./Section";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import glide1 from "@/assets/GlideConnex/img1.png";
import glide2 from "@/assets/GlideConnex/img2.png";
import glide3 from "@/assets/GlideConnex/img3.png";
import glide4 from "@/assets/GlideConnex/img4.png";
import glide5 from "@/assets/GlideConnex/img5.png";
import glide6 from "@/assets/GlideConnex/img6.png";
import glide7 from "@/assets/GlideConnex/img7.png";
import glide8 from "@/assets/GlideConnex/img8.png";
import glide9 from "@/assets/GlideConnex/img9.png";

import cyber1 from "@/assets/CyberIntel/cyber1.png";
import cyber2 from "@/assets/CyberIntel/cyber2.png";
import cyber3 from "@/assets/CyberIntel/cyber3.png";
import cyber4 from "@/assets/CyberIntel/cyber4.png";
import cyber5 from "@/assets/CyberIntel/cyber5.png";

import video from "@/assets/video.mp4";

type Project = {
  title: string;
  description: string;
  tech: string[];
  contributions: string[];
  link?: string;
  media: { kind: "video" | "images"; src?: string; images?: string[] };
};

const projects: Project[] = [
  {
    title: "Learning Management System",
    description:
      "Lift LMS - A Learning Management System developed to manage students, courses, learning materials, assessments, and educational workflows.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT Auth", "WebSockets", "Zoom Integration"],
    contributions: [
      "System architecture",
      "Database design",
      "Backend & frontend development",
      "Zoom integration for live classes",
    ],
    link: "https://lift-auth.mlandlsolutions.co.za",
    media: { kind: "video", src: video },
  },
  // {
  //   title: "Serverless Contract Management System",
  //   description:
  //     "A digital contract generation and management platform developed for a tutoring organization.",
  //   tech: ["JavaScript", "Serverless", "Cloud Services"],
  //   contributions: [
  //     "System design",
  //     "Backend logic",
  //     "Contract workflow automation",
  //     "Data management",
  //   ],
  //   media: { kind: "video" },
  // },
  {
    title: "GlideConnex - Final year project",
    description:
      "A university transport management platform that enables students to book transport between residences and campus, while providing administrators with tools to manage the number of buses deployed to residences.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB", "Websockets", "JWT authentication", "OpenAI integration", "REST APIs"],
    contributions: ["System architecture", "Backend development", "AI integration", "Database design", "Real-time communication"],
    media: { kind: "images", images: [glide1, glide2, glide3, glide4, glide5, glide6, glide7, glide8, glide9] },
  },
  {
    title: "CyberIntel - Cybersecurity Incident Management System",
    description:
      "A full-stack cybersecurity incident management system that enables security analysts to record, track, and analyse threats in real time. Features JWT-secured authentication, role-based access control, interactive dashboards with live charts, full CRUD incident management, and an AI-powered threat prediction engine built with PyTorch.",
    tech: ["Angular 19", "Tailwind CSS", "TypeScript", "Spring Boot", "MySQL", "PyTorch", "Python", "Flask", "NumPy"],
    contributions: ["Everything - sole developer", "System architecture", "Frontend development", "Backend development", "AI model training and integration", "Database design"],
    media: { kind: "images", images: [cyber1, cyber2, cyber3, cyber4, cyber5] },
  },
];

function CardSlideshow({ images }: { images: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ aspectRatio: "4/3" }}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={(e) => { e.preventDefault(); setI((i - 1 + images.length) % images.length); }}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full glass hover:bg-primary/30"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.preventDefault(); setI((i + 1) % images.length); }}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full glass hover:bg-primary/30"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => { e.preventDefault(); setI(idx); }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-5 bg-primary" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function VideoPreview({ src }: { src?: string }) {
  if (src) {
    return (
      <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ aspectRatio: "16/9" }}>
        <video
          controls
          src={src}
          className="absolute inset-0 h-full w-full object-contain"
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
      style={{ aspectRatio: "16/9" }}
    >
      <div className="text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
          <Play className="h-5 w-5 ml-0.5" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Demo video coming soon</p>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="glass rounded-2xl overflow-hidden hover-lift flex flex-col">
      {/* Media — flush to the card edges, no padding around it */}
      <div className="w-full">
        {p.media.kind === "video"
          ? <VideoPreview src={p.media.src} />
          : <CardSlideshow images={p.media.images!} />}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold">
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Technologies</div>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map(t => (
              <span key={t} className="rounded-md bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">My Contributions</div>
          <ul className="grid sm:grid-cols-2 gap-x-3 gap-y-1">
            {p.contributions.map(c => (
              <li key={c} className="text-sm text-foreground/90 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary flex-none" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Projects I've shipped."
      subtitle="A look at the systems I've architected and developed."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </Section>
  );
}