import Joi from 'joi';

export default {
  createItem: {
    body: {
      type: Joi.string().required(),
      categoryId: Joi.string().required(),
      details: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      others: Joi.object(),
    },
  },
  updateItem: {
    body: {
      type: Joi.string(),
      categoryId: Joi.string(),
      details: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      others: Joi.object(),
    },
  },
};
