import storage from '../storage';

describe('Storage service', () => {
  beforeEach(() => {
    storage.clear();
    storage.set('TEST', true);
    storage.set('TEST1', { '123': { title: 'test title' } });
    storage.set('FAVORITE', { '123': { title: 'test title' } });
  });

  test('value is not set for a key', () => {
    expect(storage.get('NOT_DEFINED')).toBeFalsy();
    expect(storage.get('NOT_DEFINED')).toBeFalsy();
  });

  test('value is set for a key', () => {
    expect(storage.get('TEST')).toBeTruthy();
  });

  test('value is a hash map object', () => {
    expect(storage.get('TEST1')).toStrictEqual({
      123: {
        title: 'test title',
      },
    });
  });
});
