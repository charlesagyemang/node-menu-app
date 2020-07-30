import Joi from 'joi';

export default {
  createEvent: {
    body: {
      userId: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      location: Joi.string().required(),
      time: Joi.string().required(),
      date: Joi.date().required(),
    },
  },
  updateEvent: {
    body: {
      userId: Joi.string(),
      title: Joi.string(),
      description: Joi.string(),
      location: Joi.string(),
      time: Joi.string(),
      date: Joi.date(),
    },
  },
};
