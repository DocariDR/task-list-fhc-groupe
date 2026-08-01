const form = document.getElementById("form")
const list = document.getElementById("task-list")
let listTab = [];

form.addEventListener("submit", fetchValue)
list.addEventListener("click", deletedItem)

// fonction pour récupérer la valeur du champs envoyé
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
    // véfier si la valeur du champs envoyé est vide
    if(value === "") {
        alert("Votre champs est vide!")
        return 0
    // vérifier si la valeur du champs envoyé existe déjà dans la liste
    } else if(listTab.includes(value.toLowerCase())) {
        alert("Cette tâche existe déjà !")
        return 0
    }
    listTab.push(value.toLowerCase())
    return value
}

// fonction pour supprimer un élément de la liste
function deletedItem(event) {
    // récupérer le bouton cliqué
    const linkClicked = event.target.closest(".delete-btn")
    if(!linkClicked)
        return;
    const parentLI = linkClicked.parentElement;
    parentLI.className = parentLI.className.replace("anime-up", "anime-down")
    // supprimer l'élément de la liste après la fin de l'animation
    parentLI.addEventListener("animationend", e => parentLI.remove())
    const valueDelete = parentLI.firstChild.textContent
    listTab = listTab.filter(task => task !== valueDelete.toLowerCase())
}