$('.box1').scroll(function() {
    $(this).css({
        backgroundColor: '#ffaacc'
    })
})

$('.box2').scroll(function() {
    let s = $(this).scrollLeft()
    //변수 s에 box2의 가로 스크롤 위치값을 저장

    if(s >= 250) {
        $(this).css({
            backgroundColor: 'yellow'
        })
    } else {
        $(this).css({
            backgroundColor: 'red'
        })
    }
    //만약 s가 250 이상이라면 box2의 배경은 yellow
    //아니라면 red
})

$('.box3').scroll(function() {
    let s = $(this).scrollTop()
    if(s >= 350) {
        $('.b33').addClass('active')
    } else {
        $('.b33').removeClass('active')
    }
})

$(window).scroll(function() {
    let i = $(window).scrollTop()
    let b1 = $('.box1').offset().top;
    let b2 = $('.box2').offset().top;

    if(i >= b2) {
        $('body').css({
            backgroundColor: 'green',
        })
    } else if(i >= b1) {
        $('body').css({
            backgroundColor: 'blue',
        })
    } else {
        $('body').css({
            backgroundColor: '#fff',
        })
    }
})