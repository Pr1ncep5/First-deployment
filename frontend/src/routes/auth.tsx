import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { authClient } from '../lib/auth-client'
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'

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
        <SignIn />
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

function SignIn() {
  const [showSignIn, setShowSignIn] = useState(true)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    if (showSignIn) {
      await authClient.signIn.email(
        {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        },
        {
          onError: (ctx) => {
            window.alert(ctx.error.message)
          },
        },
      )
    } else {
      await authClient.signUp.email(
        {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        },
        {
          onError: (ctx) => {
            window.alert(ctx.error.message)
          },
        },
      )
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!showSignIn && <input name="name" placeholder="Name" />}
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">{showSignIn ? 'Sign in' : 'Sign up'}</button>
      </form>
      <p>
        {showSignIn ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={() => setShowSignIn(!showSignIn)}>
          {showSignIn ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </>
  )
}

