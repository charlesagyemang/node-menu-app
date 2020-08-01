import request from 'supertest-as-promised';
import { nuke, createCategory, editRecord, login } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Category:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create A Category Successfully', async () => {
    const res = await createCategory(server);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Starters');
    expect(res.body.others).toHaveProperty('results');
  });

  it.skip('Edit A Category Successfully', async () => {
    const categoryResponse = await createCategory(server);
    const res = await editRecord(
      server,
      '/api/categories/',
      categoryResponse.body.id,
      {
        name: 'Dessert',
        description: 'Muntae',
      },
    );
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body.name).toBe('Dessert');
    expect(res.body.others).toHaveProperty('results');
  });

  it.only('Delete A Category Successfully', async () => {
    const { body } = await createCategory(server);
    const { auth } = await login(server);
    await request(server).delete(`/api/categories/${body.id}`).set(auth);
    const { status } = await request(server).get(`/api/categories/${body.id}`).set(auth);
    expect(status).toBe(404);
  });
});
