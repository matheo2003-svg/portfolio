import { Section } from "./Section";
import { Briefcase, Check } from "lucide-react";

const experiences = [
{
title: "Co-Founder & Software Developer",
company: "ML&L Solutions Inc.",
period: "Present",
items: [
"Developed custom websites for clients",
"Designed and developed backend APIs",
"Built business software solutions",
"Worked with databases and deployment",
"Managed software projects from planning to deployment",
"Collaborated using Git and GitHub workflows",
],
},
{
title: "Student Assistant / Developer",
company: "Sefako Makgatho Health Sciences University ICT - Business Applications",
period: "Present",
items: [
"Developed business applications using Microsoft Power Platform",
"Assisted in designing and maintaining internal university solutions",
"Worked with Power Apps, Power Automate, and related Microsoft technologies",
"Collaborated with ICT teams to improve business processes",
"Provided technical support and assistance to users",
"Participated in application testing, deployment, and maintenance",
],
},
];

export function Experience() {
return ( <Section
   id="experience"
   eyebrow="Experience"
   title="Where I've been shipping."
 > <div className="relative"> <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />


    <div className="space-y-8">
      {experiences.map((experience) => (
        <div key={experience.title} className="pl-12 relative">
          <span className="absolute left-0 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
            <Briefcase className="h-4 w-4" />
          </span>

          <div className="glass rounded-2xl p-6 sm:p-8 hover-lift">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {experience.title}
                </h3>
                <p className="text-primary font-medium">
                  {experience.company}
                </p>
              </div>

              <span className="text-xs text-muted-foreground font-mono">
                {experience.period}
              </span>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {experience.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

//vhjjjjj
);
}
