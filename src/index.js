document.addEventListener('DOMContentLoaded', event =>{
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(items => {
        makeImgElements(items)

    })

})
function makeImgElements(items){

    for(let item of items){
    createSingleImageElement(item)
    }

}
let form = document.getElementById("new-ramen")
form.addEventListener("submit", event => {
    event.preventDefault()
    const item = {
     rating : event.target.rating.value,
     name : event.target.name.value,
     restaurant: event.target.restaurant.value,
    image : event.target.image.value,
     comment: event.target.new_comment.value,
  }
  createSingleImageElement(item)
})

function createSingleImageElement(item){
    let menu = document.getElementById("ramen-menu")
    let img = document.createElement("img")
        img.addEventListener('click', event => {
            let photo = document.querySelector(".detail-image" )
            photo.setAttribute("src", item.image)
            let name = document.querySelector(".name")
            name.textContent = item.name
            let restaurant = document.querySelector(".restaurant")
            restaurant.textContent = item.restaurant
            let display = document.querySelector('#rating-display')
            display.textContent = item.rating
            let comment = document.querySelector('#comment-display')
            comment.textContent = item.comment

        })
        img.setAttribute("src", item.image)
        menu.appendChild(img)


}