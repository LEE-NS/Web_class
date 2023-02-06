const layout = new Swiper('.cont_list', {
    //세로 방향으로 움직이는 슬라이드
    direction: 'vertical',
    pagination: {
        el: '.cont_pager',
        clickable: true
    },
    mousewheel: {} //마우스 휠 속성
})