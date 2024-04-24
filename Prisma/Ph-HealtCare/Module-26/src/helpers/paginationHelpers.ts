type IOptions = {
  page?: number;
  limit?: number;
  sortOrder?: string;
  sortBy?: string;
};
// type IOptionsReturn = {
//     page: number;
//     limit: number;
//     skip:number,
//     sortOrder: string;
//     sortBy: string;
//   };

export const calculatePagination = (options: IOptions) => {
  const page: Number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 10;
  const skip: number = (Number(page) - 1) * limit;
  const sortBy: string = options.sortOrder || "createdAt";
  const sortOrder: string = options.sortOrder || "desc";
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  };
};
