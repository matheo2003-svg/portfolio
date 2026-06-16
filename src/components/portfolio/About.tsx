
import { Section } from "./Section";
import {
  GraduationCap,
  Rocket,
  Code2,
  Users,
  Brain,
  Database,
  Globe,
} from "lucide-react";
import profile from "@/assets/me.jpeg";

const highlights = [
  {
    icon: GraduationCap,
    label: "BSc Honours in Computer Science & Information Technology (In Progress)",
  },
  {
    icon: Rocket,
    label: "Co-Founder at ML&L Solutions Inc.",
  },
  {
    icon: Code2,
    label: "Software & Web Application Developer",
  },
  {
    icon: Brain,
    label: "AI & Machine Learning Enthusiast",
  },
  {
    icon: Database,
    label: "Backend Development & Database Design",
  },
  {
    icon: Users,
    label: "Tutor & Student Assistant",
  },
  {
    icon: Globe,
    label: "Full-Stack Development & Digital Solutions",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Building technology that solves real-world problems."
    >
      <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
        <div className="flex lg:block justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-primary opacity-30 blur-xl" />
            <img
              src={profile}
              alt="Profile portrait"
              width={260}
              height={320}
              className="relative w-48 h-56 lg:w-[260px] lg:h-[320px] object-cover rounded-2xl glass"
            />
          </div>
        </div>

        <div>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            I am a Computer Science and Statistics graduate with a Bachelor of
            Science in Mathematical Sciences, currently pursuing a Bachelor of
            Science Honours in Computer Science and Information Technology. My
            academic background has provided me with a strong foundation in
            software development, data analysis, problem-solving, and
            technology-driven innovation.
          </p>

          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            I am passionate about designing and developing software solutions
            that solve real-world problems. My interests span software
            engineering, web development, backend systems, databases, cloud
            technologies, artificial intelligence, and emerging technologies. I
            enjoy transforming ideas into scalable, user-focused applications
            that create meaningful impact.
          </p>

          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            As a co-founder of{" "}
            <a
              href="https://www.mlandlsolutions.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              ML&L Solutions Inc
            </a>
            , I work with clients to develop custom software products, web
            applications, and digital solutions tailored to their unique needs.
            Through this experience, I have gained practical expertise in
            project planning, system design, full-stack development, client
            collaboration, and delivering technology solutions in professional
            environments.
          </p>

          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            I am committed to continuous learning and growth, constantly
            exploring new technologies, frameworks, and development practices
            to enhance my skills. My goal is to contribute to innovative
            projects, build impactful digital products, and leverage technology
            to create solutions that improve businesses and communities.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass rounded-xl p-3 flex items-center gap-3 hover-lift"
              >
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

