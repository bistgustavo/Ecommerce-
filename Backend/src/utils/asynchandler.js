//This code defines an asyncHandler utility function that wraps around Express route handlers to simplify error //////handling for async/await operations. 

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

{
  asyncHandler;
}
