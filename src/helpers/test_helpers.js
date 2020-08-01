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

// create category first

// create item {specify type}

// create a menu

// create an occassion

// create responses

// create a user and return simple stuff
export const login = async (server) => {
  const user = await User.create({ email: 'test@email.com', password: 'password' });
  const res = await request(server).post('/api/users/login').send({
    email: user.email,
    password: user.password,
  });
  return {
    auth: { Authorization: `Bearer ${res.body.token}` },
    user,
  };
};
