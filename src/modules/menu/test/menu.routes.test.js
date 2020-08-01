import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Menu from '../menu.model';
import server from '../../../server';

describe('Menu:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const menu = await Menu.create({
          //
    });

    const res = await request(server).get('/api/menu/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(menu.id);
  });
});
