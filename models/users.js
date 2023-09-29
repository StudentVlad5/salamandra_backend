const Joi = require('joi');
// const { string } = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  email: Joi.string().email().required(),

  password: Joi.string().min(7).max(32).required(),
  phone: Joi.string().min(7).max(13).required(),
  role: Joi.string().valid('user', 'admin'),
});

const userUpdateValidationSchema = Joi.object({
  name: Joi.string().min(3).max(32),
  email: Joi.string().email(),

  password: Joi.string().min(7).max(32),
  phone: Joi.string().min(7).max(13).required(),
  role: Joi.string().valid('user', 'admin'),
});

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Set user name'],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, 'Set email user'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Set password'],
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    authToken: {
      type: String,
      default: '',
    },
    refreshToken: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = mongoose.model('users', UsersSchema);

module.exports = { Users, userValidationSchema, userUpdateValidationSchema };
