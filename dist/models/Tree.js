"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Tree {
    constructor() {
        this.items = [];
    }
    append(data) {
        const itemParams = {
            data,
            prev: !this.items.length ? null : this.items[this.items.length - 1],
        };
        const newData = new Item_1.default(itemParams);
        this.items.push(newData);
        return newData;
    }
}
exports.default = Tree;
