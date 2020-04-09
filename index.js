function addImage () {
    const container = document.getElementById('left')
    const imgs = document.querySelectorAll('img')
    const img = document.createElement('img')
    img.className = 'img'
    img.id = `i${imgs.length + 1}`
    img.src = `https://picsum.photos/150/150?${img.id}`
    container.appendChild(img)
}