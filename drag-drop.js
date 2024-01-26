function drag(event) {
    var questionSetId = event.target.closest('.options').id;
    event.dataTransfer.setData("text", questionSetId + ':' + event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text").split(':');
    var draggedSetId = data[0];
    var draggedElementId = data[1];
    
    var draggedElement = document.getElementById(draggedElementId);
    var dropTarget = event.target;

    // Check if the dragged element and drop target belong to the same question set
    if (dropTarget.classList.contains("blank") && draggedSetId === dropTarget.closest('.question-container').querySelector('.options').id) {
        // Fill in the blank with the dragged text
        dropTarget.querySelector(".answer").textContent = draggedElement.textContent;
    }
}
