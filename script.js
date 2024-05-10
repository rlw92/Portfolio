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

// Get the button that opens the modal
var btn = document.querySelectorAll("")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMdl")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


