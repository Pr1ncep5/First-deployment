import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "../lib/auth-client";
import { LoginCard } from "../components/login";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const session = useSession();

  if (session && session.data) {
    return (
      <div className="p-2">
        <p>Hello, dear {session.data.user.name}!</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <LoginCard />
    </div>
  );
}
