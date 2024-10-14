let allCharecters = "1234567890qwertyuiopasdfghjklzxcvbnm";
let myCharecter = "";
let randomIndex = null

for (let i = 1; i <= 6; i++) {
  randomIndex = Math.floor(Math.random() * allCharecters.length) + 1;
  myCharecter = myCharecter + allCharecters[randomIndex];
}

alert(myCharecter)
