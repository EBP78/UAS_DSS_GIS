const { customAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({
      success: false,
      msg: "ada error bang/neng, please wait ya",
      detail: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    msg: "server error bang/neng, please wait ya",
    detail: err.message,
  });
};

module.exports = errorHandlerMiddleware;
