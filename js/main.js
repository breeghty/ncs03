
$(function(){
    // 페이지 로딩시 스크롤이 상단으로 이동. h1에 scrollTop의 위치값이 표기.
    $("body, html").stop().animate({"scrollTop":0}, 1500,"swing");
    //변수 scroll에 현재 scrollTop의 위치값을 저장하고 h1 출력
    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();
        $("h1").text(scroll);
    //스크롤 값과 박스의 z축을 연동하고 확장구간에 스크롤 내비게이션 텍스트를 활성화
    /* 
parseInt()함수는 문자열을 숫자열로 반환.
1. 변수i의 초기값은 0이며 i가 5보다 작을 때 다음구문 실행.
2. 각 article의 인덱스는 z축으로 -5000 *i + scroll(현재 스크롤의 위치값)으로 이동하고 다음 조건식 실행.
3. scroll(현재 스크롤 위치값.)이 (해당인덱스 * 5000)보다 크거나 작고, (해당 인덱스 +1) * 50000보다 적으면 true를 반환하여
다음 {}구문 실행. */
    for(var i=0; i<5; i++){
        $("section>article").eq(i).css({"transform": "translateZ("+ parseInt((-5000*i)+scroll) +"px)"});
        if(scroll >= i*5000 && scroll < (i+1)*5000){
            $(".scrollNavi li").removeClass('on');
            $(".scrollNavi li").eq(i).addClass('on');
            $("article").removeClass('on');
            $("article").eq(i).addClass('on');
        };
    }; 
    //스크롤 내비게이션 클릭시 스크롤 이동.
    $(".scrollNavi li").on("click", function(){
        var a = $(this).index();
        $("body,html").stop().animate({"scrollTop": 5000*a},1500,"swing");
    });

    //05. 화면에서 마우스 무브시 박스안의 콘텐츠 움직이기
    $("body").on("mousemove", function(e){
        var posX = e.pageX/50; //변수 posX에는 현재 화면상의 마우스 커서의 x축의 위치
        var posY = e.pageY/70; //변수 posY에는 현재 화면상의 마우스 커서의 Y축의 위치. 
        //이때 해당수치의 변화폭을 줄이기 위해 수치를 나눠준다.(50~150)
        $("article").eq(0).css({"left":posX, "top":posY});
        $("article").eq(1).css({"left":posX, "top":posY});
        $("article").eq(2).css({"left":posX-10, "top":posY-50});
        $("article").eq(3).css({"left":posX+30, "top":posY-200});
        $("article").eq(4).css({"left":posX-30, "top":posY-250});
    }); 
    });
});

