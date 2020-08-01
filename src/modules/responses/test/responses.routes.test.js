
import { nuke, createResponse } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Responses:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('Create An Occassion And Fetch Successfully', async () => {
    const { status, body } = await createResponse(server);
    console.log(body);
    console.log(status);
    expect(status).toBe(201);
  });
});
