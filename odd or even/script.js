const input = document.querySelector("input");

document.querySelector("button").addEventListener("click", () => {
  if (input.value.trim()) {
    let num = input.value.trim() % 2;

    if (num) {
      alert("عدد فرد است");
    } else alert("عدد زوج است");
  }
});
