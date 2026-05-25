import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Briefcase className="h-4 w-4" />
          </span>
          <span>Northwind</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild size="sm" className="bg-[image:var(--gradient-hero)] shadow-[var(--shadow-elegant)] hover:opacity-95">
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
