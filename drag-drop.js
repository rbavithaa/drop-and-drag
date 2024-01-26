function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = event.target;

    // Handle dropping logic only if the dragged element and drop target are in the same set
    var draggedSet = draggedElement.closest('.options');
    var dropSet = dropTarget.closest('.options');
    
    if (draggedSet && dropSet && draggedSet === dropSet) {
        // Fill in the blank with the dragged text
        if (dropTarget.classList.contains("blank")) {
            dropTarget.querySelector(".answer").textContent = draggedElement.textContent;
        }
    }
}
