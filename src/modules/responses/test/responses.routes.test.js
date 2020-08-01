import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Responses from '../responses.model';
import server from '../../../server';

describe('Responses:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const responses = await Responses.create({
          //
    });

    const res = await request(server).get('/api/responses/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(responses.id);
  });
});
