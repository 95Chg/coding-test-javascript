function solution(new_id) {
    let answer = new_id
        .toLowerCase() // 소문자로 바꾸기
        .replace(/[^0-9a-z._-]/g, '') // 소문자, 숫자, -, _, .를 제외한([^])를 제거
        .replace(/\.+/g, '.') // .이 2번이상 반복될 경우 .으로 변환
        .replace(/^\.|\.$/g, '') // .으로 시작(^)하거나 .으로 끝날($)경우 제거
        .replace(/^$/, 'a') // 문자열이 비어 있을 경우(^$) a를 추가
        .slice(0, 15) // 15글자 초과분 제거
        .replace(/\.$/, '');  // 제거 후 .으로 끝날 경우 제거
    if (answer.length <= 2) { // 2글자 이하일 경우 마지막 글자를 3글자가 될 때까지 반복
        answer = answer + answer[answer.length - 1].repeat(3 - answer.length);
    }
    
    return answer;
}