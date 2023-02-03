/* 
let 변수이름 = new Swiper('.swiper-wrapper의 부모태그', {
    옵션이름: '값',
    옵션이름: '값',
    옵션이름: {
        옵션2이름: '값',
        옵션2이름: '값'
    }
});
*/

const slide01 = new Swiper('.slide_list', {
    loop: true, //360도 회전
    pagination: {
        el: '.slide_wrap .pager',
        clickable: true
    },
    scrollbar: {
        el: '.slide_wrap .scrollbar'
    },
    navigation: {
        nextEl: '.slide_wrap .btn_R',
        prevEl: '.slide_wrap .btn_L'
    },
    autoplay: {
        delay: 1000
    },
    speed: 1000
})

const pdList = new Swiper('.product_list', {
    slidesPerView: 2,
    spaceBetween: 3
})