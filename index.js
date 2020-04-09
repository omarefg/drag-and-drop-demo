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
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    imgContainer.className = 'img-container'
    imgContainer.id = `i${imgs.length + 1}`
    imgContainer.draggable = true
    imgContainer.addEventListener('dragstart', dragstartHandler)
    img.className = 'img'
    img.src = `https://picsum.photos/150/150?grayscale?${imgContainer.id}`
    imgContainer.appendChild(img)
    container.appendChild(imgContainer)
}