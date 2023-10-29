const hamburger = document.querySelector(".hamburger")
const closebutton = document.querySelector(".close-button")
const sidebarcontainer=document.querySelector(".sidebar-container")
const navcontainer = document.querySelector(".nav-container")

hamburger.addEventListener("click",()=>{
    sidebarcontainer.classList.add("show-sidebar")
})

closebutton.addEventListener("click",()=>{
    sidebarcontainer.classList.remove("show-sidebar")
})

window.addEventListener("scroll",()=>{
    const scrollnumber = window.scrollY;
    const targetnumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollnumber >= targetnumber){
        navcontainer.classList.add("sticky-nav")
    }else{
        navcontainer.classList.remove("sticky-nav")
    }
    
})