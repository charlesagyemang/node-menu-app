import { nuke, createOccassion, editRecord, deleteRecord } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Occassion:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create An Occassion And Fetch Successfully', async () => {
    const { status, body } = await createOccassion(server);
    console.log(body);
    console.log(status);
    expect(status).toBe(200);
    expect(body.groupings.results.length).toBe(2);
    expect(body.name).toBe('Ghana insurance Awards 2020');
    expect(body.description).toBe('Best Insurance Awards 2020');
  });

  it.skip('Edit And Get An Occassion Successfully', async () => {
    const { body } = await createOccassion(server);
    const groups = ['GCB', 'Unique Trust', 'ADB'];

    const res = await editRecord(
      server,
      '/api/occassions/',
      body.id,
      {
        name: 'Ghana insurance Awards 2021',
        description: 'Best Insurance Awards 2021',
        groupings: { results: [...body.groupings.results, ...groups] },
      },
    );

    console.log(res.body);
    expect(res.body.groupings.results.length).toBe(5);
    expect(res.body.name).toBe('Ghana insurance Awards 2021');
    expect(res.body.description).toBe('Best Insurance Awards 2021');
  });

  it.skip('Delete An Occassion Successfully', async () => {
    const { body } = await createOccassion(server);
    const status = await deleteRecord(
      server,
      '/api/occassions/',
      body.id,
    );
    expect(status).toBe(404);
  });
});
