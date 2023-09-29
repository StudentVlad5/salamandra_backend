const { ValidationError, dataFilterObj } = require('../../helpers');
const { Menu } = require('../../models');
let path = require('path');

const createMenu = async (req, res, next) => {
  const newData = dataFilterObj(req.body);

  req.file?.path
    ? (newData.images = path.basename(req.file?.path))
    : (newData.images = path.basename('none'));

  console.log('createMenu ~ newData:', newData);

  try {
    const resUpdate = await Menu.create(newData);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createMenu;
