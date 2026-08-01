const form = document.getElementById("form")
const list = document.getElementById("task-list")
const listTab = [];

form.addEventListener("submit", fetchValue)
list.addEventListener("click", deletedItem)

function fetchValue(event) {
    event.preventDefault();
    const input = document.querySelector(".input-field");
    const listItem = document.createElement("li")
    const value = validateTask(input.value);
    if (value) {
        listItem.innerHTML = `<div>${value}</div><button type="button" class="delete-btn" title="Supprimer"><span class="material-symbols-outlined">delete</span></button>`
        listItem.className = "task-item anime-up"
        list.appendChild(listItem)
        input.value = ""
    }
}

// fonction pour valider la valeur du champs envoyé
function validateTask(value) {
    value = value.trim();
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

// fonction pour supprimer un élément de la liste
function deletedItem(event) {
    const linkClicked = event.target.closest(".delete-btn")
    if(!linkClicked)
        return;
    const parentLI = linkClicked.parentElement;
    parentLI.className = parentLI.className.replace("anime-up", "anime-down")
    parentLI.addEventListener("animationend", e => parentLI.remove())
}