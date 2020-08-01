import HTTPStatus from 'http-status';
import Menu from './menu.model';

export const getMenu = async (req, res) => {
  const id = req.params.id;

  const menu = await Menu.findById(id);
  if (!menu) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(menu);
};

export const createMenu = async (req, res) => {
  const menu = await Menu.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(menu);
};

export const updateMenu = async (req, res) => {
  const id = req.params.id;

  const menu = await Menu.findById(id);
  if (!menu) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    menu[key] = req.body[key];
  });

  await menu.save();

  res.status(HTTPStatus.OK).json(menu.toJson());
};


export const deleteMenu = async (req, res) => {
  const id = req.params.id;

  const menu = await Menu.findById(id);
  if (!menu) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await menu.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
