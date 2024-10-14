let sum = 0
let promptValue = null
for(let i=1 ; i<=5 ; i++){
    promptValue = prompt(`عدد ${i} را وارد کنید`)
    sum += Number(promptValue)
}

alert(sum/5)