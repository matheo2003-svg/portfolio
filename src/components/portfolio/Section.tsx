import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
              <span className="h-px w-8 bg-primary" /> {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
