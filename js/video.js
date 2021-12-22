const videos = document.querySelectorAll(".video");
const videos2 = document.querySelectorAll(".video2");
//video가 추가 되었을 때 대비하여 querySelectorAll로 받음
//class = "video"(모든 비디오) : 구간조정, 볼륨조정, 전체화면, 단 하나재생
//class = "video2"(큰 거 하나) : 커지기, 색바꾸기

        function fullScreen(e){//전체화면
            const video = e.target;
            const paused = video.paused;

            if(e.keyCode==13){//enter                
                //기존에 엔터키가 시작/정지(spacebar)기능을 하였고
                //preventDefault 안 먹히더라
                //그래서 한번더 뒤집음
                if(paused){                 
                    video.play();
                }
                else{//불가피
                    video.pause();
                }            
                
                //전체화면        
                video.requestFullscreen();
            }
        }

        function onlyOnePlay(e){//하나만 재생, 나머지 조용
            for(let i=0;i<videos.length;i++){
                const video = videos[i];
                if(video!=e.target){//방금 play눌린 것 빼고
                    video.pause();//다 pause
                }
            }
        }
        function volumeAndTime(e){//방향키로 볼륨,구간 조정
            //keydown            
            const key = e.keyCode;
            const VOLUME_VALUE = 0.1;
            const video = e.target;
            const TIME_VALUE = video.duration/10;//전체 영상 길이 기준으로

            //volume은 0~1.0사이, 
            if(key==38&&video.volume<=0.9){//up
                video.volume+=VOLUME_VALUE;
                return;
            }
            //볼륨이랑 달리 오류가 안나더라
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
        function sizeChange(e){
            const video = e.target;
            const paused = video.paused;

            //마우스 클릭도 재생/정지를 하기 때문에 그걸 막으려고 아까 전체화면에서의 코드 가져옴
            if(paused){                 
                video.play();
            }
            else{
                video.pause();
            }

            e.target.classList.toggle("full");
        }
        function colorChange(){
            //엘레먼트 보여주기
            document.body.classList.toggle("tomato");
        }

        //add Event Lister"s"
        for(let i=0;i<videos.length;i++){
            videos[i].addEventListener("keypress",fullScreen);
            videos[i].addEventListener("play", onlyOnePlay);
            videos[i].addEventListener("keydown",volumeAndTime);
        }
        for (let i = 0; i < videos2.length; i++) {
            videos2[i].addEventListener("click",sizeChange);
            videos2[i].addEventListener("play", colorChange);
            videos2[i].addEventListener("pause", colorChange);
        }