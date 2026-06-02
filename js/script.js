// NAVBAR ANIMATION

const header = document.querySelector("header");

header.style.opacity = "0";
header.style.transform = "translateY(-50px)";

window.addEventListener("load", () => {

    setTimeout(() => {

        header.style.transition = "all 1s ease";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";

    }, 300);

});

// TYPING EFFECT

const heading = document.querySelector("main p");

const text = "Discover the best food & drinks in Ziro";

heading.textContent = "";

let index = 0;

function typingEffect(){

    if(index < text.length){

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 60);
    }
}

typingEffect();

// SEARCH BAR EFFECTS

const search = document.querySelector("input");

search.addEventListener("focus", () => {

    search.placeholder =
    "🍕 Search restaurants, cuisines or dishes...";
});

search.addEventListener("blur", () => {

    search.placeholder =
    "Search for restaurant, cuisine or a dish";
});

// PARALLAX EFFECT

window.addEventListener("mousemove", (e) => {

    const video = document.querySelector(".bg-video");

    let x = (window.innerWidth / 2 - e.pageX) / 100;
    let y = (window.innerHeight / 2 - e.pageY) / 100;

    video.style.transform =
    `scale(1.1) translate(${x}px, ${y}px)`;
});

// LOGO ANIMATION

const logo = document.querySelector(".logo img");

setInterval(() => {

    logo.animate(
        [
            {transform:"translateY(0px)"},
            {transform:"translateY(-5px)"},
            {transform:"translateY(0px)"}
        ],
        {
            duration:2000
        }
    );

},2000);

// SEARCH BAR FLOAT

setInterval(() => {

    search.animate(
        [
            {transform:"translateY(0px)"},
            {transform:"translateY(-3px)"},
            {transform:"translateY(0px)"}
        ],
        {
            duration:2500
        }
    );

},2500);