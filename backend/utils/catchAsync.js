const catchAsync = (fn) => {
  return async (req, res, next) => fn(req, res, next).catch(next);
};

export default catchAsync;
