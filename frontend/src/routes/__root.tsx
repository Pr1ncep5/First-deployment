import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
    </div>
  ),
});