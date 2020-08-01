import { nuke, createMenu, editRecord, createCategoryCustom, deleteRecord } from '../../../helpers/test_helpers';
import server from '../../../server';

// jest.setTimeout(300000000);

describe('Menu:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create An Fetch A Menu Successfully', async () => {
    const { status, body } = await createMenu(server);
    console.log(body);
    console.log(status);
    expect(status).toBe(200);
    expect(body.items.results.length).toBe(3);
    expect(body.categories.results.length).toBe(3);
  });

  it.skip('Edit And Get A Menu Successfully', async () => {
    const { body } = await createMenu(server);
    const categoryOne = await createCategoryCustom(server, 'Enders');

    const res = await editRecord(
      server,
      '/api/menus/',
      body.id,
      {
        name: 'Special Menu Two',
        description: 'very Special Menu',
        categories: { results: [...body.categories.results, categoryOne.body] },
      },
    );

    console.log(res.body);
    expect(res.body.categories.results.length).toBe(4);
    expect(res.body.name).toBe('Special Menu Two');
    expect(res.body.description).toBe('very Special Menu');
  });

  it.skip('Delete A Menu Successfully', async () => {
    const { body } = await createMenu(server);
    const status = await deleteRecord(
      server,
      '/api/menus/',
      body.id,
    );
    expect(status).toBe(404);
  });
});
