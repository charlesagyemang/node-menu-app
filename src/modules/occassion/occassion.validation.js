import Joi from 'joi';

export default {
  createOccassion: {
    body: {
      menuId: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      groupings: Joi.object().required(),
      others: Joi.object(),
    },
  },
  updateOccassion: {
    body: {
      menuId: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      groupings: Joi.object(),
      others: Joi.object(),
    },
  },
};
