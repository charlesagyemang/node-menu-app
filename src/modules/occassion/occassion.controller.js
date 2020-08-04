import HTTPStatus from 'http-status';
import Occassion from './occassion.model';
import Menu from '../menu/menu.model';


export const getOccassion = async (req, res) => {
  const id = req.params.id;

  const occassion = await Occassion.findById(id);
  if (!occassion) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(occassion);
};

export const getAllOccasionRecords = async (req, res) => {
  const categories = await Occassion.findAndCountAll({
    limit: 100,
    offset: 0,
    where: {},
    include: [Menu],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.status(HTTPStatus.OK).json(categories);
};

export const createOccassion = async (req, res) => {
  const occassion = await Occassion.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(occassion);
};

export const updateOccassion = async (req, res) => {
  const id = req.params.id;

  const occassion = await Occassion.findById(id);
  if (!occassion) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    occassion[key] = req.body[key];
  });

  await occassion.save();

  res.status(HTTPStatus.OK).json(occassion.toJson());
};


export const deleteOccassion = async (req, res) => {
  const id = req.params.id;

  const occassion = await Occassion.findById(id);
  if (!occassion) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await occassion.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
