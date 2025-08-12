import { query } from "./_generated/server";

export const hello = query({
  args: {},
  handler: async (ctx) => {
    return "Hello from Convex! This is the first message from the backend!";
  },
});