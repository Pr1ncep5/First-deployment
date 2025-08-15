import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "../lib/auth-client";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const session = useSession();

  return (
    <div className="p-2">
      <p>Hello, dear {session.data?.user?.name}!</p>
    </div>
  );
}