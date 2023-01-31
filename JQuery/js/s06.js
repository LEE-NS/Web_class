$('.box1 .bt11').click(function() {
    $('.box1 p').css({
        height: 100,
        backgroundColor: '#ffcc00'
    })
});

$('.box1 .bt12').click(function() {
    $('.box1 p').css({
        height: 300,
        backgroundColor: 'lawngreen'
    })
});

/* 
box2를 클릭할 때
1. li 전체 비활성화시키고, active 클래스를 삭제한다.
2. 클릭 한 대상만 활성화시키고, active 클래스를 추가
*/

$('.box2 li').click(function() {
    $('.box2 li').removeClass('active')
    $(this).addClass('active')
})

//box3를 클릭, box3 p의 배경색상 변경

$('.box3 a').click(function() {
    $('.box3 p').css({
        backgroundColor: 'pink'
    })
    return false //a태그 자체의 기능이 링크라서 색깔이 바뀜과 동시에 새로고침이 되는데 이를 암기 위해 return false를 사용
})


let x = 0;
$('.box4').mouseover(function() {
    $('.count01').text(++x)
})
//마우스가 호버될 시 선택자로 지정된 box4의 자식요소영역에 커서가 올라가도 이벤트가 실행이 된다.

let y = 0;
$('.box5').mouseenter(function() {
    $('.count02').text(++y)
})