const notFound = (req, res) => {
  res.status(404).send("Route gak ada bang/neng");
};

module.exports = notFound;
