let image = $('.photoBox');
let pager = $('.pager li');
let c = 0; //활성화 된 대상의 index값

/* 
$('선택자').이벤트() : 스크립트에 의해 추가되는 영역에는 이벤트 적용이 불가능하다
$('선택자').on(이벤트) : 스크립트에 의해 추가되는 영역에도 이벤트 적용이 가능하다
*/

pager.on({
    click : function() {
        let i = $(this).index();
        let currentImg = image.eq(c);
        let newImg = image.eq(i); 
        // 변수 i와 변수 c의 값을 비교해서 동작 방향을 다르게 설정한다
        // i == c   :   활성화 중인 버튼을 클릭 - 명령 종료
        // i > c    :   활성화 중인 버튼의 오른쪽 버튼을 클릭 - 오른쪽에서 왼쪽으로 이동
        // i > c    :   활성화 중인 버튼의 왼쪽 버튼을 클릭 - 왼쪽에서 오른쪽으로 이동
        if(i == c) return false;
        if(i > c) {
            currentImg.stop().animate({
                top: '100%'
            })
            newImg.css({
                top: '-100%'
            }).stop().animate({
                top: 0
            })
        }
        if(i < c) {
            currentImg.stop().animate({
                top: '-100%'
            })
            newImg.css({
                top: '100%'
            }).stop().animate({
                top: 0
            })
        }
        c = i;
        pager.removeClass('active');
        pager.eq(i).addClass('active');
    }
})