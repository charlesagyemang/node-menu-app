import HTTPStatus from 'http-status';
import Category from './category.model';
import Item from '../item/item.model';


export const getCategory = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findById(id, {
    include: [Item],
  });
  if (!category) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.status(HTTPStatus.OK).json(category.toJson());
};

export const createCategory = async (req, res) => {
  const category = await Category.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(category);
};

export const updateCategory = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findById(id);
  if (!category) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    category[key] = req.body[key];
  });

  await category.save();

  res.status(HTTPStatus.OK).json(category.toJson());
};


export const deleteCategory = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findById(id);
  if (!category) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await category.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};