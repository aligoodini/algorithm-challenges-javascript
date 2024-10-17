let questions = [
  { id: 1, q: "2+2 = ?", answer: 4 },
  { id: 2, q: "2+5 = ?", answer: 7 },
  { id: 3, q: "6+3 = ?", answer: 9 },
  { id: 4, q: "10-2 = ?", answer: 8 },
];

console.log(questions.le);

let score = 0;
let answerPromot = null;

for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].q);
  answerPromot = prompt(questions[i].q);
  if (Number(answerPromot) == questions[i].answer) {
    score += 1;
  }
}

console.log(score);
