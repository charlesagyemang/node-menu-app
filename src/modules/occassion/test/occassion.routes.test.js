import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Occassion from '../occassion.model';
import server from '../../../server';

describe('Occassion:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const occassion = await Occassion.create({
          //
    });

    const res = await request(server).get('/api/occassion/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(occassion.id);
  });
});
