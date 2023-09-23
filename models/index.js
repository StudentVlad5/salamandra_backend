const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require('./users');
const { Menu, menuValidationSchema } = require('./menu');


module.exports = {
  Users,
  Menu, 
  menuValidationSchema,
};
