const videos2 = document.querySelectorAll(".video2");

function focusfullscreen(e){
    if (e.target.width == 1000){
        e.target.width = 400;
    }else if(e.target.width == 400){
        e.target.width = 1000;
    }
}
function colorChange(){
    document.body.classList.toggle("tomato");
}

for (let i = 0; i < videos2.length; i++) {
videos2[i].addEventListener("click",focusfullscreen);
videos2[i].addEventListener("play", colorChange);
videos2[i].addEventListener("pause", colorChange);
}
