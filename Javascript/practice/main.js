let userInput = document.getElementById('user_input');
let searchRate = document.getElementById('search_rate');

searchRate.addEventListener('click', toEachRate())

function toEachRate() {
    
}
/* 
-사용자가 input에 알아보고자 하는 원화의 액수를 입력
-'알아보기' 버튼을 클릭
- 달러, 엔화, 유로 는 각각의 환율에 대한 함수를 가지고 있어야 한다(원래는 API로 처리)
- '알아보기' 버튼을 클릭했을때 사용자가 입력한 원화의 액수 정보가 각각의 달러, 엔화, 유로의 함수로 전달되어야 한다.
-달러, 엔화, 유로의 환율을 적용하여 span 태그에 사용자가 입력한 원화의 액수에 비례한 금액이 나타남
*/