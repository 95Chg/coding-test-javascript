function solution(s) {
    let [turn, remove] = [0, 0];

    const regExpInclude0 = /[0+]/g; // 0을 하나이상 포함하는 정규식
    const regExpNotInclude0 = /[^0+]/g; // 0을 하나이상 포함하지 않는 정규식

    while (s !== '1') {
        // 1. x의 모든 0을 제거하고 갯수를 더함
        remove += s.replace(regExpNotInclude0, '').length;
        // 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
        s = s.replace(regExpInclude0, '').length.toString(2);
        turn += 1;
    }

    return [turn, remove];
}