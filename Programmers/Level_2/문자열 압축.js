function solution(s) {
  const answer = [];

  // 자를 횟수 설정함 (전체 길이의 절반은 넘지 못함)
  for (let i = 1; i <= parseInt(s.length / 2); i += 1) {
    let cnt = 1; // 반복 횟수
    let currentStr = s.slice(0, i); // 문자열은 제일 앞부터 정해진 길이만큼 잘라야 하는 초기값
    let compressedStr = '';

    // 전체 문자열에 대해서 완전 탐색을 자를 횟수에 따라서 진행함
    for (let j = i; j <= s.length; j += i) {
      const compareStr = s.slice(j, j + i);
      if (currentStr === compareStr) cnt += 1;
      else {
        cnt > 1
          ? (compressedStr += cnt + currentStr)
          : (compressedStr += currentStr);
        cnt = 1; // 반복횟수를 초기화 하고
        currentStr = compareStr; // 현재 문자열을 비교군으로 변경함
      }
    }

    // 나머지 압축처리 되지 못한 문자열을 처리함
    cnt > 1
      ? (compressedStr += cnt + currentStr)
      : (compressedStr += currentStr);
    answer.push(compressedStr);
  }

  return s.length > 1
    ? Math.min.apply(null, answer.map((str) => str.length))
    : 1;
}
