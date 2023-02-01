let s = 2;
let photo = $('.slide_img_box');
let pager = $('.slide_pager ul li');
let btnPrev = $('.slide_prev');
let btnNext = $('.slide_next');
let all = photo.size(); // size() : 선택된 자료의 개수를 저장

//초기값
photo.eq(s).css({
    left: 0,
})
pager.eq(s).addClass('active');

//페이저클릭
pager.on({
    click: function() {
        let j = $(this).index();
        pager.removeClass('active')
        $(this).addClass('active')

        if(j > s) moveToLeft(j);
        if(j < s) moveToRight(j);
    }
})

//좌우 버튼 (버튼은 페이저를 이동시키게끔 한다)
btnPrev.on({
    click: function() {
        let n = s - 1;
        if(n < 0) n = all - 1;
        pager.eq(n).click();
    }
})

btnNext.on({
    click: function() {
        let n = s + 1;
        if(n == all) n = 0;
        pager.eq(n).click();
    }
})

function moveToLeft(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i);
    currentPhoto.stop().animate({left: '-100%'}, 300)
    newPhoto.css({left: '100%'}).stop().animate({left: 0}, 300)
    s = i;
} 

function moveToRight(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i);
    currentPhoto.stop().animate({left: '100%'}, 300)
    newPhoto.css({left: '-100%'}).stop().animate({left: 0}, 300)
    s = i;
}