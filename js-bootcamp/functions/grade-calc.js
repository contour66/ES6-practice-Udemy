//students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
let getScore = function (score, totalScore) {
    let total = (score / totalScore) * 100;
    let grade = ''
    if (total >= 90) {
        grade = 'A'
    } 
    else if (total >= 80 ) {
        grade = 'B'
    } 
    else if (total >= 70 ) {
        grade = 'C'
    }
    else if (total >= 60 ) {
        grade = 'D'
    }
    else{
        grade = 'F'       
    }
    return console.log(`You got a ${grade} (${total}%)!`)
}

getScore(15, 20)
getScore(59, 100)
getScore(19, 20)
getScore(80, 100)