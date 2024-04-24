let anything: any;
anything = "Next Level Developer";

(anything as string).length;

const kgToGram = (value: "string" | "number"): string | number | undefined => {
  if (typeof value === "string") {
    return `The value is ${value}`;
  } else if (typeof value === "number") {
    return value;
  } else {
    return undefined;
  }
};

const namesArray: string[] = ["Raul"];

const ourTuple: readonly [boolean, string] = [false, "Rahul"];

console.log(ourTuple);
const user: {
  firstName: string;
  middleName: string;
  company: "Rahuk"; //litersal
} = {
  firstName: "Rahul",
  middleName: "Rudr,,a",
  company: "Rahuk"
};

console.log(user);

const graph: [x: number, y: number] = [222.5, 12.3];
console.log(graph);
const poorUser7: {
  name: string;
  addBalance: () => string;

  newBalance: () => number;
} = {
  name: "Rahul",
  addBalance(): string {
    return "Hello";
  },
  newBalance() {
    return 45;
  }
};
const mentor1: {
  react: string;
  prisma: string;
  cloud: string;
} = {
  react: "Mir",
  prisma: "Salim",
  cloud: "eraks"
};

const mentors = {
  ...mentor1
};

console.log(mentors);

const { ...mentorsRest } = mentor1;
console.log("55", mentorsRest);
