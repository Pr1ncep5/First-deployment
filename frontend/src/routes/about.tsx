import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "../../../backend/convex/_generated/api";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const greetings = useQuery(api.greetings.hello);

  return (
    <div className="p-2">
      Look below, this is a message from the backend:
      <p>{greetings}</p>
    </div>
  );
}
