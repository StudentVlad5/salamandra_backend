const { ValidationError } = require("../../helpers");
const { Product } = require("../../models");

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.find().sort({ sort: 1 });
    res.status(200).json(product);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};
module.exports = getProduct;
