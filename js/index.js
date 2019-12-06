// Your code goes here
const allAs = document.querySelectorAll('a');
allAs.forEach(i => {
    i.addEventListener('mouseover', ()=>{
       i.style.fontSize = "2rem"; 
    });
});

allAs.forEach(i => {
    i.addEventListener('mouseleave', ()=>{
       i.style.fontSize = "1.6rem"; 
    });
});

const logo = document.querySelector(".logo-heading");

window.addEventListener("load", ()=>{
    logo.style.transform = "skewX(-40deg)";
    logo.style.transition = "transform 3s";
    logo.style.transitionDelay = "2s";

});