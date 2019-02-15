module.exports = function(fastify) {
  return {
    method: "GET",
    url: "/error",
    handler: function(req, res) {
      try {
        throw Error("Testing");
      } catch (e) {
        res.send({ message: e.message });
      }
    }
  };
};
