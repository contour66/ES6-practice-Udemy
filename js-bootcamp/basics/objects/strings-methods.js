let name = ' Mike '

// Length property

console.log(name.length)


// Convert to uppercase

console.log(name.toUpperCase())


// Search string
let password = 'Abc123password'
console.log(password.includes('password'))

// Trim
console.log(name.trim())


// Challenge

let isValidPassword = function(password) {
              
    
    return password.length > 8 && !password.includes('password') 


    // if(password.length > 8 && !password.includes('password')){
    //     console.log(password + " is valid.")
    //     return true
    // }
    // else{
    //     // console.log(password + " is not valid.")
    //     return false
    // }
}

let p2 = "Abfdsfl4kjt045"
console.log(isValidPassword("SDf$GFDGDFH"))
console.log(isValidPassword(password))
console.log(isValidPassword(p2))