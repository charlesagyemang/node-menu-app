import HTTPStatus from 'http-status';
import Responses from './responses.model';
import Menu from '../menu/menu.model';
import Occassion from '../occassion/occassion.model';
import pusher from '../../config/pusher';


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
  await Responses.create({ ...req.body });

  const occassion = await Occassion.findById(req.body.occassionId, {
    include: [Menu, Responses],
  });

  if (!occassion) {
    return res.sendStatus(HTTPStatus.NOT_FOUND);
  }

  await pusher.trigger('response', 'create-response', {
    occassion,
  });

  return res.status(HTTPStatus.OK).json(occassion);
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
