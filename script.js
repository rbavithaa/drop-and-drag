function drag(event) {
  event.dataTransfer.setData('text/plain', event.target.textContent)
}

function allowDrop(event) {
  event.preventDefault()
}

function drop(event) {
  event.preventDefault()

  var data = event.dataTransfer.getData('text')
  var wordElement = document.createElement('span')
  wordElement.textContent = data

  var blank = event.target

  if (blank.classList.contains('blank')) {
    blank.innerHTML = data
    // blank.appendChild(wordElement)
  }
}
