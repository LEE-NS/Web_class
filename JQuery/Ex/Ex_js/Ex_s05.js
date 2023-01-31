/* 
$('선택자').parent()     :   부모요소로 접근
$('선택자').parents()    :   상위요소로 접근  
$('선택자').siblings()   :   형제요소로 접근
$('선택자').children()   :   자식요소로 접근
$('선택자').find()       :   자손요소로 접근
*/

$('.gnb .main').click(function() {
    /* 이미 활성화 된 메뉴는 클릭하더라도 아래쪽의 명령이
    실행되지 않도록 명령을 종료시킬 필요가 있다 */
    let d = $(this).siblings('.sub').css('display');
    if(d == 'block') {
        return false;
    };
    $('.gnb .sub').slideUp();
    $(this).siblings('.sub').slideDown();
    $('.gnb .main').removeClass('on');
    $(this).addClass('on');
    return false;
})