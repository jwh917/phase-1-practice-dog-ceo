console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchImgs() {
    fetch(imgUrl)
        .then(response =>  response.json())
        .then(data =>  appendImgs(data)
)
}

function appendImgs(images) {
    const dogImgsCon = document.getElementById('dog-image-container')
    images.message.forEach(imgs => {
    const imgElement = document.createElement("img")
    imgElement.src = imgs
    dogImgsCon.appendChild(imgElement)
})
}

function fetchBreed() {
    fetch(breedUrl)
        .then(response =>  response.json())
        .then(data =>  appendBreed(data)
)
}

function appendBreed(dogBreeds) {
    const breedsCon = document.getElementById('dog-breeds')
    dogBreeds.message.forEach(breeds => {
    const breedElement = document.createElement("li")
    const breedsText = document.createTextNode(breeds)
    breedElement.appendChild(breedsText)
    breedsCon.appendChild(breedElement)
})
}



document.addEventListener('DOMContentLoaded', (event) => {
    fetchImgs()
    fetchBreed()
    })   
    
   

