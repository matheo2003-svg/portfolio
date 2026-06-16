import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["C++", "Java", "JavaScript" ,"PHP", "SQL", "Python"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs","Spring Boot"] },
  { title: "Databases", items: ["Oracle","PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub"] },
  { title: "Deployment", items: ["aws ec2 instance", "AWS S3 and CloudFront"] },
];

export function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech Stack" title="Tools I build with." subtitle="The technologies I reach for daily across the stack.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(g => (
          <div key={g.title} className="glass rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              <span className="text-xs text-muted-foreground">{g.items.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-sm font-mono text-foreground/90 hover:border-primary/60 hover:text-primary transition-colors">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
