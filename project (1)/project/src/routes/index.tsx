import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, BarChart3, Shield, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwind — The modern workspace for growing businesses" },
      { name: "description", content: "Manage clients, pipelines and revenue in one streamlined workspace." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(ellipse_at_top,oklch(0.94_0.04_260),transparent_60%)]" />
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
              <Sparkles className="h-3 w-3 text-primary" /> New — AI-powered reports
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              The modern workspace for <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">growing businesses</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Northwind brings your clients, pipelines, and revenue into one elegant workspace — so your team can focus on what actually moves the business.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-[image:var(--gradient-hero)] shadow-[var(--shadow-elegant)] hover:opacity-95">
                <Link to="/register">Start free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 bg-secondary/40">
        <div className="container mx-auto grid gap-8 px-4 py-20 md:grid-cols-3">
          {[
            { icon: Users, title: "Unified CRM", desc: "Every client interaction in one timeline." },
            { icon: BarChart3, title: "Live analytics", desc: "Real-time revenue and pipeline insights." },
            { icon: Shield, title: "Enterprise security", desc: "SOC 2, SSO and granular roles built-in." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Northwind, Inc.</p>
          <div className="flex gap-6">
            <Link to="/login">Log in</Link>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
