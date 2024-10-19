// -------------------------------------------------------- solution 1

function titleCase(str) {
  let txt = str.toLowerCase().split("");

  txt.map((elem, index) => {
    txt[0] = txt[0].toUpperCase();
    if (elem == " ") {
      txt[index + 1] = txt[index + 1].toUpperCase();
    }
  });
  //   console.log(txt.join(""));
}

// -------------------------------------------------------- solution 2

function titleCase2(str) {
  let txt = str.toLowerCase().split(" ");

  for (let i = 0; i < txt.length; i++) {
    if (i == txt.length - 1) {
      txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
    } else {
      txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1) + " ";
    }
  }

  //   console.log(txt.join(""));
}

// titleCase2("ALI GOODINI");

// -------------------------------------------------------- solution 2

function titleCase3(str) {
  let txt = str.toLowerCase();
  return txt.replace(/\b\w/g, (item) => item.toUpperCase());
}

console.log(titleCase3("ALI GOODINI"));
