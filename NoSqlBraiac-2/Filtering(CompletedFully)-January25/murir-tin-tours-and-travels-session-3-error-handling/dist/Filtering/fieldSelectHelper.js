"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
const select = (modelQuery, query) => {
    if (query.fields) {
        const fields = query.fields.split(',').join(' ');
        modelQuery.select(fields);
    }
    return modelQuery;
};
exports.select = select;
