const notes = [{
    title: 'My next trip',
    body: 'I would like to get to spain'
    },
    {
     title: 'Get ripped',
    body: 'Workout a lot'
    },
    {
        title: 'Office mod',
    body: 'Get a new seat'
    }

]



//FIND METHOD EXAMPLE
const findNote = function (notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
   
}



//FILTER METHOD EXAMPLE
const findNotes = function (notes, query) {
   return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes, 'et'))
// const findNote = function (notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


const note = findNote(notes, 'Office mod')
// console.log(note)


// console.log(']')
//SORT METHOD
const sortNotes = function (notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }else if (a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)
// console.log(notes.length)
// console.log(notes[0])

// console.log(notes.pop())
// notes.push('New note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1,  'This is the new secont item')


// notes[2] = 'This is now the new note 3'


// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// })
// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Get ripped'
// })
// console.log(index)
