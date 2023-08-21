import IItem from "./IItem";


export default interface ITree {
    append: (data: any) => IItem;
  }