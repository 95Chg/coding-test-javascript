const convert = (str) => {
    const regExp = /[a-zA-Z]{2}/; // 알파벳만 2글자의 조건 정규표현식
    const converted = [];
    for (let i = 0; i < str.length - 1; i += 1) {
        const slicedStr = str.slice(i, i + 2); // 글자를 2글자씩 자름
        if (regExp.test(slicedStr)) { // 알파벳이 아닌 글자( , + , 숫자 등)가 포함됐을 경우 실행되지 않음
            converted.push(slicedStr.toUpperCase()); // 다중집합에는 대소문자 구분없음
        }
    }

    return converted;
};

function solution(str1, str2) {
    const [convertStr1, convertStr2] = [convert(str1), convert(str2)];
    const target = new Set([...convertStr1, ...convertStr2]);
    const sumOfSets = []; // 합집합
    const intersection = []; // 교집합

    // 다중집합 요소 중 target의 요소를 가지고 있는 배열을 각각 반환
    target.forEach((str) => {
        const [filterStr1, filterStr2] = [
            convertStr1.filter((el) => el === str),
            convertStr2.filter((el) => el === str)
        ];
        // 배열의 길이가 더 긴 배열이 합집합의 요소가 됨
        // 배열의 길이가 더 짧은 요소가 교집합의 요소가 됨 (없을 경우 교집합이 없음)
        // 배열의 길이가 같다면 합집합이자 교집함의 요소가 됨 (없을 경우 교집합이 없음)
        if (filterStr1.length >= filterStr2.length) {
            sumOfSets.push(...filterStr1)
            intersection.push(...filterStr2)
        } else {
            sumOfSets.push(...filterStr2)
            intersection.push(...filterStr1)
        }
    });

    return sumOfSets.length === 0 ? 65536
        : Math.floor(intersection.length / sumOfSets.length * 65536)
}