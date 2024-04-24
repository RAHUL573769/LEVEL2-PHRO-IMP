const aaray = ["Mejbah", "Moin"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const array2 = [...aaray];
aaray.push("Firox");

//Function Currying
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(add(1)(2)(3));
console.log(aaray);
