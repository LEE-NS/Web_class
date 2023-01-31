/* 
버튼 클릭 시, 클릭한 버튼의 순서값을 저장
버튼 전체를 비활성화
클릭한 버튼 활성화
사진 전체를 비활성화
저장된 순서값의 사진을 활성화
*/

$('.btn li').click(function() {
    let i = $(this).index();
    $('.btn li').removeClass('on')
    $(this).addClass('on')
    $('.photo li').css({
        display: 'none'
    })
    $('.photo li').eq(i).css({
        display: 'block'
    })
})