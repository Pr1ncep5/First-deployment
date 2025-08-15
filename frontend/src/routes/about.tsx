import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h3 className="text-3xl">About Page</h3>
      <div>
        {tasks?.map((task: any) => (
          <div key={task._id}>
            <p className="text-lg">{task.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
