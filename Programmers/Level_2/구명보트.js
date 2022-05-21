function solution(people, limit) {
    let answer = 0;
    // 사람 무게를 내림차순으로 정렬
    people.sort((a, b) => b - a);
    // 가장 무서운 사람과 가장 가벼운 사람의 무게가 제한 값보다 적을 경우 정답 숫자를 올리고,
    // 가벼운 숫자 사람의 인덱스를 마이너스해서 반복문 범위 값에 포함시키지 않음
    for (let heavy = 0, light = people.length - 1; heavy <= light; heavy += 1) {
        if (people[heavy] + people[light] <= limit) {
            answer += 1;
            light -= 1;
        } else {
            answer += 1;
        }
    }

    return answer;
}
