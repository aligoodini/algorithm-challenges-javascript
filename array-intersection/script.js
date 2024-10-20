// ----------------------------------------------------------------------------- solution 1

function arrayIntersection(arr1, arr2) {
  let myArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !myArr.includes(arr1[i])) {
        myArr.push(arr1[i]);
      }
    }
  }

  return myArr;
}

console.log(arrayIntersection([1, 2, 3, 4, 4, 5], [4, 4, 5, 6, 7, 8]));

// ----------------------------------------------------------------------------- solution 2

function arrayIntersection2(arr1, arr2) {
  let myArr = [];

  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      myArr.push(item);
    }
  });
  let mySet = new Set(myArr);
  let finalArr = [...mySet];

  return finalArr;
}

console.log(arrayIntersection2([1, 2, 3, 4, 4, 5], [4, 4, 5, 6, 7, 8]));
