import { parseObjectToQuery, parseQueryToObject } from '.';

describe('Filter', () => {
  it('shoud parse query to object', () => {
    expect(parseQueryToObject('?field1=1&field2=2')).toMatchInlineSnapshot(`
      Object {
        "field1": "1",
        "field2": "2",
      }
    `);
  });

  it('shoud parse object to query', () => {
    expect(
      parseObjectToQuery({
        field1: 1,
        field2: 2,
      }),
    ).toMatchInlineSnapshot(`"field1=1&field2=2"`);
  });
});
