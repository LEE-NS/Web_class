let a=10;
var b=25;
console.log(a, b);
let c=a;
a=b;
b=c;
console.log(a,b,c);
console.log(a+b+c);

console.log("");
console.log(4000*3 + 3000*2); /* 커피 4000원, 쿠키 3000원 */
console.log(4000*3 + 4500*2 + 3000*2); /* 라떼 4500원 */
console.log(4000*3 + 45000*2 + 3000*2); /* 45000원짜리 가격의 제품이 무엇인지 잊어버렸다! */ 

/* 
위와 같이 작성된 코드의 단점
- 오타가 발생하기 쉽다.
- 오타가 발생하면 다른 코드에 대한 신뢰도가 사라지기 때문에 전체적인 검수가 들어갈 수 밖에 없다.
- 해당 숫자들이 가지는 의미를 나만 알고 있기 때문에 다른 사람과 협업하기 위해서는 각 숫자가  의미를 일일이 설명이 필요하게 된다.
- 만약 가격의 변동이 생긴다면 해당 가격 정보를 일일이 다 수정해야 한다.
*/

//위의 코드를 수정한다면
let coffee = 4000;
let latte = 4500;
let cappuccino = 4500;
let cookie = 3000;

//coffee 값이 올라버렸다면
coffee = 4300;

console.log(coffee * 3 + cookie * 2);
console.log(coffee * 2 + cappuccino * 2 + cookie * 2);

console.log('');

const COFFEE_CUP = 10000;
/* const는 상수이다. 변수처럼 쓴다면 오류가 발생할 것이다. */
// COFFEE_CUP = 15000; // 주석을 해제한다면 오류가 발생할 것이다
console.log(COFFEE_CUP * 1 + coffee * 2);

console.log('');

/* 나의 나이는? */
const BIRTH_YEAR = 1993;
let now_year = 2022;
let current_age = now_year - BIRTH_YEAR;
console.log(current_age);
console.log('');

/* javascript의 브라우저 콘솔창은 문서내의 줄단위의 결과를 실시간으로 읽어들인다. 같은 줄의 스크립트에 다른 스크립트를 바꿔 입력하면 콘솔창에 출력되는 값도 실시간으로 바뀐다. */
/* 수시로 console.log(); 를 입력해서 결과를 출력해보는 것이 좋다. 내가 어디서 잘못 입력했는지 바로 확인이 가능하다. */


console.log(2+3);