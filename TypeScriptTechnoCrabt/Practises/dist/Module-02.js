"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
let anything;
anything = "Next Level Developer";
anything.length;
const kgToGram = (value) => {
  if (typeof value === "string") {
    return `The value is ${value}`;
  } else if (typeof value === "number") {
    return value;
  } else {
    return undefined;
  }
};
const namesArray = ["Raul"];
const ourTuple = [false, "Rahul"];
console.log(ourTuple);
const user = {
  firstName: "Rahul",
  middleName: "Rudr,,a",
  company: "Rahuk"
};
console.log(user);
const graph = [222.5, 12.3];
console.log(graph);
const poorUser7 = {
  name: "Rahul",
  addBalance() {
    return "Hello";
  },
  newBalance() {
    return 45;
  }
};
const mentor1 = {
  react: "Mir",
  prisma: "Salim",
  cloud: "eraks"
};
const mentors = Object.assign({}, mentor1);
console.log(mentors);
const mentorsRest = __rest(mentor1, []);
console.log(mentorsRest);
