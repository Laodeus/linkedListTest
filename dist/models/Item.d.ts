import IItemParams from "./interfaces/IItemParams";
import IItem from "./interfaces/IItem";
export default class Item implements IItem {
    prev: IItem | null;
    data: any;
    hash: string;
    constructor(params: IItemParams);
    private hashData;
}
