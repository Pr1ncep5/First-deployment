import { createFileRoute } from "@tanstack/react-router";
import { useQuery, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <h3>About Page</h3>
      <AuthLoading>
        <div>Loading auth...</div>
      </AuthLoading>
      <Authenticated>
        <div>
          {tasks?.map((task: any) => (
            <div key={task._id}>
              <p>{task.text}</p>
            </div>
          ))}
        </div>
      </Authenticated>
      <Unauthenticated>
        <div>Please sign in on the Auth page to see tasks.</div>
      </Unauthenticated>
    </div>
  );
}