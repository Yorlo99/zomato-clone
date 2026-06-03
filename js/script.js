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

const heading = document.querySelector(".hero-content h1");

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

let ticking = false;

window.addEventListener("mousemove", (e) => {

    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {

        const video = document.querySelector(".bg-video");

        let x = (window.innerWidth / 2 - e.pageX) / 120;
        let y = (window.innerHeight / 2 - e.pageY) / 120;

        video.style.transform =
        `scale(1.08) translate(${x}px, ${y}px)`;

        ticking = false;

    });

});

// // LOGO ANIMATION

// const logo = document.querySelector(".logo img");

// setInterval(() => {

//     logo.animate(
//         [
//             {transform:"translateY(0px)"},
//             {transform:"translateY(-5px)"},
//             {transform:"translateY(0px)"}
//         ],
//         {
//             duration:2000
//         }
//     );

// },2000);

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

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

});
// FEATURE CARD ANIMATION

const cards =
document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform =
    "translateY(50px)";
    card.style.transition =
    "all 0.8s ease";

    observer.observe(card);

});
