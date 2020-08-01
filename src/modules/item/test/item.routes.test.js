import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Item from '../item.model';
import server from '../../../server';

describe('Item:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const item = await Item.create({
          //
    });

    const res = await request(server).get('/api/item/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(item.id);
  });
});
