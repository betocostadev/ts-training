// Fetch fake json data from https://jsonplaceholder.typicode.com/

import axios from 'axios'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const theTodo = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(theTodo)
  .then(response => { 
    const todo = response.data as Todo
    const id = todo.id
    const title = todo.title
    const done = todo.completed
    
    console.log(`
      Showing data of the TODO: #${id}
      Title: ${title}
      Is completed: ${done}
    `)
  })