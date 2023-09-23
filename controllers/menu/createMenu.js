const { ValidationError } = require('../../helpers');
const { Menu } = require('../../models');

const createMenu = async (req, res, next) => {
  const { body, files } = req;
  const imagesObject = {};
  Object.values(files).forEach(e => {
    imagesObject[e[0].fieldname] = e[0].path;
  });

  try {
    const fullData = { ...body, imagesObject };
    const resUpdate = await Menu.create(fullData);
    // console.log("resUpdate",resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createMenu;
