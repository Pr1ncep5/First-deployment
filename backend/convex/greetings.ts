import { query, QueryCtx } from "./_generated/server";

export const hello = query({
  args: {},
  handler: async (_ctx: QueryCtx) => {
    return "Hello from Convex! This is the first message from the backend!";
  },
});