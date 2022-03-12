const { Item } = require("../models");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("../utils/asyncHandler");
const ApiFeatures = require("../utils/apiFeatures");

exports.getItems = asyncHandler(async (req, res, next) => {
  const resultsPerPage = 5;
  const itemCount = await Item.countDocuments();
  const apiFeatures = new ApiFeatures(Item.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);
  const allItem = await apiFeatures.query;

  res.status(200).json({
    success: true,
    allItem,
    itemCount,
  });
});

exports.createItem = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const item = await Item.create(req.body);

  res.status(201).json({
    success: true,
    item,
  });
});

exports.getSingleItem = asyncHandler(async (req, res, next) => {
  const singleItem = await Item.findById(req.params.id);
  if (!singleItem) {
    return next(new ErrorHandler("Item not found.", 404));
  }

  res.status(200).json({
    success: true,
    singleItem,
  });
});

exports.updateItem = asyncHandler(async (req, res, next) => {
  let item = await Item.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not found.", 404));
  }

  product = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    item,
  });
});

exports.deleteItem = asyncHandler(async (req, res, next) => {
  let item = await Item.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not found.", 404));
  }

  await item.remove();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully.",
  });
});
