const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = [];

const count = 30;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function imageLoaded() {
    imagesLoaded++;
    if (imageLoaded === totalImages) {
        ready = true
        loader.hidden = true
        console.log('ready: ', ready)
    }
}

function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    imagesLoaded = 0
    totalImages = photosArray.length
    console.log('total images: ',totalImages)

    photosArray.forEach(photo => {
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target:'_blank'
        })

        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })

        img.addEventListener('load', imageLoaded)

        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

async function getPhoto() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        console.log(photosArray)
        displayPhotos()
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener('scroll', () => {
    console.log('Scroll')
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhoto()
    }
})

getPhoto()
