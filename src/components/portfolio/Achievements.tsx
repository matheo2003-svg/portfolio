import { Section } from "./Section";
import { Award, Globe, Server, GraduationCap, Users, BookOpen } from "lucide-react";

const items = [
  { icon: Award, title: "Co-Founder, ML&L Solutions Inc.", body: "Building software & services as a company founder." },
  { icon: Globe, title: "Client Websites", body: "Delivered production websites for paying clients." },
  { icon: Server, title: "Student Assistant/Developer", body: "Engineered internal tools & automations for ICT- business applications at Sefako Makgatho Health Sciences University using Power Platform tools  ." },
  { icon: GraduationCap, title: "Learning Management Systems", body: "Architected LMS with auth, courses & assessments." },
  { icon: Users, title: "Student Assistant", body: "Programming practicals mentor at university." },
  { icon: BookOpen, title: "Tutored C++, Data Structures in c++, HTML & CSS", body: "Helped students grasp core programming concepts." },
];

export function Achievements() {
  return (
    <Section eyebrow="Highlights" title="Featured Achievements">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="relative glass rounded-2xl p-6 hover-lift overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl" />
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
