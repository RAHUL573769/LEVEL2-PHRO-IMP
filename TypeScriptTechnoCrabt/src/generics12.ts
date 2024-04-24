{
  let name: string[] = ["rahul", "rohit"];
  console.log(name);

  const rollNumber: Array<number> = [1, 2, 3, 4];
  console.log(rollNumber);

  type GenericArray<T> = Array<T>;

  const fruitsName: GenericArray<string> = ["Rahul"];
  console.log(fruitsName);

  type studentType = {
    name: string;
    age: number;
  };
  type student2 = studentType & {
    role: string;
  };

  const newStudent: student2 = {
    age: 23,
    name: "Rahul Rudra",
    role: "Student"
  };

  console.log(newStudent);
  const user1: studentType = {
    name: "Rahul Rudra",
    age: 23
  };

  console.log(user1);

  interface nameProperties {
    name: string;
    age: 234;
  }
  interface namePropertiesNew extends nameProperties {
    color: string;
  }

  const user4: namePropertiesNew = {
    name: "Rahul",
    age: 234,
    color: "blue"
  };

  type role = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const number4: Roll2 = [2, 3, 4];
  console.log(number4);

  interface Add {
    (num5: number, num6: number): number;
  }

  ///////Generic Types

  type GenericArray1<params> = Array<params>;
  const rollNu: GenericArray1<number> = [12];

  const mentors: GenericArray1<string> = ["Rahul"];
  console.log(mentors);

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
    };
    smartWatch: T;
  }
  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Rahul",
    computer: {
      brand: "gegs",
      model: "rahed"
    },
    smartWatch: {
      brand: "Rsvf",
      model: "wdawd",
      display: "242"
    }
  };
  console.log(poorDeveloper);

  //Generic Types with interfacea

  interface person<T> {
    name: string;
    age: number;
    hobbies: T;
  }
  const Rahul: person<{
    name: string;
  }> = {
    name: "Ess",
    age: 34,
    hobbies: {
      name: "Gardening"
    }
  };
  console.log("Rahul Characters is", Rahul);

  const functionWithGeneric = <T>(params: T): string => {
    return "Hello";
  };
  const output = functionWithGeneric<boolean>(false);
  console.log(output);
}
