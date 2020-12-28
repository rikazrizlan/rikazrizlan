const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i<splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.toggle('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//responsive nav bar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

//toggle nav
burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');

    //burger animation
    burger.classList.toggle('toggle');
});