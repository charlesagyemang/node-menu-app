import HTTPStatus from 'http-status';
import Item from './item.model';
import Category from '../category/category.model';

export const getItem = async (req, res) => {
  const id = req.params.id;

  const item = await Item.findById(id, {
    include: [Category],
  });
  if (!item) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.status(HTTPStatus.OK).send(item);
};

export const createItem = async (req, res) => {
  const item = await Item.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(item);
};

export const updateItem = async (req, res) => {
  const id = req.params.id;

  const item = await Item.findById(id);
  if (!item) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    item[key] = req.body[key];
  });

  await item.save();

  res.status(HTTPStatus.OK).json(item.toJson());
};


export const deleteItem = async (req, res) => {
  const id = req.params.id;

  const item = await Item.findById(id);
  if (!item) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await item.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
