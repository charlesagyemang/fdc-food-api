import Joi from 'joi';

export default {
  register: {
    body: {
      name: Joi.string().required(),
      eamil: Joi.string().email().required(),
      password: Joi.string().min(6).max(30).required(),
      other: Joi.object(),
    },
  },
  login: {
    body: {
      name: Joi.string(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(60).required(),
      other: Joi.object(),
    },
  },
};
