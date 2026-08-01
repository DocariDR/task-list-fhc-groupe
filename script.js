const form = document.getElementById("form")
const list = document.getElementById("task-list")
const listTab = [];

form.addEventListener("submit", fetchValue)

function fetchValue(event) {
    event.preventDefault();
    const input = document.querySelector(".input-field");
    const listItem = document.createElement("li")
    const value = validateTask(input.value);
    if (value) {
        listItem.innerHTML = `<div>${value}</div><button type="button" class="delete-btn"><span class="material-symbols-outlined">delete</span></button>`
        listItem.className = "task-item"
        list.appendChild(listItem)
        input.value = ""
    }
}

// fonction pour valider la valeur du champs envoyé
function validateTask(value) {
    if(value === "") {
        alert("Votre champs est vide!")
        return 0
    } else if(listTab.includes(value.toLowerCase())) {
        alert("Cette tâche existe déjà !")
        return 0
    }
    listTab.push(value.toLowerCase())
    return value
}