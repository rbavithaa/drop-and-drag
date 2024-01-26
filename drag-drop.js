function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropTarget = event.target;

    // Handle dropping logic, e.g., fill in the blank with the dragged text
    if (dropTarget.classList.contains("blank")) {
        dropTarget.querySelector(".answer").textContent = data;
    }
}
