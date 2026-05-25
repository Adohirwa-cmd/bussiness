import { Link } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-[image:var(--gradient-hero)] lg:flex">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur">
              <Briefcase className="h-4 w-4" />
            </span>
            Northwind
          </Link>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight">
              Built for teams that move<br />the business forward.
            </h2>
            <p className="max-w-md text-sm text-primary-foreground/80">
              Manage clients, pipelines and revenue in one streamlined workspace trusted by 3,000+ growing companies.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-background p-6 sm:p-10">
        <div className="w-full max-w-md space-y-8">
          <Link to="/" className="flex items-center gap-2 font-semibold lg:hidden">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Briefcase className="h-4 w-4" />
            </span>
            Northwind
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
          <p className="text-center text-sm text-muted-foreground">{footer}</p>
        </div>
      </div>
    </div>
  );
}
