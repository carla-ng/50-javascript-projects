const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')


// Get info from localStorage
const todos = JSON.parse(localStorage.getItem('todos'))
if ( todos ) {
    todos.forEach(todo => addTodo(todo))
}


// Enter to-do
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})


// Add new to-do
function addTodo(todo) {
    let todoText = input.value

    if ( todo ) {
        todoText = todo.text
    }

    if ( todoText ) {
        // Create todo HTML element
        const todoElem = document.createElement('li')
        if ( todo && todo.completed ) {
            todoElem.classList.add('completed')
        }
        todoElem.innerText = todoText

        // Complete to-do
        todoElem.addEventListener('click', () => {
            todoElem.classList.toggle('completed')
            updateLocalStorage()
        }) 

        todosUL.appendChild(todoElem)

        input.value = ''

        updateLocalStorage()
    }
}

function updateLocalStorage() {
    todosElem = document.querySelectorAll('li')

    const todos = []
    todosElem.forEach(todoElem => {
        todos.push({
            text: todoElem.innerText,
            completed: todoElem.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}