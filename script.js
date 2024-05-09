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



