import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const getOne = (Model, options = {}) => {
  return catchAsync(async (req, res, next) => {
    let filter = {};

    // Allow getting by id
    if (req.params.id) {
      filter._id = req.params.id;
    }

    // Merge optional filters
    if (options.filter) {
      filter = { ...filter, ...options.filter };
    }

    // Build query
    let query = Model.findOne(filter);

    if (options.populate) {
      query = query.populate(options.populate);
    }

    const result = await query;

    if (!result) {
      return next(new AppError("No document found", 404));
    }

    res.status(200).json({
      status: "success",
      data: result,
    });
  });
};

export const getAll = (Model, options = {}) => {
  return catchAsync(async (req, res, next) => {
    let filter = {};

    // Optional filters
    if (options.filter) {
      filter = { ...options.filter };
    }

    // Build query
    let query = Model.find(filter);

    // Optional population
    if (options.populate) {
      query = query.populate(options.populate);
    }

    const result = await query;

    // Handle empty result
    if (result.length === 0) {
      return next(new AppError("No results found", 404));
    }

    res.status(200).json({
      status: "success",
      results: result.length,
      data: result,
    });
  });
};
