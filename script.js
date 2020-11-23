window.addEventListener("load", main);

function main() {
    createTodoList();
}

function createTodoList() {
    const addTodoButton = document.getElementById("submit-btn");
    addTodoButton.addEventListener("click", createTodo);
}

function createTodo() {
    // Fetch HTML input and button.
    const todoInput = document.getElementById("todo-input");
    newTodo = todoInput.value

    console.log(newTodo);
    createTodoDiv(newTodo);
}

// Create Todo-item DIV
function createTodoDiv(newTodo) {
    event.preventDefault();

    const todoList = document.querySelector(".todo-list");
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");
    todoItem.innerText = newTodo;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("i");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add("delete")
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    removeTodo(deleteButton, todoDiv);
}

function removeTodo(deleteButton, todoDiv) {
    deleteButton.addEventListener("click", () => {
        todoDiv.remove();
    });
}