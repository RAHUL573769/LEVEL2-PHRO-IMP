"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (modelQuery, query) => {
    if (query.searchTerm) {
        // console.log(modelQuery.model.schema.path('names'), 'path function')
        // console.log(modelQuery.model.schema.paths, 'paths array')
        const fieldValues = Object.values(modelQuery.model.schema.paths);
        const searchableFields = fieldValues
            .filter((fieldObj) => {
            if (fieldObj.instance === 'String') {
                return true;
            }
        })
            .map((fieldObj) => ({
            [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
        }));
        //   [
        //     {
        //         name: { $regex: query.searchTerm, $options: 'i' },
        //         },
        //         {
        //         startLocation: { $regex: query.searchTerm, $options: 'i' },
        //     }
        //   ]
        modelQuery.find({
            $or: searchableFields,
        });
    }
    return modelQuery;
};
exports.search = search;
