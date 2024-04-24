"use strict";
{
    let name = ["rahul", "rohit"];
    console.log(name);
    let any;
    any;
    const kgToGram = (value) => {
        if (typeof value === "number") {
            return "This is Number";
        }
        else {
            return "This is String";
        }
    };
    const output1 = kgToGram(1234);
    console.log(output1);
}
