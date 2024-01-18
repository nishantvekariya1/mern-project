const errorMiddleware = (err, req, res, next) => {
  const status = err.message || 500;
  const message = err.message || "Backend Error";
  const extraDeatils = err.extraDeatils || "Error from Backend";

  return res.status(status).json({ message, extraDeatils });
};

module.exports = errorMiddleware;
