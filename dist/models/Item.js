"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Item {
    constructor(params) {
        this.prev = null;
        Object.assign(this, params);
        this.hash = this.hashData(this);
    }
    hashData(data) {
        const hash = (0, crypto_1.createHash)('sha256');
        hash.update(JSON.stringify(data));
        return hash.digest('hex');
    }
}
exports.default = Item;
