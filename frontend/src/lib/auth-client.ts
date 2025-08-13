import { createAuthClient } from "better-auth/react";
import { convexClient, crossDomainClient } from "@convex-dev/better-auth/client/plugins";
import { magicLinkClient } from "better-auth/client/plugins";

export const authBaseURL =
  import.meta.env.VITE_CONVEX_SITE_URL ||
  (import.meta.env.VITE_CONVEX_URL ? import.meta.env.VITE_CONVEX_URL.replace(".cloud", ".site") : undefined);

export const authClient = createAuthClient({
  baseURL: authBaseURL,
  plugins: [convexClient(), crossDomainClient(), magicLinkClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;


