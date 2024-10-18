// ------------------------------------------------ solution 1

function CountOccurrences(word, letter) {
  let arr = word.split("");
  let counter = 0;

  arr.forEach((element) => {
    if (element == letter) {
      counter++;
    }
  });

  return counter;
}

// console.log(CountOccurrences("apple", "p"));
// console.log(CountOccurrences("ali goodini", "i"));

// ------------------------------------------------------ solution 2

function CountOccurrences2(word, letter) {
  let counter = 0;

  for (const x of word) {
    if (x == letter) {
      counter++;
    }
  }

  return counter;
}

console.log(CountOccurrences("apple", "p"));
console.log(CountOccurrences("ali goodini", "i"));

// ----------------------------------------------------- solution 3
console.log("ali goodini".split("i"));

