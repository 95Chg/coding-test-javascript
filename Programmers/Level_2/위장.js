function solution(clothes) {
    let count = 1;
    const clothMap = {};

    // 주어진 배열을 종류 : 이름의 객체로 변환
    for (const [name, kind] of clothes) {
        if (clothMap[kind]) clothMap[kind].push(name);
        else clothMap[kind] = [name];
    }

    // 안입는 거 + 하나씩 입는 거 + 섞어 입는 거 경우의 수를 모두 구함
    for (let key in clothMap) count *= clothMap[key].length + 1;
    // 최소 의상은 1개이상을 입으니 아무 것도 입지 않은 것은 제외
    count -= 1;

    return count;
}
