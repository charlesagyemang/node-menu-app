import Joi from 'joi';

export default {
  createMenu: {
    body: {
      userId: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      categories: Joi.object().required(),
      items: Joi.object().required(),
      others: Joi.object(),
    },
  },
  updateMenu: {
    body: {
      userId: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      categories: Joi.object(),
      items: Joi.object(),
      others: Joi.object(),
    },
  },
};
