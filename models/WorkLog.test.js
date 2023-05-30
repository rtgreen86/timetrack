/* eslint-env jest */

const WorkLog = require('./WorkLog');

describe('WorkLog', function () {
  let workLog;

  beforeEach(() => {
    workLog = new WorkLog();
  });

  beforeEach(() => {
    workLog.post({
      title: 'Generate Ideas',
      hours: 5,
      archived: true
    });
    workLog.post({
      title: 'Create Server',
      hours: 8
    });
    workLog.post({
      title: 'Create Client',
      hours: 10
    });
  });

  it('should return all works', () => {
    const actual = workLog.getAll();
    expect(actual).toHaveLength(3);
    expect(actual).toContainEqual(expect.objectContaining({
      title: 'Generate Ideas',
      hours: 5
    }));
    expect(actual).toContainEqual(expect.objectContaining({
      title: 'Create Server',
      hours: 8,
    }));
    expect(actual).toContainEqual(expect.objectContaining({
      title: 'Create Client',
      hours: 10
    }));
  });

  it('should get item by ID', () => {
    const [ expected ] = workLog.getAll();
    const actual = workLog.getById(expected.id);
    expect(actual).toEqual(expected);
  });

  it('should add items', () => {
    const expected = {
      title: 'Write Tests',
      hours: 3,
    };
    const addedItem = workLog.post(expected);
    expect(addedItem).toEqual(expect.objectContaining(expected));
    const list = workLog.getAll();
    expect(list).toHaveLength(4);
    const gettedElement = workLog.getById(addedItem.id);
    expect(gettedElement).toEqual(expect.objectContaining(expected));
  });

  it('should delete elements', () => {
    const [, expected] = workLog.getAll();
    workLog.delete(expected.id);
    const list = workLog.getAll();
    expect(list).toHaveLength(2);
  });

  it('should update element', () => {
    const [, expected] = workLog.getAll();
    expected.archived = true;
    expected.title = 'Create cool server';
    workLog.put({
      ...expected,
      title: 'Create cool server',
      archived: true,
    });
    const updatedItem = workLog.getById(expected.id);
    expect(updatedItem).toEqual({
      id: expected.id,
      title: 'Create cool server',
      hours: expected.hours,
      archived: true,
    });
  });
});
