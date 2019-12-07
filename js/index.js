// Your code goes here

//mouseover links to make them grow
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

//on load skew the logo
const logo = document.querySelector(".logo-heading");

window.addEventListener("load", ()=>{
    logo.style.transform = "skewX(-40deg)";
    logo.style.transition = "transform 3s";
    logo.style.transitionDelay = "2s";

});

//double click first h2 to turn the p element background to yellow.
const firstH2 = document.querySelector(".intro h2");
const firstP = document.querySelector(".intro p");

firstH2.addEventListener("dblclick", ()=>{
    firstP.style.background = "yellow";
});

//make section images grow and shrink with scroll
const secImg = document.querySelectorAll(".img-content img");
const topHeader = document.querySelector("main-navigation");

secImg.forEach(i=>{
    i.style.transform = "scale(0.5)";

}); 

let lastScrollPos = 0;

window.addEventListener("scroll", ()=>{
    currentScrollPos = window.scrollY;
    if(lastScrollPos < currentScrollPos){
        secImg.forEach(i=>{
            i.style.transform = "scale(1)";
            i.style.transition = "transform 3s";
        }); 
    }else{
        secImg.forEach(i=>{
            i.style.transform = "scale(0.5)";
            i.style.transition = "transform 3s";
        });
    }

    lastScrollPos = currentScrollPos;
});



