function removeDuolicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        console.log(arr[i], arr[j]);
        let index = arr.indexOf(arr[j]);
        arr.splice(index, 1);
      }
    }
  }

  console.log(arr);
}

// removeDuolicate([2, 2, 2, 1, 1, 3, 4, 6, 4, 5, 6, 6, 1001, 1001, 1]);

function removeDuolicate2(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr)
}


removeDuolicate2([2, 2, 2, 1, 1, 3, 4, 6, 4, 5, 6, 6, 1001, 1001, 1])