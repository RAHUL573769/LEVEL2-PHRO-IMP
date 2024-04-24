"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const sort = (modelQuery, query) => {
    if (query.sortBy && query.sortOrder) {
        const sortBy = query.sortBy; //price
        const sortOrder = query.sortOrder;
        const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`;
        modelQuery.sort(sortStr);
    }
    return modelQuery;
};
exports.sort = sort;
