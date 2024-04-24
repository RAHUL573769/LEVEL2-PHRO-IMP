use("apollo");
db.dataCollection.find();
// db.dataCollection.aggregate([
//   {
//     $group: {
//       _id: "$address.country",
//       nameOfCountry: {
//         $push: "$name"
//       }
//     }
//   }
// ]);

// db.dataCollection.aggregate([
//   {
//     $group: {
//       _id: "$address.country",
//       fullDoc: {
//         $push: "$$ROOT"
//       }
//     }
//   },
//   {
//     $project: {
//       "fullDoc.name": 1,
//       "fullDoc.email": 1
//     }
//   }
// ]);

db.dataCollection.aggregate([
  { $match: { gender: "Male", age: { $gt: 13 } } },
  {
    $project: {
      occupation: 1,
      age: 1
    }
  }
]);

db.dataCollection.aggregate([
  {
    $match: {
      gender: "Male"
    }
  },
  {
    $match: {
      age: { $gt: 14 }
    }
  },
  {
    $addFields: {
      newCourse: "Phero-Level2"
    }
  }
]);
db.dataCollection.aggregate([
  {
    $group: {
      _id: "$name.firstName",
      count: {
        $sum: 1
      }
    }
  }
]);

db.dataCollection.aggregate([
  {
    $unwind: "$friends"
  }
]);
