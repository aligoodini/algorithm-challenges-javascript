// ------------------------------------------------------------------------------ solution 1

function findMax(arr) {
  let findedNumber;
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > maxDiff) {
        maxDiff = Math.abs(arr[i] - arr[j]);
        if (arr[i] > arr[j]) {
          findedNumber = arr[i];
        } else {
          findedNumber = arr[j];
        }
      }
    }
  }

  return findedNumber;
}

// console.log(findMax([10, 5, 16, 2, 1, 3, 5, 45]));

// ------------------------------------------------------------------------------ solution 2

function findMaxNumber(arr) {
  return arr.sort((a, b) => b - a)[0];
}

// console.log(findMaxNumber([10, 5, 16, 2, 1, 3, 5, 45]));

// ------------------------------------------------------------------------------ solution 3

function findMaxNumber2(arr) {
//   console.log(arr);
//   console.log(Math.max(...arr));
  let num = Math.max(...arr);

  return num;
}

// console.log(findMaxNumber2([10, 5, 16, 2, 1, 3, 5, 45]));

// ------------------------------------------------------------------------------ solution 4

function findMaxNumber3(arr) {
  let num = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }

  return num;
}

console.log(findMaxNumber2([10, 5, 16, 2, 1, 3, 5, 45]))
