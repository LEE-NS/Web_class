$('.s01').slick();

$('.s02').slick({
    dots: true,
})

$('.s03').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000, // 슬라이드 사이의 시간 간격
    speed: 2000, // 슬라이드가 이동하는 속도
    stop: true
})

$('.s04').slick({
    slidesToShow: 3, //한 번에 보여지는 카드의 개수
    slidesToScroll: 2 // 한 번에 이동하는 카드의 개수
})

$('.s05').slick({
    prevArrow: '.slideBtn .btnPrev',
    nextArrow: '.slideBtn .btnNext',
    dots: true,
    appendDots: '.slideBtn .pager'
})
/* 
arrows  :   좌우버튼 (true 가 default)
prevArrow   :   이전 버튼으로 사용할 대상 선택
nextArrow   :   다음 버튼으로 사용할 대상 선택
appendDots  :   선택한 태그 안쪽에 페이저가 생성됨
*/