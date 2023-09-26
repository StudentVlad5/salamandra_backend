const { ValidationError } = require("../../helpers");
const { Menu } = require("../../models");
const { dataFilterObj } = require("../../helpers");
let path = require("path");

const updateMenu = async (req, res, next) => {
  const { id } = req.params;
  const newData = dataFilterObj(req.body);
  req.file?.path
    ? (newData.images = path.basename(req.file?.path))
    : (newData.images = path.basename("none"));
  if (newData.details) {
    newData.details = newData.details.split(",");
  }
  if (newData.alcohol) {
    newData.alcohol = newData.alcohol.split(",");
  }
  try {
    const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateMenu;
