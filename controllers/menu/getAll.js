const { ValidationError } = require('../../helpers');
const { Menu } = require("../../models");

const getMenu = async (req, res, next) => {
  try {
    const services = await Menu.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};
module.exports = getMenu;
