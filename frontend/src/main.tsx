import { StrictMode } from "react";
import "./index.css";
import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexReactClient } from "convex/react";
import { authClient } from "./lib/auth-client";
import { Toaster } from "sonner";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Toaster />
      <ConvexBetterAuthProvider client={convex} authClient={authClient}>
        <RouterProvider router={router} />
      </ConvexBetterAuthProvider>
    </StrictMode>
  );
}
