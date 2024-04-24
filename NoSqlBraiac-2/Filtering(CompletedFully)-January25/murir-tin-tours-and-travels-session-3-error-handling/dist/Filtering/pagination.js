"use strict";
// 1st page---->10 tours  (01-10)
//2nd page-->10 pages (11-20)
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const pagination = (modelQuery, query) => {
    if (query.page || query.limit) {
        const page = Number(query.page);
        const limit = Number(query.limit);
        const skip = (page - 1) * limit;
        modelQuery.skip(skip).limit(100);
    }
    else {
        modelQuery.skip(0).limit(10);
    }
    return modelQuery;
};
exports.pagination = pagination;
