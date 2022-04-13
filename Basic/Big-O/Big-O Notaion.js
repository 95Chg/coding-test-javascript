
// O(1) < O(log n) < O(n) < O(nlog n) < O(n^2) < O(2^n) < O(n!) (로그의 밑은 2이다)


/*
    Big-O 예시
*/

// 상수 시간(Constant time) : O(1)
const example = [1, 2, 3];
console.log(example[0]);

// 로그 시간(Logarithmic time) : O(log n)
for (let i = 1; i <= n; i *= 2) {
    //...
}

// 선형 시간(Linear time) : O(n)
for (let i = 0; i < n; i++) {
    //...
}

// 선형 로그 시간(Linearithmic time) : O(nlog n)
for (let i = 0; i < n; i++) {
    for(let j = 1; j <= n; j *= 2) {
        //...
    }
}

// 2차 시간(Quadratic Time) : O(n^2)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        //...
    }
}

// 지수 시간(Exponential Time) : O(2^n)
function fibonacci(num) {
    if(num < 2) return num;
    return fibonacci(num-1) + fibonacci(num-2);
}


/* 
    Big-O 규칙 1. 계수 법칙
    상수 k가 0보다 클 때 f(n) = O(g(n))이면 kf(n) = O(g(n))이다.
    즉, n이 무한에 가까울 수록 k의 크기는 의미가 없다. 
*/

// 두 루프는 같은 O(n)으로 표기된다.
for (let i = 0; i < n; i++) {
    //...
}

for (let i = 0; i < n * 5; i++) {
    //....
}


/* 
    Big-O 규칙 2. 합의 법칙
    f(n) = O(h(n))이고 g(n) = O(p(n))이면 f(n) + g(n)은 = O(h(n)) + O(p(n))이다.
    즉 Big-O는 더해질 수 있다.
*/

// 두 루프는 합쳐 O( n + m ) 으로 표기할 수 있다.
// 계수 법칙에 의해 * 5는 사라진다.
for (let i = 0; i < n; i++) {
    //...
}

for (let i = 0; i < m * 5; i++) {
    //...
}


/* 
    Big-O 규칙 3. 곱의 법칙
    f(n) = O(h(n))이고 g(n) = O(p(n))이면 f(n) * g(n)은 = O(h(n)) * O(p(n))이다.
    즉 Big-O는 곱해질 수 있다.
*/

// 두 루프를 곱해 O(n^2)으로 표기할 수 있다.
// 계수 법칙에 의해 * 5는 사라진다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 5; j++) {
        //...
    }
}


/* 
    Big-O 규칙 4. 다항 법칙
    f(n)이 k차 다항식이면 f(n)은 O(n^k)이다.
*/

// 다음 루프는 O(n^3)으로 표기할 수 있다.
for (let i = 0; i < n * n * n; i++) {
    //...
}


/* 
    Big-O 규칙에서 기억해야할 것
    1. 상수항은 무시한다.
    2. 가장 큰 항 외에는 무시한다.
*/

// 계수 법칙에 의해 계수는 무시된다. 그래서 아래 루프는 O( n + m )으로 표기된다.
for (let i = 0; i < n * 7; i++) {
    //...
}

for (let i = 0; i < m * 3; i++) {
    //...
}

// 아래 루프는 O(n^2 + n)이지만 작은 항은 무시하여 O(n^2)로 표기해도 된다.
for (let i = 0; i < n; i++) {
    //...
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        //...
    }
}