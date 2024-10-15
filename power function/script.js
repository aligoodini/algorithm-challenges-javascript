let paye = Number(prompt("عدد پایه را وارد کنید"));
let power = Number(prompt("توان را وارد کنید"));

let result = 1;

for (let i = 1; i <= power; i++) {
  result = result * paye;
}

console.log(result);
