const fastify = require("fastify")();

// sample routes
fastify.route(require("./routes/sample")(fastify));
fastify.route(require("./routes/sampleWithError")(fastify));

// function start
async function start(PORT = 3001) {
  try {
    await fastify.listen(PORT);

    if (process.env.NODE_ENV === "development") {
      console.log(`Server development running at ${process.env.PORT}`);
    }
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// start server
start(process.env.PORT);
