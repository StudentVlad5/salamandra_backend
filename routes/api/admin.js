const express = require('express');
const { menu } = require('../../controllers');

const { ctrlWrapper, authMiddleware, upload } = require('../../middleWares');

const router = express.Router();

router.get('/', ctrlWrapper(authMiddleware), ctrlWrapper(menu.getMenu));

router.post(
  '/create',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(menu.createMenu),
  upload.single('images')
);

router.get('/:id', ctrlWrapper(authMiddleware), ctrlWrapper(menu.getMenuById));

router.delete(
  '/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(menu.deleteMenu)
);

router.patch(
  '/:id',
  ctrlWrapper(authMiddleware),
  upload.single('images'),
  ctrlWrapper(menu.updateMenu)
);

module.exports = routerAdmin = router;
