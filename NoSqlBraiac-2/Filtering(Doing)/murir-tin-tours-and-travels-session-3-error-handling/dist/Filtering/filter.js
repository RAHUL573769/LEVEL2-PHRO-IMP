"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (model, queryObj) => {
    console.log('Before Excluding From Filter', queryObj);
    const excludeField = [
        'page',
        'searchTerm',
        'limit',
        'sortBy',
        'sortOrder',
        'fields',
    ];
    excludeField.forEach((keyword) => delete queryObj[keyword]);
    console.log('After Excluding From Filter', queryObj);
    const query = model.find(queryObj);
    return query;
};
exports.filter = filter;
