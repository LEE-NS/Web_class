$('.gnb .d1').mouseover(function() {
    $('.gnb .d1 .sub').hide();
    $(this).find('.sub').show();
}).mouseout(function() {
    $(this).find('.sub').hide();
})

//find() : 선택자 영역 안쪽의 하위 태그를 찾아서 선택할 수 있는 명령