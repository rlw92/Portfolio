let nvCnt = document.getElementById("navContainer");
let nvBtn = document.getElementById("navBtn");
let clsBtn = document.getElementById("close")

function toggleNavMenu(){
    if(nvCnt.style.top === "0vh")
        {nvCnt.style.top = "-100vh"}
    else{
        nvCnt.style.top = "0vh"
    }
}

nvBtn.addEventListener("click", toggleNavMenu);
clsBtn.addEventListener("click", toggleNavMenu);