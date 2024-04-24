"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuery = void 0;
const filterHelper_1 = require("./filterHelper");
const serachHelper_1 = require("./serachHelper");
const sortHelper_1 = require("./sortHelper");
const paginateHelper_1 = require("./paginateHelper");
const fieldSelectHelper_1 = require("./fieldSelectHelper");
const getQuery = (modelQuery, query) => {
    const filteredQuery = (0, filterHelper_1.filter)(modelQuery, query);
    const searchedQuery = (0, serachHelper_1.search)(filteredQuery, query);
    const sortedQuery = (0, sortHelper_1.sort)(searchedQuery, query);
    const paginatedQuery = (0, paginateHelper_1.paginate)(sortedQuery, query);
    const selectedFieldQuery = (0, fieldSelectHelper_1.select)(paginatedQuery, query);
    return selectedFieldQuery;
};
exports.getQuery = getQuery;
