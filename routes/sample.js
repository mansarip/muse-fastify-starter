module.exports = function(fastify) {
  return {
    method: "GET",
    url: "/",
    handler: function(req, res) {
      res.send({ salam: "dunia" });
    }
  };
};
