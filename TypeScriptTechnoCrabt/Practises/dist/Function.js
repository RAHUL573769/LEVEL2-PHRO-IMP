"use strict";
const addArrow = (a, b) => {
    return a + b;
};
const result = addArrow(6, 7);
const poorUser = {
    name: "Mezbah",
    balance: 0,
    addBalance(balance) {
        return `My new Bance ${this.balance}`;
    }
};
const output = poorUser.addBalance(2);
console.log(output);
const greetFriends = (...friendsName) => {
    return friendsName;
};
const names = greetFriends("Kabil", "Babul", "Sabul");
console.log(names);
const { name2, balance, addBalance } = {
    name2: "Mezbah",
    balance: 0,
    addBalance(balance) {
        return `My new Bance ${this.balance}`;
    }
};
console.log(addBalance(3));
const student = {
    name: "RAahul",
    middleName: "Rudra"
};
const getSpeedInMeters = (value) => {
    console.log(value);
    //   if(typeof(value)==="number"){
    //     const
    //   }
    // };
};
const v = getSpeedInMeters(12);
console.log(v);
