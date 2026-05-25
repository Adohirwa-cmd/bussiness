import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Northwind" }] }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user.email ?? null);
      if (!session) navigate({ to: "/login" });
    });
    supabase.auth.getSession().then(({ data }) => {
      setEmail(data.session?.user.email ?? null);
      setChecking(false);
      if (!data.session) navigate({ to: "/login" });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  if (checking) return null;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-10 shadow-[var(--shadow-card)]">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome to Northwind</h1>
          <p className="mt-2 text-muted-foreground">Signed in as {email}</p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={async () => {
              await supabase.auth.signOut();
              toast.success("Signed out");
              navigate({ to: "/" });
            }}
          >
            Sign out
          </Button>
        </div>
      </main>
    </div>
  );
}
