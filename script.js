// ===============================
// INTEGRO - SCRIPT.JS (v1)
// ===============================

// Search
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// Story Click
const stories = document.querySelectorAll(".story");

stories.forEach(story=>{

story.addEventListener("click",()=>{

let username=story.querySelector("p").innerText;

alert(username+"'s Story");

});

});

// Video Click
cards.forEach(card=>{

card.addEventListener("click",()=>{

let title=card.querySelector("h3").innerText;

alert("Opening : "+title);

});

});

// Header Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.45)";

}
else{

header.style.boxShadow="none";

}

});

// Card Hover Animation
cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

// Fake Notification
setTimeout(()=>{

console.log("Welcome to Integro");

},1500);

// Random Views

document.querySelectorAll(".info p").forEach(item=>{

let random=Math.floor(Math.random()*900)+100;

item.innerHTML=random+"K views • Today";

});

// Search Enter

searchInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

alert("Searching : "+searchInput.value);

}

});

// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

if(e.key==="/"){

e.preventDefault();

searchInput.focus();

}

});

// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(50px)";

card.style.transition=".7s";

observer.observe(card);

});

// Loading Animation

window.onload=()=>{

document.body.style.opacity=1;

};

// Profile Click

const avatar=document.querySelector(".top-icons img");

avatar.addEventListener("click",()=>{

alert("Profile Page Coming Soon");

});

// Top Icons

document.querySelectorAll(".top-icons i").forEach(icon=>{

icon.addEventListener("click",()=>{

icon.style.transform="scale(1.3)";

setTimeout(()=>{

icon.style.transform="scale(1)";

},150);

});

});

// Infinite Demo Cards

const videos=document.querySelector(".videos");

window.addEventListener("scroll",()=>{

if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){

for(let i=0;i<3;i++){

let div=document.createElement("div");

div.className="card";

div.innerHTML=`

<img src="https://picsum.photos/500/300?random=${Math.random()}">

<div class="info">

<h3>New Video</h3>

<p>${Math.floor(Math.random()*900)}K views</p>

</div>

`;

videos.appendChild(div);

}

}

});