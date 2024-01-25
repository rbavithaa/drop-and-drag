function allowDrop(event) {
    event.preventDefault();
    return false;  // Added to ensure the event is not propagated further
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    var draggedText = event.dataTransfer.getData("text");
    var targetElement = event.target;

    if (targetElement.classList.contains('blank')) {
        var answerSpan = targetElement.querySelector('.answer');
        answerSpan.textContent = draggedText;
    }
}