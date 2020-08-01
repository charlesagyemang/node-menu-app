import HTTPStatus from 'http-status';
import Responses from './responses.model';

export const getResponses = async (req, res) => {
  const id = req.params.id;

  const responses = await Responses.findById(id);
  if (!responses) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(responses);
};

export const createResponses = async (req, res) => {
  const responses = await Responses.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(responses);
};

export const updateResponses = async (req, res) => {
  const id = req.params.id;

  const responses = await Responses.findById(id);
  if (!responses) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    responses[key] = req.body[key];
  });

  await responses.save();

  res.status(HTTPStatus.OK).json(responses.toJson());
};


export const deleteResponses = async (req, res) => {
  const id = req.params.id;

  const responses = await Responses.findById(id);
  if (!responses) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await responses.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
