(function($){

    var obj ={
        init:function(){

            this.videoFn();
            this.videoControllFn();
        },
        videoFn:function(){
            var winW   = 0;
            var winH   = 0;
            var vidW   = 0;
            var vidH   = 0;
            var marT   = 0;
            var marL   = 0;
            var setId  = 0;
            var $mainVideo = $('.main-video');
            var $section1 = $('#section1');

                function resizeFn(){
                    winW   = $(window).innerWidth();
                    winH   = $(window).innerHeight();
                    vidW   = $mainVideo.innerWidth();
                    vidH   = $mainVideo.innerHeight();
                    marT   = (winH-vidH)/2; // (969-1080)/2 = -55.5
                    marL   = (winW-vidW)/2; // (1903-1920)/2 = -8.5

                    $section1.css({ width:winW, height:winH });

                    //창너비가 비디오 너비보다 크면
                    if(winW > vidW ){
                        $mainVideo.css({ width:winW, height:'auto' });
                    }  

                    //창높이가 비디오 높이보다 크면
                    if( winH > vidH ){
                        $mainVideo.css({ width:'auto', height:winW });
                    }

                    $mainVideo.css({ marginTop:marT,marginLeft:marL });

                }
                resizeFn();
                setTimeout(resizeFn,10);

                $(window).resize(function(){
                    resizeFn();
                });

        },
        videoControllFn:function(){
            //비디오 콘트롤 비디오 재생 정시 / 사운드 켜기 끄기
            var $mainVideo = $('.main-video');
            var $controlBox = $('.control-box');
            var $palyBtn = $('.paly-btn');
            var t = 0;
            var t2 = 0;

                $mainVideo.get(0).autoplay = true;  //자동 재생 true
                $mainVideo.get(0).muted = true;     //사운드 꺼짐  true
                $mainVideo.get(0).loop  = true;     //반복재생 true
                $mainVideo.get(0).currentTime  = 0; //재생 시점 위치 지정
            
                //일시정지 / 재생
                $palyBtn.on({
                    click:function(){
                        if( t == 0){
                            t=1;
                            $controlBox.addClass('addPlay');
                            $mainVideo.get(0).pause();
                        }
                        else {
                            t=0;
                            $controlBox.removeClass('addPlay');
                            $mainVideo.get(0).play();
                        }
                }
            });

            //volume-btn
            $('.volume-btn').on({
                click:function(){
                    if ( t2 == 0){
                        t2=1;
                      
                        $mainVideo.get(0).muted = false; //사운드 켜짐
                        $(this).children().attr('class','fas fa-volume-mute');
                    }     
                    else{
                        t2 = 0;
                        
                        $mainVideo.get(0).muted = true; //사운드 꺼짐
                        $(this).children().attr('class','fas fa-volume-down');
                    }
                    
                }
            })

        }   
    }

    obj.init();

})(jQuery);