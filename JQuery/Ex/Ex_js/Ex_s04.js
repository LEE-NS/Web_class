$('.gnb .d1').mouseover(function() {
    let h = $(this).find('.sub').height();
    $('.gnb .d1 .sub').hide();
    $(this).find('.sub').show();
    $('.gnbBg').css({
        height: h,
    });
    $('.gnbBg').show();
}).mouseout(function() {
    $(this).find('.sub').hide();
    $('.gnbBg').hide();
})

// height() : 선택자의 높이값을 저장(여백 제외, 실제 콘텐츠가 가지는 영역만큼의 높이값)
// width() : 선택자의 너비값을 저장(여백 제외, 실제 콘텐츠가 가지는 영역만큼의 너비값)
// innerHeight() : 내부높이 + padding 
// outerHeight() : 내부높이 + padding + border 
// outerHeight(true) : 내부높이 + padding + margin + border
// 위와 마찬가지로 innerWidth(), outerWidth(), outerWidth(true)도 같은 원리로 적용 가능