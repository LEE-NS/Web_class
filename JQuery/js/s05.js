//출력할 때

$('.btn p').click(function() {
    let i = $(this).index() //변수 i에 현재 클릭한 대상의 순서값을 저장
    $('.btn p').removeClass('on') //클릭한 시점에 활성화 된 버튼이 다를 수 있으니 모든 버튼을 일단 비활성화 시킨다.
    $(this).addClass('on') // 현재 클릭한 대상만 활성화시킨다
    $('.pannel .inner').removeClass('view') //클릭할 시점에 활성화 된 버튼이 다를 수 있으니 모든 버튼을 일단 비활성화 시킨다.
    $('.pannel .inner').eq(i).addClass('view') // 패널 중 i번째 패널만 선택해서 활성화 시킨다. 변수 i 에는 현재 내가 클릭한 대상의 순서값이 저장되어있다.
})

//여기서 this는 .btn p 를 가리킨다.
