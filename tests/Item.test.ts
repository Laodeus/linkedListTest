// Item.test.ts ou Item.__tests__.ts

import Item from '../src/models/Item';
import IItemParams from '../src/models/interfaces/IItemParams';

describe('Item Class', () => {

  it('should create an Item instance with given parameters', () => {
    const params: IItemParams = {
      data: 'testData',
      prev: null,
    };

    const item = new Item(params);

    expect(item.data).toBe('testData');
    expect(item.prev).toBeNull();
    expect(item.hash).toBeDefined();
  });

  it('should generate a hash for the Item', () => {
    const params: IItemParams = {
      data: 'testData',
      prev: null,
    };

    const item = new Item(params);
    const expectedHash = item.hash;

    const anotherItem = new Item(params);
    const anotherHash = anotherItem.hash;

    expect(expectedHash).toBe(anotherHash);
  });

});