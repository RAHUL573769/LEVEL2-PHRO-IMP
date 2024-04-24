{
  let name: string[] = ["rahul", "rohit"];
  console.log(name);

  let any: any;
  any as number;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "number") {
      return "This is Number";
    } else {
      return "This is String";
    }
  };
  const output1 = kgToGram(1234);

  console.log(output1);
}
