let myInput = Number(prompt("یک عدد را وارد کنید"));

let result = 1;

for (let i = 1; i <= myInput; i++) {
  if (myInput == 0) {
    result = 1;
  }

  console.log(result);
  result = result * i;
}

console.log(result);
