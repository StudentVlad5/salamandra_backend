const { Menu } = require("../../models");

const deleteMenu = async (req, res, next) => {
  try {
    const { user, params } = req;
    const _id = params.id;

    const services = await Menu.deleteOne({ _id });
    if (services.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: "Success deleted" });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteMenu;
