function counterVowel(str) {
  let txt = str.toLowerCase().split("");

  let counter = 0;

  txt.forEach((elem) => {
    if (
      elem == "o" ||
      elem == "a" ||
      elem == "i" ||
      elem == "e" ||
      elem == "u"
    ) {
      counter++;
    }
  });

  console.log(counter);
}


counterVowel("ali goodini")