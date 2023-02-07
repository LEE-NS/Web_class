for(let i = 0; i < 10; i++) {
    console.log('zz', i);
}

// for loop 안에 if
for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        console.log('zz', i);
    }
}

//for만 사용해서
for(let i = 0; i < 10; i += 2) {
    console.log('zz', i);
}

//구구단, for 중첩
for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i * j);
    }
}


//while
let va = 0;
while(va < 5) {
    console.log('zxcv', va);
    va++;
}


//break, continue
let aa = 0;
while(aa < 100) {
    console.log('가나다', aa);
    if (aa == 20) {
        break;//가장 가까이 있는 '반복문'을 탈출(반복 횟수에 영향을 준다.)
    }
    aa++;
}

let bb = 0;
while(bb < 20) {
    bb++;
    if(bb % 2 == 1) {
        continue;//만나는 순간 조건 검사로 돌아간다. 아래에 있는 코드는 생략된다. 반복 횟수에 영향을 주지 않는다.
    }
    console.log('라마바', bb);
}




//숙제 20221221
/* 
문제 1)
1부터 100까지 더하는 for문을 만들고 그 결과를 출력해보자.

문제 2)
1부터 100까지 홀수만 출력해보자.

문제 4)
주어진 숫자가 소수이면 ture 아니면 false를 출력하는 프로그램을 짜세요.

문제 5)
for문으로 작성했던 구구단을 .... while문으로 작성해주세요.

문제 6)
구구단을 출력하는데 ... 짝수단만 출력하고, 2단은 2x2까지, 4단은 4x4까지, 6단은 6x6까지, 8단은 8x8까지 출력하게 작성해주세요.
*/