import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  let body = {}

  try {
    body = await c.req.json()
  } catch (err) {
    console.warn("No JSON body found or body is invalid JSON")
  }

  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("params"))

  return c.text('Hello Hono!')
})

export default app
