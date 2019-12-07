// Your code goes here

//mouseover links to make them grow and mouse out to make them go back
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

//on key press change section h2's to background black and color white
const allH2 = document.querySelectorAll("h2");

document.addEventListener("keydown", ()=>{
    allH2.forEach(i =>{
        i.style.background = "black";
        i.style.color = "white";
    });
});

//changes p text in destination section when you copy h2
const lastH2 = document.querySelector(".content-destination h2");
const destP = document.querySelector(".content-destination p");

lastH2.addEventListener("copy", () =>{
    destP.textContent = "You copied the text";
});

// change content pick section background color on resize
const contentPick = document.querySelector(".content-pick");

window.addEventListener("resize", () =>{
    contentPick.style.background = "cyan";
});

//changes background to red whe you drag top img
const topImg = document.querySelector(".intro img");
const body = document.querySelector("body");

topImg.addEventListener("drag", ()=>{
    body.style.background = "red";
});

//added an imput so when you focus on it, it turns links red and select the text inside to turn them back to black
const container = document.querySelector("div.container");
const input = document.createElement("input");
input.value = "select this text";
container.append(input);

input.addEventListener("focus", ()=>{
    allAs.forEach(i => {
        i.style.color = "red";
    });
});

input.addEventListener("select", ()=>{
    allAs.forEach(i => {
        i.style.color = "black";
    });
});

//prevent defaults on links

allAs.forEach(i => {
    i.addEventListener("click", (event) =>{
    event.preventDefault();
    });
});

//prevent propagation

const destSection = document.querySelector(".content-destination");
// const lastH2 = document.querySelector(".content-destination h2");
// const destP = document.querySelector(".content-destination p");

destP.addEventListener("click", (event)=>{
    lastH2.style.color = "blue";
    event.stopPropagation();
});

destSection.addEventListener("click", ()=>{
    lastH2.style.color = "red";
});


