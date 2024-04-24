var fruitArray: Array<string> = ["pineapple", "banana"];

type GenericArray<T> = Array<T>;

var mentor: GenericArray<string> = ["Rahuk"];

var carObject: GenericArray<{ name: string; price: number }> = [
  {
    name: "Rahul",
    price: 1235
  }
];
