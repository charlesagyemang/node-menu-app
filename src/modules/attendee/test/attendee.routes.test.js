import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Attendee:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('skip this test', async () => {
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

    // const auth = { Authorization: `Bearer ${body.token}` };

    await request(server).post('/api/attendees/').send({
      name: 'Bra Kofi',
      email: 'mm@gmail.com',
      eventId: event.body.id,
      phoneNumber: '0988772244',
    });

    const auth = { Authorization: `Bearer ${body.token}` };

    const ress = await request(server).get(`/api/events/${event.body.id}`).set(auth);

    console.log(ress.body);
  });
});
