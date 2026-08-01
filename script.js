const form = document.getElementById("form")
const list = document.getElementById("task-list")
const listTab = [];

form.addEventListener("submit", fetchValue)

function fetchValue(event) {
    event.preventDefault();
    const input = document.querySelector(".input-field");
    const listItem = document.createElement("li")
    const value = input.value;
    listItem.innerHTML = `<div>${value}</div><button type="button" class="delete-btn"><span class="material-symbols-outlined">delete</span></button>`
    listItem.className = "task-item"
    list.appendChild(listItem)
    input.value = ""
}