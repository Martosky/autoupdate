
const uploadPhotos = [
    {
        id: 0,
        className: "phones",
        link: "albulm/images.jpeg",
        description: "Security guard phone"
    },
    {
        id: 0,
        className: "phones",
        link: "albulm/images.jpeg",
        description: "Security guard phone"
    }
]
    

 const divElem = document.getElementById("myDiv")
function displayElement(){
   let arrObj = uploadPhotos;

   for (let i = 0; i < arrObj.length; i++){
       let newDiv = document.createElement("div");
       newDiv.className = "items"
       let imgElem = document.createElement("img");
       imgElem = `${arrObj[i].link}`;
       let pElem = document.createElement("p");
       pElem = "hello world"
       newDiv.appendChild(imgElem);
       newDiv.appendChild(pElem);
       divElem.appendChild(newDiv)
   }
}