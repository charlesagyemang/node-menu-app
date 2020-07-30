import HTTPStatus from 'http-status';
import Event from './event.model';
import User from '../user/user.model';
import Attendee from '../attendee/attendee.model';


export const getEvent = async (req, res) => {
  const id = req.params.id;

  // console.log(id);

  const event = await Event.findById(id, {
    include: [User, Attendee],
  });
  if (!event) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.status(HTTPStatus.OK).json(event);
};

export const createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(event);
};

export const updateEvent = async (req, res) => {
  const id = req.params.id;

  const event = await Event.findById(id);
  if (!event) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    event[key] = req.body[key];
  });

  await event.save();

  res.status(HTTPStatus.OK).json(event.toJson());
};


export const deleteEvent = async (req, res) => {
  const id = req.params.id;

  const event = await Event.findById(id);
  if (!event) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await event.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
