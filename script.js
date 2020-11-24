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


    createTodoDiv();
    saveTodoToLocalStorage(newTodo);
}

// Create Todo-item DIV
function createTodoDiv() {
    // Browser wont refresh after clicking button.
    event.preventDefault();
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

    removeTodo(deleteButton, todoDiv);
}
// Remove todo from DOM and local storage.
function removeTodo(deleteButton, todoDiv) {
    deleteButton.addEventListener("click", () => {
        todoDiv.remove();
        localStorage.removeItem("Todo", newTodo);
    });
}

// Save to local storage
function saveTodoToLocalStorage(newTodo) {
    localStorage.setItem("Todo", newTodo);
}