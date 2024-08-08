// Stringss

let str = "Mohsin";
let str2 = "Shradha";

console.log(str2[4]);

// Template Literals

let obj = {
    item : "Pen",
    price: "14",
};

let output = `The cost of the ${obj.item} is ${obj.price} rupees.`;

console.log(output);

let specialString = `It is a special string with number of ${1+2-2}.`;
console.log(specialString);

let strn = ("Yo \twassup");
console.log(strn.length);

let ert = "Hello";
console.log(ert);  // Strings are Immutable || meaning :: Can't change ||
console.log(ert.toUpperCase());
console.log(ert.toLowerCase());

let wert = "   You know   Me     ";
console.log(wert);
console.log(wert.trim());

console.log(wert.slice(5)); // Slice

let res = strn.concat(wert);
console.log(res);

console.log(ert.replace("lo","p"));
console.log(ert.replace("el","m"));
console.log(ert.replaceAll("l","o"));
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));


let userName = prompt("Enter your full name without spaces:");

console.log("@"+userName+userName.length);
