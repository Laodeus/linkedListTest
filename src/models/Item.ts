import { createHash } from 'crypto';
import IItemParams from "./interfaces/IItemParams";
import IItem from "./interfaces/IItem";

export default class Item implements IItem {
  prev: IItem | null = null;
  data: any;
  hash: string;

  constructor(params: IItemParams) {
    Object.assign(this, params);
    this.hash = this.hashData(this);
  }

  private hashData(data: any): string {
    const hash = createHash('sha256');
    hash.update(JSON.stringify(data));
    return hash.digest('hex');
  }
}
