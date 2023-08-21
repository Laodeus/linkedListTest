import Item from "./Item";
import IItemParams from "./interfaces/IItemParams";
import IItem from "./interfaces/IItem";
import ITree from "./interfaces/ITree";



export default class Tree implements ITree {
  private items: IItem[];

  constructor() {
    this.items = [];
  }

  append(data: any) {
    const itemParams: IItemParams = {
      data,
      prev: !this.items.length ? null : this.items[this.items.length - 1],
    };

    const newData: any = new Item(itemParams);

    this.items.push(newData);

    return newData;
  }
}
