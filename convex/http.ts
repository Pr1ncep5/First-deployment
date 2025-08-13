import { httpRouter } from 'convex/server'
import { betterAuthComponent } from './auth'
import { createAuth } from './createAuth'

const http = httpRouter()

betterAuthComponent.registerRoutes(http, createAuth, { cors: true })

export default http


