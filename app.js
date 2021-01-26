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

function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            //Check for validation
            if(input.type == "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if(input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if(!input.type === "password" && !validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                nextSlide(parent, nextForm);
            }
            //get rid of animation

            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
    if(user.value.length < 6) {
        console.log("Not Enough Characters");
        error("rgb(189,87,87)");
    } else {
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    if(validation.test(email.value)) {
        error("rgb(87, 189, 130)");
        return true;
    } else {
        error("rgb(189,87,87)");

    }
}

function error(color) {
    document.querySelector(".banner3").style.backgroundColor = color;
}

function nextSlide(parent , nextForm) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}


animatedForm();