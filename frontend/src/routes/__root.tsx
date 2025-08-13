import { createRootRoute, Outlet, Navigate, useLocation } from "@tanstack/react-router";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import Header from "../components/header";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const onAuthPage = location.pathname.startsWith("/auth");
    return (
      <>
        <AuthLoading>
          <div>Loading...</div>
        </AuthLoading>
        <Unauthenticated>
          {onAuthPage ? (
            <Outlet />
          ) : (
            <Navigate to="/auth" />
          )}
        </Unauthenticated>
        <Authenticated>
          {onAuthPage ? (
            <Navigate to="/" />
          ) : (
            <>
              <Header />
              <Outlet />
            </>
          )}
        </Authenticated>
      </>
    );
  },
});
