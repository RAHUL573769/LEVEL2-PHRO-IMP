use("eccomerce");

db.users.aggregate([
  //stage -1
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "user_id",
      as: "userOrders"
    }
  },
  {
    $match: {
      userOrders: {
        $size: 0
      }
    }
  },
  //proje
  {
    $project: {
      name: 1,
      email: 1
    }
  }
]);
