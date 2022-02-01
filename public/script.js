const baseUrl ='https://api.nasa.gov/planetary/apod';
const key = 'dlLH20bKwUWLA3cll1bCnk6GYylr6OZeq979XYgP';
//const card = document.querySelector(".card");
// const cardBody = document.querySelector('.card-body');
// const nextBtn = document.querySelector('.btn');
const media = document.querySelector(".media");
const innerCard = document.querySelector(".carousel-inner")


fetch(`${baseUrl}?api_key=${key}`)
. then (response => response.json())
.then(function(json){
  image(json)
console.log(json)
})

function image(spaceInfo){
    console.log(spaceInfo)

    let img = document.querySelector(".mr-3");
    console.log(spaceInfo.hdurl)
    img.src= spaceInfo.hdurl;
   
   let text = document.querySelector("p")
   text.innerText = spaceInfo.explanation;

   let title = document.querySelector('.mt-0')
   title.innerText = spaceInfo.title;

   let year = document.querySelector("h3")
   year.innerText = spaceInfo.date;

   let author = document.querySelector("h1")
   author.innerText = spaceInfo.copyright;
}

//add author and inquire about other API Keys