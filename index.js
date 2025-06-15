const spans = document.querySelectorAll("span");
let temp = 0;
let delay;
let x;
spans.forEach(span =>{
    temp +=0.2;
    delay = temp + "s";
    span.style.animation = "showup 5s" ;
    span.style.animationDelay = delay;
    span.style.animationFillMode = "forward";
    span.addEventListener('animationend', () => {
    span.style.opacity = '1';
    });
})
