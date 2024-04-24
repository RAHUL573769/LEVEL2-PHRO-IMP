"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} makes ${this.sound}`);
    }
}
const dog = new Animal("Rahul", "German", "Bark");
dog.makeSound();
class ParentPeople {
    constructor(bodyColor, gender) {
        this.bodyColor = bodyColor;
        this.gender = gender;
    }
}
class Rahul extends ParentPeople {
    constructor(name, bodyColor, gender) {
        super(bodyColor, gender);
        this.name = name;
    }
    fullName() {
        console.log(`${this.name} is ${this.gender}`);
    }
}
const person1 = new Rahul("Ra", "white", "nale");
console.log(person1.fullName());
