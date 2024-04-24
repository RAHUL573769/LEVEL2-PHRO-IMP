var peopleDetails: {
  name: string;
  age: number;
  address: {
    city: string;
    postoffice: string;
  };
} = {
  name: "Rahul",
  age: 27,
  address: {
    city: "Chattogram",
    postoffice: "4000"
  }
};

type ProductMain = {
  name: string;
  price: number;
  quantity: number;
  specifications: {
    color: string;
    type: string;
  };
};
var Product: ProductMain = {
  name: "Ryan Computer",
  price: 1000,
  quantity: 2,
  specifications: {
    color: "Blue",
    type: "Laptop"
  }
};
