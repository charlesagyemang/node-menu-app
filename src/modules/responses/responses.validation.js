import Joi from 'joi';

export default {
  createResponses: {
    body: {
      occassionId: Joi.string().required(),
      group: Joi.string().required(),
      name: Joi.string().required(),
      categories: Joi.object().required(),
      items: Joi.object().required(),
      others: Joi.object(),
    },
  },
  updateResponses: {
    body: {
      occassionId: Joi.string(),
      group: Joi.string(),
      name: Joi.string(),
      categories: Joi.object(),
      items: Joi.object(),
      others: Joi.object(),
    },
  },
};
