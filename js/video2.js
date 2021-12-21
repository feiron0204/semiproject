const video = document.querySelector(".video2");

function focusfullscreen(e){
    if (e.target.width == 1000){
        e.target.width = 400;
    }else if(e.target.width == 400){
        e.target.width = 1000;
    }
}

video.addEventListener("click",focusfullscreen);
