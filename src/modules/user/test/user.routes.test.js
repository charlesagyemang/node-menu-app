import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke, login } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('User::Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('should login successfully', async () => {
    const createUser = await request(server).post('/api/users').send({
      email: 'test@email.com',
      password: 'password',
      name: 'Charles',
    });

    const res = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    console.log(createUser.body);
    console.log(res.body);

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
  });

  it.only('should update user successfully', async () => {
    const { user, auth } = await login(server);

    await request(server).post(`/api/users/update/${user.id}`).send({
      email: 'test1@email.com',
      name: 'charles1',
      password: 'password1',
    }).set(auth);

    const res = await request(server).post('/api/users/login').send({
      email: 'test1@email.com',
      password: 'password1',
    });

    console.log(res.body);
    // console.log(auth);
    // console.log(res.body);

    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body).toHaveProperty('id');
    // expect(res.body).toHaveProperty('token');
  });


  it.skip('should user with attached events', async () => {
    const { body } = await request(server).post('/api/users').send({
      email: 'test@email.com',
      password: 'password',
      name: 'Charles',
    });

    const auth = { Authorization: `Bearer ${body.token}` };

    const res = await request(server).get(`/api/users/${body.id}`).set(auth);

    console.log(res.body);
    expect(res.body).toHaveProperty('events');
  });
});
