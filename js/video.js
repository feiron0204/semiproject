const videos = document.querySelectorAll(".video");//class가 video인 객체 전부를 받아옴
const videos2 = document.querySelectorAll(".video2");

        function fullScreen(e){
            const video = e.target;//선택된(focused) video 지정
            const paused = video.paused;//아래 조건문에서 두번쓰여서 값으로 빼줌

            if(e.keyCode==13){//enter                
                //기존에 엔터키가 시작/정지(spacebar)기능을 하였고
                //preventDefault로 빠지지 않았기 때문에
                //전체화면 전 상태를 유지하기 위하여, re-toggle함   
                if(!paused){                 
                    video.pause();
                }else if(paused){
                    video.play();
                }
                //전체화면
                if(video.requestFullscreen){                    
                    video.requestFullscreen();
                }
            }
        }
        function onlyOnePlay(e){//하나만 재생, 나머지 조용
            for(let i=0;i<videos.length;i++){
                const video = videos[i];//두번쓰여 빼줌
                if(video!=e.target){//방금 play눌린 것 빼고
                    video.pause();//다 pause
                }
            }
        }
        function volumeAndTime(e){//방향키로 볼륨,구간 조정
            const key = e.keyCode;//4번쓰여서 빼줌
            const VOLUME_VALUE = 0.1;//볼륨 단위
            const video = e.target;
            const TIME_VALUE = video.duration/10;//전체 영상 길이 기준으로

            if(key==38&&video.volume<=0.9){//up
                video.volume+=VOLUME_VALUE;
                return;
            }
            if(key==37){//left
                video.currentTime -= TIME_VALUE;
                return;
            }
            if(key==39){//right
                video.currentTime += TIME_VALUE;
                return;
            }
            if(key==40&&video.volume>=0.1){//down
                video.volume-=VOLUME_VALUE;
                return;
            }
        }
        function focusfullscreen(e){
            e.target.classList.toggle("full");
        }
        function colorChange(){
            document.body.classList.toggle("tomato");
        }

        //add Event Lister"s"
        for(let i=0;i<videos.length;i++){
            videos[i].addEventListener("keypress",fullScreen);
            videos[i].addEventListener("play", onlyOnePlay);
            videos[i].addEventListener("keydown",volumeAndTime);
        }
        for (let i = 0; i < videos2.length; i++) {
            videos2[i].addEventListener("click",focusfullscreen);
            videos2[i].addEventListener("play", colorChange);
            videos2[i].addEventListener("pause", colorChange);
        }