let photoBox = $('.photoBox');
let btn = $('.pager li');
let c = 0;

btn.click(function() {
    let i = $(this).index();
    if(i == c) return false;
    btn.removeClass('active');
    $(this).addClass('active');
    photoBox.eq(c).stop().animate({
        left: '-100%'
    }) //기존 이미지
    photoBox.eq(i).css({
        left: '100%'
    }).stop().animate({
        left: 0
    }); //새 이미지
    c = i; //위 코드가 모두 실행되고 난 후에 이미지가 바뀐다.
})