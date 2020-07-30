import Joi from 'joi';

export default {
  createAttendee: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      eventId: Joi.string().required(),
      phoneNumber: Joi.string().required(),
    },
  },
  updateAttendee: {
    body: {
      name: Joi.string(),
      eventId: Joi.string(),
      email: Joi.string().email(),
      phoneNumber: Joi.string(),
    },
  },
};
