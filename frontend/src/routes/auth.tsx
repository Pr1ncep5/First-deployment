import { createFileRoute } from '@tanstack/react-router'
import { authClient } from '../lib/auth-client'
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { LoginCard } from '../components/login'

export const Route = createFileRoute('/auth')({
  component: AuthPage,
})

function AuthPage() {
  return (
    <>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
      <Unauthenticated>
        <LoginCard />
      </Unauthenticated>
      <Authenticated>
        <div>
          <p>Signed in</p>
          <button onClick={() => authClient.signOut()}>Sign out</button>
        </div>
      </Authenticated>
    </>
  )
}
