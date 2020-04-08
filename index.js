function dragstartHandler(event) {
    event.dataTransfer.setData('image', event.target.id)
    event.dataTransfer.dropEffect = 'move'
}

function dragoverHandler(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
}

function dropHandler(event) {
    event.preventDefault()
    const image = event.dataTransfer.getData('image')
    event.target.appendChild(document.getElementById(image))
}

function addImage () {
    const container = document.getElementById('left')
    const imgs = document.querySelectorAll('img')
    const img = document.createElement('img')
    img.className = 'img'
    img.id = `i${imgs.length + 1}`
    img.draggable = true
    img.addEventListener('dragstart', dragstartHandler)
    img.src = `https://picsum.photos/150/150?grayscale?${img.id}`
    container.appendChild(img)
}