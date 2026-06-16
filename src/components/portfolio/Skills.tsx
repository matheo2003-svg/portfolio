import { Section } from "./Section";
import { Code2, Database, Cloud, Users, Lightbulb, Briefcase } from "lucide-react";

type Skill = { name: string; value: number };
type Category = { label: string; icon: React.ReactNode; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Programming & Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "JavaScript / TypeScript", value: 85 },
      { name: "React & Web Development", value: 88 },
      { name: "Backend APIs & REST", value: 90 },
      { name: "Data Structures & Algorithms", value: 85 },
    ],
  },
  {
    label: "Data Science & AI",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Machine Learning", value: 82 },
      { name: "Generative AI", value: 80 },
      { name: "Data Analysis", value: 88 },
      { name: "Statistical Modeling", value: 85 },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "AWS Services", value: 75 },
      { name: "Microsoft Azure", value: 72 },
      { name: "Docker & Kubernetes", value: 70 },
      { name: "CI/CD Pipelines", value: 75 },
    ],
  },
  {
    label: "Leadership & Management",
    icon: <Users className="h-5 w-5" />,
    skills: [
      { name: "Project Management", value: 92 },
      { name: "Team Leadership", value: 90 },
      { name: "Community Outreach", value: 88 },
      { name: "Strategic Planning", value: 85 },
    ],
  },
  {
    label: "Innovation & Problem Solving",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "Creative Thinking", value: 90 },
      { name: "Solution Architecture", value: 85 },
      { name: "Rapid Prototyping", value: 88 },
      { name: "Hackathon Experience", value: 92 },
    ],
  },
  {
    label: "Business & Soft Skills",
    icon: <Briefcase className="h-5 w-5" />,
    skills: [
      { name: "Communication", value: 90 },
      { name: "Public Speaking", value: 85 },
      { name: "Mentoring", value: 88 },
      { name: "Stakeholder Management", value: 82 },
    ],
  },
];

function SkillBar({ name, value }: Skill) {
  return (
    <div className="group">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-foreground/90">{name}</span>
        <span className="font-mono text-muted-foreground">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 group-hover:shadow-glow"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="glass rounded-2xl p-5 hover-lift flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
          {cat.icon}
        </div>
        <h3 className="font-display font-semibold text-base leading-tight">{cat.label}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4">
        {cat.skills.map(s => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      eyebrow="Skills"
      title="Proficiency at a glance."
      subtitle="A self-assessment of where I'm strongest today."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(cat => (
          <CategoryCard key={cat.label} cat={cat} />
        ))}
      </div>
    </Section>
  );
}