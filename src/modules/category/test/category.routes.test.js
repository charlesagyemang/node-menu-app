import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Category from '../category.model';
import server from '../../../server';

describe('Category:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const category = await Category.create({
          //
    });

    const res = await request(server).get('/api/category/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(category.id);
  });
});
