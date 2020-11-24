window.addEventListener("load", main);

function main() {
    createTodoList();
}

function createTodoList() {
    const addTodoButton = document.getElementById("submit-btn");
    addTodoButton.addEventListener("click", addTodo);
}

function addTodo() {
    // Fetch HTML input and button.
    const todoInput = document.getElementById("todo-input");
    newTodo = todoInput.value

    createTodoDiv(newTodo);
}

// Create Todo-item DIV
function createTodoDiv(newTodo) {
    // Browser wont refresh after clicking button.
    event.preventDefault();
    // Save todo to local storage
    saveTodoToLocalStorage(newTodo);
    // Fetch ul todo-list from HTML
    const todoList = document.querySelector(".todo-list");
    // Creating a div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    // Creating a li for ul and div.
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");
    todoItem.innerText = newTodo;
    todoDiv.appendChild(todoItem);
    // Delete button for removing todo item.
    const deleteButton = document.createElement("i");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add("delete")
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);


    removeTodo(deleteButton, todoDiv, newTodo);

}
// Remove todo from DOM.
function removeTodo(deleteButton, todoDiv) {
    deleteButton.addEventListener("click", () => {
        todoDiv.remove();
        removeTodoFromLocalStorage(todoDiv);
    });
}

// Save todo to local storage
function saveTodoToLocalStorage(newTodo) {
    let todos;
    
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove todo from local storage
function removeTodoFromLocalStorage(todoDiv) {
    let todos;
    
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todoDiv.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
} 