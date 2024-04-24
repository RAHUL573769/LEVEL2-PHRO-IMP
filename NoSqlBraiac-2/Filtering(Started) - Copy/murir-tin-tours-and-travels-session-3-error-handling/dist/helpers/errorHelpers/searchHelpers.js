"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const search = (modelQuery, query) => {
    if (query.searchTerm) {
        // console.log('Model Query Single', modelQuery.model.schema.path('name'))
        // console.log(
        //   '----------Model Query Mingle-----',
        //   modelQuery.model.schema.paths,//array
        // )
        const fieldValues = Object.values(modelQuery.model.schema.paths);
        const searchableFields = fieldValues
            .filter((fieldObj) => {
            // console.log(fieldObj);
            // Here fieldobj=modelQuery.model.schema.path(fieldObj.path)
            if (fieldObj.instance === 'String') {
                return true; //
                // modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
                //name:"Historic"
                //  return [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
                // Output of above name":"Historic"
            }
        })
            .map((fieldObj) => ({
            [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
        }));
        //start from 35 minute
        // console.log('Searchable Fields', searchableFields)
        //   modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' }
        // })
        modelQuery.find({
            $or: searchableFields,
        });
    }
    return modelQuery;
};
exports.search = search;
