const account = {
    name: 'Zamir',
    expenses: [
        // {
        //     description: 'Groceries',
        //     amount: 100
        // }
    ],
    income: [
        // {
        //     description: 'Dog Walking',
        //     amount: 50
        // }
    ],
    addExpense: (description, amount) => {
        account.expenses.push({ description, amount })
    },
    addIncome: (description, amount) => {
        account.income.push({ description, amount })
    },

    // getAccountSummary: ()=> {
    //     let sum = 0
    //     account.expenses.forEach((expense) => {  
    //         sum +=  expense.amount
    //         })
    //         console.log('Sum: ' + sum)
    //    return`${account.name} has $${sum} in expenses.`
    // },

    getIncome: function () {
        let sum = 0
        account.income.forEach((income) => {
            sum += income.amount
        })
        return sum
    },
    getExpenses: function () {
        let sum = 0
        account.expenses.forEach((expense) => {
            sum += expense.amount
        })
        return sum
    },
    getBalance: function () {
        return this.getIncome() - this.getExpenses()
    },
    getAccountSummary: function () {
        return `${this.name} has a balance of $${this.getBalance()}. $${this.getIncome()} in income. $${this.getExpenses()} in expenses.`
    }
}

// console.log(account)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
// console.log(account)
// console.log(account.getAccountSummary())
account.addIncome('Job', 1000)
account.addIncome('Side Hustle', 400)
console.log(account)
console.log(account.getAccountSummary())