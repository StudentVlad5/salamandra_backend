const express = require("express");
const { menu } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(menu.getMenu));

module.exports = routerMenu = router;
