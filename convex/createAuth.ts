import { convexAdapter } from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import { betterAuthComponent } from "./auth";
import type { GenericCtx } from "./_generated/server";

const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || "http://localhost:5173";

export const createAuth = (ctx: GenericCtx) =>
  betterAuth({
    trustedOrigins: [siteUrl],
    database: convexAdapter(ctx, betterAuthComponent),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [
      convex(),
      crossDomain({
        siteUrl,
      }),
    ],
  });


