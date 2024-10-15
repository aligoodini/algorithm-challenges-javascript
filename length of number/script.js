let myInput = prompt("enter your number");


// ---------------------------------- way 1
console.log(myInput.length);

// ---------------------------------- way 2

console.log(myInput.split("").length);

// -------------------------------------- way 3

let counter = 0;
let myNum = Number(myInput);

while (myNum) {
  myNum = Math.trunc(myNum / 10);

  counter += 1;
}

console.log(counter);
