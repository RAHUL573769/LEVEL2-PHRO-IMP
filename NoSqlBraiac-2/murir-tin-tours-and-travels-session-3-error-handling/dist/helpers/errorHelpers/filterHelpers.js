"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (modelQuery, queryObj) => {
    //
    const excludeFields = [
        'page',
        'searchTerm',
        'limit',
        'sortBy',
        'sortOrder',
        'fields',
    ];
    excludeFields.forEach((keyword) => delete queryObj[keyword]);
    const query = modelQuery.find(queryObj);
    return query;
};
exports.filter = filter;
