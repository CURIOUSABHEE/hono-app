import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next:any){
  if(c.req.header("Authorization")){
    // DO validation
    await next()
  } else {
    return c.text("You don't have access")
  }

}

// app.use(authMiddleware)

app.post('/', authMiddleware, async (c) => {
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
 