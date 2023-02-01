let s = 2;
let photo = $('.slide_img_box');
let pager = $('.slide_pager ul li');
let btnPrev = $('.slide_prev')
let btnNext = $('.slide_next')
let all = photo.size();

let autoPlay;
let play = $('.sPlay')
let stop = $('.sStop')

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

//재생버튼 클릭
stop.on({
    click: function() {
        clearInterval(autoPlay)
        stop.hide();
        play.show();
    }
})
play.on({
    click: function() {
        timer();
        play.hide();
        stop.show();
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

timer();
function timer() {
    autoPlay = setInterval(function() {
        let n = s + 1;
        if(n == all) n = 0;
        pager.eq(n).click();
    }, 2000)
}




/* 
자동재생 명령

setInterval(함수, 시간);
설정한 시간의 간격마다 함수 명령을 반복해서 실행한다.

자동재생 멈춤

clearInterval(변수);
setInterval() 명령을 단독을 사용해도 실행되지만 만약 clearInterval() 명령을 사용해서 자동재생을 컨트롤하기 위해서는 변수 안에 setInterval() 명령을 저장해둬야 한다.

let 변수 = setInterval(함수, 시간);
clearInterval(변수)
*/