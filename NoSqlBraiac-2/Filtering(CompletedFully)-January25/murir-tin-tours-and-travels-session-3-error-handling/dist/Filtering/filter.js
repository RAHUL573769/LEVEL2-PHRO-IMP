"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (modelQuery, query) => {
    // eslint-disable-next-line no-unused-expressions
    const queryObj = Object.assign({}, query);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const excludedObj = [
        'page',
        'fields',
        'searchTerm',
        'limit',
        'sortBy',
        'sortOrder',
    ];
    excludedObj.forEach((keyword) => delete queryObj[keyword]);
    modelQuery = modelQuery.find(queryObj);
    return modelQuery;
};
exports.filter = filter;
