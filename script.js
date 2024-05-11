let nvCnt = document.getElementById("navContainer");
let nvBtn = document.getElementById("navBtn");
let clsBtn = document.getElementById("close")

function toggleNavMenu(){
    if(nvCnt.style.right === "0vw")
        {nvCnt.style.right = "-100vw"}
    else{
        nvCnt.style.right = "0vw"
    }
}

nvBtn.addEventListener("click", toggleNavMenu);
clsBtn.addEventListener("click", toggleNavMenu);

//Modal Functionality

// Get the modal
var modal = document.getElementById("myModal");
let mdlCnt = document.getElementById("modal-content");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMdl")[0];

// When the user clicks on the button, open the modal
function opnMdl(t) {
  modal.style.display = "block";
  let mdlImg =  document.createElement("img");
  mdlImg.classList.add('mdlImg')
  mdlImg.src = t.target.src;
  mdlCnt.appendChild(mdlImg)

}

//close function

let closeMdl = () =>{
  modal.style.display = "none";
  document.querySelector(".mdlImg").remove();

}

// When the user clicks on <span> (x), close the modal
span.onclick = closeMdl;


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == mdlCnt) {
    closeMdl();
  }
}

//add the open modal functionality to each project image
let img = document.querySelectorAll('img');
for (i=0; i<img.length;i++ ){
  img[i].addEventListener('click', opnMdl)
}


