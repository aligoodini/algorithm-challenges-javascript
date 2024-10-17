let inputValue = prompt("enter your number : ");

let arr = [1, 1];

let i = 0;

while (i <= Number(inputValue)-3) {
  arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
  i++;
}

alert(arr);
