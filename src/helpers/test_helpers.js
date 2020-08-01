import request from 'supertest-as-promised';
import User from '../modules/user/user.model';
import Event from '../modules/event/event.model';
import Attendee from '../modules/attendee/attendee.model';
import Category from '../modules/category/category.model';
import Item from '../modules/item/item.model';
import Menu from '../modules/menu/menu.model';
import Response from '../modules/responses/responses.model';
import Occassion from '../modules/occassion/occassion.model';

export const nuke = async () => {
  await Response.destroy({ where: {} });
  await Item.destroy({ where: {} });
  await Category.destroy({ where: {} });
  await Occassion.destroy({ where: {} });
  await Menu.destroy({ where: {} });
  await Attendee.destroy({ where: {} });
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
};


// Login
export const login = async (server) => {
  await request(server).post('/api/users').send({
    email: 'test@email.com',
    password: 'password',
    name: 'Charles',
  });

  const res = await request(server).post('/api/users/login').send({
    email: 'test@email.com',
    password: 'password',
  });

  return {
    auth: { Authorization: `Bearer ${res.body.token}` },
    user: res.body,
  };
};

export const editRecord = async (server, url, recordId, editBody) => {
  const { auth } = await login(server);
  await request(server).patch(`${url}${recordId}`).send(editBody).set(auth);
  const res = await request(server).get(`${url}${recordId}`).set(auth);
  return res;
};

export const deleteRecord = async (server, url, recordId) => {
  const { auth } = await login(server);
  await request(server).delete(`${url}${recordId}`).set(auth);
  const { status } = await request(server).get(`${url}${recordId}`).set(auth);
  return status;
};

// create category first
export const createCategory = async (server) => {
  const res = await request(server).post('/api/categories/create.new').send({
    name: 'Starters',
    description: '',
    others: {
      results: [
        {
          name: 'koobi',
        },
        {
          name: 'kumi',
        },
      ],
    },
  });
  return res;
};

export const createCategoryCustom = async (server, name) => {
  const res = await request(server).post('/api/categories/create.new').send({
    name,
    description: '',
    others: {
      results: [
        {
          name: 'koobi',
        },
        {
          name: 'kumi',
        },
      ],
    },
  });
  return res;
};

// create item {specify type}
export const createItem = async (server) => {
  const TYPE = [
    'food',
    'drink',
  ];
  const { body } = await createCategory(server);
  const itemResponse = await request(server).post('/api/items/create.new').send({
    type: TYPE[0],
    categoryId: body.id,
    details: '15ml russian cavia',
    name: 'Carvia',
    description: 'Sweet 1 plate with 2 sides',
    others: {
      results: [
        {
          name: 'koobi',
        },
        {
          name: 'kumi',
        },
      ],
    },
  });
  const { auth } = await login(server);
  const res = await request(server).get(`/api/items/${itemResponse.body.id}`).set(auth);
  return res;
};

// create item {specify type}
export const createItemCustom = async (server, name, description, details) => {
  const TYPE = [
    'food',
    'drink',
  ];
  const { body } = await createCategory(server);
  const res = await request(server).post('/api/items/create.new').send({
    type: TYPE[0],
    categoryId: body.id,
    details,
    name,
    description,
    others: {
      results: [
        {
          name: 'koobi',
        },
        {
          name: 'kumi',
        },
      ],
    },
  });
  return res;
};


// create a menu
export const createMenu = async (server) => {
  // create items
  const itemOne = await createItemCustom(server, 'Jollof', 'Jollof With Chicken', 'Two Plates');
  const itemTwo = await createItemCustom(server, 'Coffe', 'No Sugar', 'Kenya Coffee');
  const itemThree = await createItemCustom(server, 'Cake', 'Brown chocolate', 'Extra toppings');

  // create categories
  const categoryOne = await createCategoryCustom(server, 'Starters');
  const categoryTwo = await createCategoryCustom(server, 'Main Course');
  const categoryThree = await createCategoryCustom(server, 'Desserts');

  const { user } = await login(server);

  const menuResponse = await request(server).post('/api/menus/create.new').send({
    userId: user.id,
    name: 'Special Menu One',
    description: '15ml russian cavia',
    categories: { results: [categoryOne.body, categoryTwo.body, categoryThree.body] },
    items: { results: [itemOne.body, itemTwo.body, itemThree.body] },
    others: { other: 'kuleke' },
  });
  // const res = await request(server).get(`/api/menus/${menuResponse.body.id}`).set(auth);
  return menuResponse;
};


// create an occassion
export const createOccassion = async (server) => {
  const menu = await createMenu(server);
  const occassionResponse = await request(server).post('/api/occassions/create.new').send({
    menuId: menu.body.id,
    name: 'Ghana insurance Awards 2020',
    description: 'Best Insurance Awards 2020',
    groupings: {
      results: [
        'SIC',
        'Ghana Commercial Bank',
      ],
    },
    others: {
      date: '13 march 3030',
    },
  });

  const { auth } = await login(server);
  const res = await request(server).get(`/api/occassions/${occassionResponse.body.id}`).set(auth);
  return res;
};

// create responses
