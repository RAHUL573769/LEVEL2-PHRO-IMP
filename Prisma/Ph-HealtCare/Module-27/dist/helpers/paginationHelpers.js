"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = void 0;
// type IOptionsReturn = {
//     page: number;
//     limit: number;
//     skip:number,
//     sortOrder: string;
//     sortBy: string;
//   };
const calculatePagination = (options) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (Number(page) - 1) * limit;
    const sortBy = options.sortOrder || "createdAt";
    const sortOrder = options.sortOrder || "desc";
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    };
};
exports.calculatePagination = calculatePagination;
