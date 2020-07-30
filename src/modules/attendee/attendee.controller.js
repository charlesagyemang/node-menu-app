import HTTPStatus from 'http-status';
import Attendee from './attendee.model';

export const getAttendee = async (req, res) => {
  const id = req.params.id;

  const attendee = await Attendee.findById(id);
  if (!attendee) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(attendee);
};

export const createAttendee = async (req, res) => {
  const attendee = await Attendee.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(attendee);
};

export const updateAttendee = async (req, res) => {
  const id = req.params.id;

  const attendee = await Attendee.findById(id);
  if (!attendee) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    attendee[key] = req.body[key];
  });

  await attendee.save();

  res.status(HTTPStatus.OK).json(attendee.toJson());
};


export const deleteAttendee = async (req, res) => {
  const id = req.params.id;

  const attendee = await Attendee.findById(id);
  if (!attendee) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await attendee.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
