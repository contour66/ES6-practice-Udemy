// Multiple arguments
let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result) 

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
}


let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge area

// let getTip = function(total, tipPercent = .2){
//     return 'Tip amount: ' + tipPercent * 100 + '% * $' + total + ' = $' + tipPercent   * total 
// }

let getTip = function(total, tipPercent = .2){
    let tip = total * tipPercent
    let percent = tipPercent * 100
    return `A ${percent}% on $${total} would be $${tip}`

    // return `A ${tipPercent * 100}% on $${total} would be $${total * tipPercent}`
}

let printTipOne = getTip(20, undefined)
let printTipTwo = getTip(20, .5)
let printTipThree = getTip(20, .1)
let printTipFour = getTip(20, 1)
console.log(printTipOne)
console.log(printTipTwo)
console.log(printTipThree)
console.log(printTipFour)


//STRING TEMPLATES
let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)



