import { convexAdapter } from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import { betterAuthComponent } from "../../../convex/auth";
import { type GenericCtx } from "../../../convex/_generated/server";

const siteUrl = import.meta.env.VITE_SITE_URL!;

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


