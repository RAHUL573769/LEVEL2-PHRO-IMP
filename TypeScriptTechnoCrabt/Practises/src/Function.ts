const addArrow = (a: number, b: number): number => {
  return a + b;
};
const result = addArrow(6, 7);

const poorUser = {
  name: "Mezbah",
  balance: 0,
  addBalance(balance: number): string {
    return `My new Bance ${this.balance}`;
  }
};
const output = poorUser.addBalance(2);
console.log(output);

const greetFriends = (...friendsName: string[]): string[] => {
  return friendsName;
};

const names = greetFriends("Kabil", "Babul", "Sabul");
console.log(names);

const { name2, balance, addBalance } = {
  name2: "Mezbah",
  balance: 0,
  addBalance(balance: number) {
    return `My new Bance ${this.balance}`;
  }
};

console.log(addBalance(3));
//type aliasing
type Student = {
  name: string;
  middleName: string;
  lastName?: string;
};
const student: Student = {
  name: "RAahul",
  middleName: "Rudra"
};

const getSpeedInMeters = (value: unknown) => {
  console.log(value);

  //   if(typeof(value)==="number"){
  //     const
  //   }
  // };
};
const v = getSpeedInMeters(12);

console.log(v);
