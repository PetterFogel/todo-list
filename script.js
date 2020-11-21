window.addEventListener("load", main);

function main() {
    addTodo();
    getTodoFromInputValue();
}

function getTodoFromInputValue() {

}

function addTodo() {
    // Fetch HTML input.
    const todoInput = document.getElementById("todo-input");
    const newTodo = todoInput.value;

    // Fetch HTML button.
    const addTodoButton = document.getElementById("submit-btn");
    addTodoButton.addEventListener("click", () => {
        // Browser dont resfresh when clicking button.
        event.preventDefault();
        console.log(todoInput.value)

        localStorage.setItem("Todo", todoInput.value);
    });   
}

// Skapa en tom array och pusha in todos.