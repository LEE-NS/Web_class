$('.pdTabBtn ul li').click(function() {
    let i = $(this).index();
    $('.pdTabBtn ul li').removeClass('active')
    $(this).addClass('active');
    $('.pdList').removeClass('view');
    $('.pdList').eq(i).addClass('view');

    $('.pdList').slick('setPosition')
})

$('.pdList').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    mobileFirst: true, //반응형 작업 시 모바일이 먼저 계산되도록
    responsive: [
        {
            breakpoint: 767, //화면 너비값이 767px이 초과될 경우
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                dots: false
            }
        }
    ]
})