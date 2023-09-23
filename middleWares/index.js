const ctrlWrapper = require('./ctrlWrapper');
const authMiddleware = require('./authMiddleware');
const tokenValidation = require('./tokenValidation');
const { validation } = require('./validation');
const { upload } = require('./uploadMiddleware');

module.exports = {
  ctrlWrapper,
  authMiddleware,
  tokenValidation,
  validation,
  upload,
};
