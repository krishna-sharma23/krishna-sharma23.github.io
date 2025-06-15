const mycheckbox = document.getElementById("mycheckbox");
const body = document.body;
const para = document.querySelectorAll("p");
const heading = document.getElementById("myheading");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
mycheckbox.addEventListener(`change`,function(){
    if (mycheckbox.checked){
        body.style.backgroundColor = "#010643";
        para.forEach(p =>{
            p.style.color = "white";
        })
        heading.style.color = "white";
        moon.style.opacity = "1"
        sun.style.opacity = "0"
        moon.style.animation = "shining_moon 3s infinite"
    }
    else{
        body.style.backgroundColor = "#ADD8E6"
        para.forEach(p =>{
            p.style.color="black";
        })
        heading.style.color = "black";
        moon.style.opacity = "0"
        sun.style.opacity = "1"
        sun.style.animation = "shining_sun 3s infinite"
    }
})