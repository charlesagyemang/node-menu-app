import request from 'supertest-as-promised';
import User from '../modules/user/user.model';
import Event from '../modules/event/event.model';
import Attendee from '../modules/attendee/attendee.model';


// adding a comp parameter to solve async issues
export const login = async (server) => {
  const user = await User.create({ email: 'user@email.com', password: 'password' });
  const res = await request(server).post('/api/ampuser/login').send({
    email: user.email,
    password: user.password,
  });
  return {
    auth: { Authorization: `Bearer ${res.body.token}` },
    user,
  };
};

export const nuke = async () => {
  await Attendee.destroy({ where: {} });
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
};
