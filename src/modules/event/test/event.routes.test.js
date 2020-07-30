import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Event:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('create event successfully', async () => {
    const { body } = await request(server).post('/api/users').send({
      email: 'test@email.com',
      password: 'password',
      name: 'Charles',
    });


    const event = await request(server).post('/api/events').send({
      userId: body.id,
      title: 'Title',
      description: 'Description',
      location: 'Location',
      time: '1:00',
      date: new Date(),
    });

    const auth = { Authorization: `Bearer ${body.token}` };

    const res = await request(server).get(`/api/events/${event.body.id}`).set(auth);

    console.log(res.body);
  });

  it.only('get attendees as a carry on when you query event', async () => {
    const { body } = await request(server).post('/api/users').send({
      email: 'test@email.com',
      password: 'password',
      name: 'Charles',
    });


    const event = await request(server).post('/api/events').send({
      userId: body.id,
      title: 'Title',
      description: 'Description',
      location: 'Location',
      time: '1:00',
      date: new Date(),
    });

    const auth = { Authorization: `Bearer ${body.token}` };

    const res = await request(server).get(`/api/events/${event.body.id}`).set(auth);

    console.log(res.body);
  });
});
