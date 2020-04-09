function addImage () {
    const container = document.getElementById('left')
    const imgs = document.querySelectorAll('img')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    imgContainer.className = 'img-container'
    imgContainer.id = `i${imgs.length + 1}`
    img.className = 'img'
    img.src = `https://picsum.photos/150/150?grayscale?${imgContainer.id}`
    imgContainer.appendChild(img)
    container.appendChild(imgContainer)
}