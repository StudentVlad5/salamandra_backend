const Joi = require("joi");
const mongoose = require("mongoose");

const productValidationSchema = Joi.object({
  product: Joi.string().min(3).max(32).required(),
  sort: Joi.number().min(1).max(32).required(),
});

const ProductSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, "Set product name"],
      unique: true,
    },
    sort: {
      type: Number,
      required: [true, "Set sort number"],
      unique: true,
    },
     createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = { Product, productValidationSchema };
