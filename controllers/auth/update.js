const { ValidationError } = require("../../helpers");
const { Users } = require("../../models");
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require("../../helpers");

const update = async (req, res, next) => {
  const { id } = req.params;

  const newData = dataFilter(req.body, userFieldReceivedFromFront);
  if (!newData) {
    throw new ValidationError("Bad request, invalid data");
  }
  const resUpdate = await Users.findByIdAndUpdate({ _id: id }, newData, {
    new: true,
  });
  const newResponse = dataFilter(resUpdate, userMainField);
  res.status(201).json(newResponse);
};
module.exports = update;
