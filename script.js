const form = document.getElementById("form")
const list = document.getElementById("task-list")
const listTab = [];

form.addEventListener("submit", fetchValue)

function fetchValue(event) {
    event.preventDefault();
}