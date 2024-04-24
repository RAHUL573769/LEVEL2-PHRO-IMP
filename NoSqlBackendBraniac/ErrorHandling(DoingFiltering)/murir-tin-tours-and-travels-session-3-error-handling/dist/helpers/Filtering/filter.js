"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (modelQuery, query) => {
    const queryObj = Object.assign({}, query);
    const excludeFields = [
        'page',
        'searchTerm',
        'limit',
        'sort',
        'sortBy',
        'sortOrder',
        'fields',
    ];
    excludeFields.forEach((keyword) => delete queryObj[keyword]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modelQuery = modelQuery.find(queryObj);
    return modelQuery;
    // console.log('Query Obj After', queryObj)
};
exports.filter = filter;
