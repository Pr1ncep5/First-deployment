import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to the test page!</h3>
    </div>
  )
}