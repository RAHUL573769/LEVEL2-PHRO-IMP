use("apollo");

db.dataCollection.find();
db.dataCollection.aggregate({ $match: { gender: "Male" } });
db.dataCollection.aggregate([
  { $match: { gender: "Male" } },
  {
    $addFields: {
      course: "pHERO-Level2"
    }
  },
  {
    $out: "course-students"
  }
]);
db.dataCollection.aggregate([
  { $group: { _id: "$gender", count: { $sum: 1 } } }
]);

db.dataCollection.aggregate([
  {
    $group: {
      _id: "$address.country",
      nameOfCountry: {
        $push: "$name"
      }
    }
  }
]);
