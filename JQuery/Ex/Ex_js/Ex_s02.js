//동적 효과가 없는 경우

/* 
$('.gnb').mouseover(function() {
    $(this).css({
        height: 440,
    })
    $('.gnbBg').show()
}).mouseout(function() {
    $(this).css({
        height: 40
    })
    $('.gnbBg').hide()
}) 
*/

//show() : 태그의 원래 display 속성값으로 돌려주는 명령
//hide() : display 속성값을 none으로 만들어 주는 명령
//stackoverflow.com 에서 다양한 개발자들의 의견을 들을 수 있습니다.


//동적 효과가 있는 경우
$('.gnb').mouseover(function() {
    $(this).stop().animate({
        height: 440
    })
    $('.gnbBg').stop().slideDown()
}).mouseout(function() {
    $(this).stop().animate({
        height: 40,
    })
    $('.gnbBg').stop().slideUp()
})