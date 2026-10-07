function addTodo() {

    let input = document.getElementById("todoInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">
            Delete
        </button>
    `;

    document.getElementById("todoList").appendChild(li);

    input.value = "";
}


function deleteTodo(button) {

    button.parentElement.remove();

}