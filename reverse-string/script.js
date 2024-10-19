// ---------------------------------------------- solution 1

function reverseString(str) {
  let txt = str.split("").reverse();

  return txt.join("");
}

// console.log(reverseString("ali"));

// ---------------------------------------------- solution 2

function reverseString2(str) {
  let txt = str.split("");
  let newTxt = [];

  for (let i = 0; i < txt.length; i++) {
    newTxt.push(txt[txt.length - 1 - i]);
  }

  return newTxt.join("");
}

console.log(reverseString2("goodini"));
