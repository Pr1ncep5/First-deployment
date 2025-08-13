import { createAuthClient } from "better-auth/react";
import { convexClient, crossDomainClient } from "@convex-dev/better-auth/client/plugins";

const computedBaseUrl =
  import.meta.env.VITE_CONVEX_SITE_URL ||
  (import.meta.env.VITE_CONVEX_URL ? import.meta.env.VITE_CONVEX_URL.replace(".cloud", ".site") : undefined);

export const authClient = createAuthClient({
  baseURL: computedBaseUrl,
  plugins: [convexClient(), crossDomainClient()],
});


