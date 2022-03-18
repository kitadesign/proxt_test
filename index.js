const fastify = require('fastify')({ logger: true, trustProxy: true })

fastify.get('/', async (request, reply) => {
  console.log(request.raw)
  console.log(request.ip)
  return { hello: 'proxy' }
})

const start = async () => {
  try {
    await fastify.listen(8000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

