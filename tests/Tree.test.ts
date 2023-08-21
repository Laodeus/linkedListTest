import Tree from "../src/models/Tree";

describe('Tree', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new Tree();
  });

  describe('append', () => {
    it('should add a new item to the tree', () => {
      const data = "testData";
      const item = tree.append(data);

      expect(item.data).toBe(data);
      expect(item.prev).toBeNull();
    });

    it('should link the new item to the previous item', () => {
      const firstData = "firstData";
      const secondData = "secondData";

      const firstItem = tree.append(firstData);
      const secondItem = tree.append(secondData);

      expect(secondItem.prev).toBe(firstItem);
    });
  });
});