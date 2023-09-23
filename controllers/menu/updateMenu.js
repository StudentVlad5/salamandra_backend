const { ValidationError } = require('../../helpers');
const { Menu } = require('../../models');
const { dataFilterObj } = require('../../helpers');

const updateMenu = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  const files = req.files;

  const imagesObject = {};
  Object.values(files).forEach(e => {
    imagesObject[e[0].fieldname] = e[0].path;
  });

  const fullData = {
    ...body,
    imagesObject,
  };
  // const newData = dataFilterObj(req.body);

  try {
    // const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, newData, {
    //   new: true,
    // });
    const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, fullData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateMenu;
