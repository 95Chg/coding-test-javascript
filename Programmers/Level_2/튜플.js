function solution(s) {
    const tuples = s.slice(2, -2) // 앞 뒤 중괄호 제거한 문자열 반환
        .replace(/},{/g, ',') // 정규식 표현
        .split(',') // 쉼표로 나눠 배열로 변환
        .map((str) => +str); // 문자열 숫자형으로 변환

    // 해당 숫자가 몇번 반복되었는지 확인
    const tuplesCount = {};
    tuples.forEach((el) => {
        tuplesCount[el] = (tuplesCount[el] || 0) + 1;
    });

    // 객체를 배열로 변환시켜 반복 횟수 내림차순으로 정렬 후 해당 key 값을 반환한다
    const sortCount = [];
    for (let key in tuplesCount) {
        sortCount.push([key, tuplesCount[key]])
    }

    return sortCount.sort((a, b) => b[1] - a[1]).map((el) => +el[0]);
}