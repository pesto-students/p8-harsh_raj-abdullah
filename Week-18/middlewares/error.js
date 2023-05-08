export const ErrorMiddleware = (err, req, res, next) => {
  let { statusCode, message } = err;
  statusCode = statusCode ?? 500;
  message = message ?? "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message
  })
}