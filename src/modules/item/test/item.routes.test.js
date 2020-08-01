// import request from 'supertest-as-promised';
import { nuke, createItem, editRecord } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Item:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create An Fetch An Item Successfully', async () => {
    const { status, body } = await createItem(server);
    console.log(body);
    expect(status).toBe(200);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('categoryId');
    expect(body.name).toBe('Carvia');
    expect(body.others).toHaveProperty('results');
  });

  it.only('Edit And Get A Category Successfully', async () => {
    const { body } = await createItem(server);
    const res = await editRecord(
      server,
      '/api/items/',
      body.id,
      {
        type: 'drink',
        name: 'Irish Special Wine',
        description: 'half glass',
        details: '1956 Marini',
      },
    );

    // console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body.type).toBe('drink');
    expect(res.body.name).toBe('Irish Special Wine');
    expect(res.body.description).toBe('half glass');
    expect(res.body.details).toBe('1956 Marini');
  });
});
