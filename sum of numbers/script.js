let myInput = prompt("enter your number");

let arr = myInput.split("");
console.log(arr);

// --------------------------------------------- way 1
let sum = arr.reduce((perv, current) => {
  return Number(perv) + Number(current);
}, 0);

console.log(sum);

// -------------------------------------------- way 2

let sumation = 0;

for (const i of myInput) {
  console.log(i);
  sumation += Number(i);
}

console.log(sumation);

// --------------------------------------------- way 3
let myNum = Number(myInput);
let sum2 = 0;
while (myNum) {
  sum2 += myNum % 10;
  myNum = Math.trunc(myNum / 10);
}

console.log(sum2);
