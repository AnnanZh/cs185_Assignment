const highlight = document.createElement('div')
highlight.id = 'highlight'
document.body.appendChild(highlight)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        highlight.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (highlight.firstChild) {
            highlight.removeChild(highlight.firstChild)
        }
        highlight.appendChild(img)
  })
})

highlight.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {     // check if it is opened
        return
    }
    highlight.classList.remove('active')
}
)