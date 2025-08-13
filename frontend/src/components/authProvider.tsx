import type { ReactNode } from "react";
import { useSession } from "../lib/auth-client";
import { LoginCard } from "../components/login";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const session = useSession();

  if (session.isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-zinc-300 border-t-zinc-600 rounded-full mx-auto mb-4" />
          <p className="text-zinc-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session.data?.user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoginCard />
      </div>
    );
  }

  return <>{children}</>;
}


