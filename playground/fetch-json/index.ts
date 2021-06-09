import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodoData(id, title, completed)
})

const logTodoData = (id: number, title: string, completed: boolean) => {
  console.log(`The todo with id: ${id}
    Has at title of: ${title}
    Is it finished? ${completed}
  `)
}
