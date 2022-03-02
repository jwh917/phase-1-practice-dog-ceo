console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

function fetchImgs() {
    fetch(imgUrl)
        .then(response =>  response.json())
        .then(data =>  {
            // console.log(data)
            appendImgs(data)
        }
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
        .then(data =>  {
            
            allBreeds = Object.keys(data.message)
            appendBreed(allBreeds)
            //check here first
            // console.log(data)
            // console.log(data.message)
            // console.log(Object.keys(data.message))
            // console.log(Object.keys(data.message)[11][0])

        const breedArray = Object.keys(data.message)

        const optionTag = document.getElementById("breed-dropdown")
        // console.log(optionTag.value)

        const a = "a"
        const b = "b"
        const c = "c"
        const d = "d"

        const ulTag = document.getElementById("dog-breeds")

        optionTag.addEventListener('change', (event) => {
            // console.log(optionTag.value)
            
            if(optionTag.value === a){
                // console.log("you getting somewhere B)")

                for (const element of breedArray){
                    // console.log(element)
                    // console.log(element[0])
                    if (element[0] === a){
                        console.log(element)
                        ulTag.innerHTML = element

                    }

                }
            }

            if(optionTag.value === b){
                // console.log("you getting somewhere B)")

                for (const element of breedArray){
                    // console.log(element)
                    // console.log(element[0])
                    if (element[0] === b){
                        console.log(element)
                        ulTag.innerHTML = element

                    }

                }

            }

            if(optionTag.value === c){
                // console.log("you getting somewhere B)")
                for (const element of breedArray){
                    // console.log(element)
                    // console.log(element[0])
                    if (element[0] === c){
                        console.log(element)
                        ulTag.innerHTML = element

                    }

                }
            }

            if(optionTag.value === d){
                // console.log("you getting somewhere B)")

                for (const element of breedArray){
                    // console.log(element)
                    // console.log(element[0])
                    if (element[0] === d){
                        console.log(element)
                        ulTag.innerHTML = element

                    }

                }
            }
                
            // clickedLi.style.color = "blue"
        })

        

        const clickedLi = document.querySelector("li")
        document.addEventListener('click', (event) => {
                //console.log(breedElement)
                //maybe loop then if

            // if(){
            // }
            clickedLi.style.color = "blue"
        })
            

        }
)
}

function appendBreed(dogBreeds) {
    const breedsCon = document.getElementById('dog-breeds')
    dogBreeds.forEach(breeds => {
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
    
   

//problems
//cant display all breeds
//help with making specific li change color