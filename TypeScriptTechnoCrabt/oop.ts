class Animal {
  name: string;
  species: string;
  sound: string;
  constructor(name: string, species: string, sound: string) {
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
  bodyColor: string;
  gender: string;

  constructor(bodyColor: string, gender: string) {
    this.bodyColor = bodyColor;
    this.gender = gender;
  }
}

class Rahul extends ParentPeople {
  name: string;
  constructor(name: string, bodyColor: string, gender: string) {
    super(bodyColor, gender);
    this.name = name;
  }
  fullName() {
    console.log(`${this.name} is ${this.gender}`);
  }
}

const person1 = new Rahul("Ra", "white", "nale");

console.log(person1.fullName());
