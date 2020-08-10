import Joi from 'joi';

export default {
  register: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(30).required(),
    },
  },
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(60).required(),
    },
  },
  updateUser: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().min(6).max(60),
    },
  },
};
