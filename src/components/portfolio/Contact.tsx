import { Section } from "./Section";
import { Mail, User, Globe, Lock } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "matheowisani2@gmail.com",
    href: "mailto:matheowisani2@gmail.com",
    note: null,
  },
  {
    icon: User,
    label: "LinkedIn",
    value: "linkedin.com/in/matheochauke",
    href: "https://linkedin.com/in/matheochauke",
    note: null,
  },
  {
    icon: Globe,
    label: "GitHub",
    value: "github.com/matheo2003-svg",
    href: "https://github.com/matheo2003-svg",
    note: "Most repositories I've contributed to are private due to client and organizational confidentiality.",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      subtitle="Open to graduate programs, software engineering roles, and freelance work."
    >
      <div className="mx-auto max-w-xl flex flex-col gap-4">
        {contacts.map(({ icon: Icon, label, value, href, note }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl p-6 hover-lift flex flex-col gap-3"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{label}</div>
                <div className="font-medium truncate group-hover:text-primary transition">{value}</div>
              </div>
            </div>

            {note && (
              <div className="flex items-start gap-2.5 rounded-xl bg-surface/60 border border-border px-4 py-3">
                <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </Section>
  );
}