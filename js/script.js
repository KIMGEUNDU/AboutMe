const content='KIM GEONJU'
const text = document.querySelector(".title")
let index = 0;

function typing(){
  text.textContent += content[index++];
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}

setInterval(typing, 400)