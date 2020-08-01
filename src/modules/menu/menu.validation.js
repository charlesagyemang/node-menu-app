import Joi from 'joi';

export default {
  createMenu: {
    body: {
      // email: Joi.string().email().required(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateMenu: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
