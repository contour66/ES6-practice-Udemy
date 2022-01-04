let myAccount = {
    name: 'Z Thind',
    expenses: 0,
    income: 0,
}
// let otherAccount = myAccount
// otherAccount.income = 1000

let addExpense = function (account, amount) {
    account.expenses  = account.expenses + amount
    // console.log(account);
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return{
        summary: "Amount for " + account.name + " has $" + balance + ". $" 
        + account.income + ". $" + account.expenses + "."
    }
   
}
addIncome(myAccount, 700)
addExpense(myAccount, 200);
addExpense(myAccount, 100);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
