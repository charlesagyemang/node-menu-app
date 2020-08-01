import Joi from 'joi';

export default {
  createOccassion: {
    body: {
      // email: Joi.string().email().required(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateOccassion: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
