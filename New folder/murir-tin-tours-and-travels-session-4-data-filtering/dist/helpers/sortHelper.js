"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const sort = (modelQuery, query) => {
    if (query.sortBy && query.sortOrder) {
        const sortBy = query.sortBy; //"price" | "duration" | "ratingsAverage"
        const sortOrder = query.sortOrder; //"asc" | "desc"
        const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
        modelQuery.sort(sortStr);
        // Tour.find().sort('price')
    }
    return modelQuery;
};
exports.sort = sort;
