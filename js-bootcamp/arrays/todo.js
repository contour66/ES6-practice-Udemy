const todos= [
    {
        text: 'Order food',
        completed: true
    }, 
    {
        text:'Clean kitchen',
        completed: false
    }, 
    {
        text:'Buy food',
        completed: false
    }, 
    {
        text:'Do work',
        completed: true
    }, 
    {
        text:'Exercise',
        completed: true
    }]
// console.log(todos)
// todos.splice(2,1)
// console.log(todos)
// todos.push('Music')
// console.log(todos)
// todos.shift()
// console.log(todos)


// todos.forEach(function(todo, index){
//     console.log(`${index + 1}. ${todo}`)
// })
// console.log(todos)
// const deleteTodo = todos.findIndex(function(text){ 
//     const index = todos.findIndex(text) 
//    console.log(index)
//     }



console.log(todos)

// DELETE TODOS
const deleteTodo = function(todos, text){
    console.log('Text to delete: ' + text)
    const index = todos.findIndex(function(todo, index){
        // console.log(todo.text + ' ' + (todo.text === text))
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if(index >= -1){
        todos.splice(index, 1)
    }
}
// deleteTodo(todos, 'Buy FOOD!!')
// console.log(todos)
// **************
//FILTER TODOS BY NOT DONE
const getNotDone = function(todos){
    return todos.filter(function(todo){
        // const isFalse = 
        return !todo.completed
    })

}
// console.log(getNotDone(todos))


//SORT METHOD 
const sortTodos = function(todos){
    todos.sort(function(a,b){
        console.log('A: ' + a + ' B: ' + b )
        if(!a.completed && b.completed){
            return -1
        }else if(a.completed && !b.completed){
            return 1
        }else{
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)