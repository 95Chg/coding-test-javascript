function solution(n) {
    const answer = [];

    // 원판을 from에서 to로 옮김 
    const movePlate = (num, from, to) => {
        // console.log(`${num}번 원반을 ${from}에서 ${to}로 이동한다.`)
        answer.push([from, to]);
    };

    // num 갯수의 원판을 시작점(from)에서 목적지(to)로 이동하는데 경유지(waypoint)거쳐서 이동함
    const towerOfHanoi = (num, from, waypoint, to) => {

        if (num === 1) { // 재귀 탈출 조건
            // 가장 작은 원판인 1번을 to로 이동시킴
            movePlate(1, from, to);
        }
        else {
            // 가장 밑에 있는 원판을 옮기기 위해 num - 1개의 원판을 waypoint로 이동함, 경유지는 to를 사용함
            towerOfHanoi(num - 1, from, to, waypoint);
            // 가장 밑에 있는 원판이 to로 이동함
            movePlate(num, from, to)
            // 경유지에 있는 num - 1개의 원판이 to로 이동함, 경유지는 from을 사용함
            towerOfHanoi(num - 1, waypoint, from, to);
        }
    };

    towerOfHanoi(n, 1, 2, 3)

    return answer
}