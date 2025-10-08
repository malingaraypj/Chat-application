import jwt from "jsonwebtoken";
import User from "../models/User.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const register = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  // check for valid input
  if (!username || !email || !password) {
    throw new AppError("Please provide valid inputs ", 400);
  }
  // check if user already exists
  const existingUser = await User.exists({ email });
  if (existingUser) {
    throw new AppError("User already exists", 400);
  }

  const user = await User.create({ username, email, password });

  res.status(201).json({
    success: true,
    data: user,
    message: "User registered successfull",
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new AppError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.matchPassword(password))) {
    throw new AppError("Invalid email or password", 401);
  }

  // Generate token
  const token = user.generateToken();
  res.status(200).json({ success: true, data: user, token });
});
