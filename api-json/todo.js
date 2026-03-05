const urlTodo = "https://jsonplaceholder.typicode.com/todos";


// {
//     "userId": 10,
//     "id": 199,
//     "title": "numquam repellendus a magnam",
//     "completed": true
// }


const loadTodo = () =>{
    fetch(urlTodo)
    .then(res => res.json())
    .then(data=> displayTodo(data))
} 

const displayTodo = todos=>{

const todoContainer = document.getElementById("todo-container");
todoContainer.innerHTML ='';

    todos.forEach(todo => {
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class='todo-card'>
            <p>${todo.completed == true ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-regular fa-square-check"></i>'}</p>
            <h4>${todo.title}</h4>
        </div>
        `;
        todoContainer.append(todoCard)
    });
} 




loadTodo()