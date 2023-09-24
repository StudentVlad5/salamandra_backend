const express = require("express");
const { product } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(product.getProduct));

module.exports = routerProduct = router;
