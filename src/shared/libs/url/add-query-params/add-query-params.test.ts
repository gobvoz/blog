import { getQueryParams } from './add-query-params';

describe('shared/url/add-query-params', () => {
  test('should add search string', () => {
    const queryString = getQueryParams({
      search: 'some string',
    });

    expect(queryString).toBe('?search=some+string');
  });

  test('should add 2 params', () => {
    const queryString = getQueryParams({
      search: 'some string',
      page: '1',
    });

    expect(queryString).toBe('?search=some+string&page=1');
  });

  test('should add 3 params', () => {
    const queryString = getQueryParams({
      search: 'some string',
      page: '1',
      order: 'asc',
    });

    expect(queryString).toBe('?search=some+string&page=1&order=asc');
  });

  test('should skip undefined params', () => {
    const queryString = getQueryParams({
      search: '',
      page: undefined,
      order: 'desc',
    });

    expect(queryString).toBe('?order=desc');
  });
});
