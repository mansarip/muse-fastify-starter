const fastify = require("fastify")();
const { PORT } = process.env;

// sample routes
fastify.route(require("./routes/sample")(fastify));
fastify.route(require("./routes/sampleWithError")(fastify));

// function start
async function start(PORT = 3001) {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// start server
start();
