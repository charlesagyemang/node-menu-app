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
  // console.log(auth);
  await request(server).patch(`${url}${recordId}`).send(editBody).set(auth);
  const res = await request(server).get(`${url}${recordId}`).set(auth);
  return res;
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
  // const res = await request(server).get(`/api/categories/${ress.body.categoryId}`).set(auth);
  return res;
};

// create a menu

// create an occassion

// create responses

// create a user and return simple stuff
