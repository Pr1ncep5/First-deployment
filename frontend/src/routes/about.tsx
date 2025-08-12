import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <h3>About Page</h3>
      {tasks?.map((task: any) => (
        <div key={task._id}>
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  );
}