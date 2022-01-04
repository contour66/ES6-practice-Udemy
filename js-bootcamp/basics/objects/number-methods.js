let num = 84.567

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let ran = Math.floor( Math.random() * (max - min  + 1)) + min
console.log(ran)



let guessNum = function(guess){
    let min = 1
    let max = 5
    let ran = Math.floor(Math.random() * (max - min + 1)) + min
    return guess  == ran
}

console.log("5 " + guessNum(5))
console.log("3.33 " + guessNum(3.33))
console.log("522 " + guessNum(522))
console.log("1 " + guessNum(1))
console.log("3 " + guessNum(1))
