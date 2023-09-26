const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require("./users");
const { Menu, menuValidationSchema } = require("./menu");
const { Product, productValidationSchema } = require("./product");

module.exports = {
  Users,
  Menu,
  menuValidationSchema,
  Product,
  productValidationSchema,
};

