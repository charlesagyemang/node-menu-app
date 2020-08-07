
import request from 'supertest-as-promised';
import { nuke, createResponse } from '../../../helpers/test_helpers';
import server from '../../../server';

jest.setTimeout(300000000);


describe('Responses:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('Create An Occassion And Fetch Successfully', async () => {
    await createResponse(server);
    await createResponse(server);
    await createResponse(server);
    await createResponse(server);
    const { status, body } = await request(server).get('/api/statistics');

    console.log(status, body);
    // console.log(body);
    // console.log(status);
    // expect(status).toBe(201);
  });
});
