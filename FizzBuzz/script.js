function fizzBuzz(num) {
  let arr = [];
  let divid3 = 0;
  let divid5 = 0;
  for (let i = 1; i <= num; i++) {
    divid3 = i % 3;
    divid5 = i % 5;
    if (!divid3 && !divid5) {
      arr.push("fizzBuzz");
    } else {
      if (!divid3) {
        arr.push("fizz");
      } else if (!divid5) {
        arr.push("buzz");
      } else {
        arr.push(i);
      }
    }
  }

  return arr;
}

console.log(fizzBuzz(20));
