const add = (num1, num2) => {
  return num2 + num1;
};

const fs = require("fs");
const readOutput = fs.readFileSync("books.txt", "utf-8");
console.log(readOutput);

const writeText = fs.writeFileSync(
  "books.txt",
  readOutput + "This is New Text"
);

console.log(writeText);
module.exports = { add };
