import Joi from 'joi';

export default {
  createCategory: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().allow(''),
      others: Joi.object(),
    },
  },
  updateCategory: {
    body: {
      name: Joi.string(),
      description: Joi.string(),
      others: Joi.object(),
    },
  },
};
