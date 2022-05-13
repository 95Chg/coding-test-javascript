function solution(numbers, hand) {
    let lP = [3, 0]; // 왼쪽 초기값 설정 (leftPointer)
    let rP = [3, 2]; // 오른쪽 초기값 설정 (rightPointer)
    let cP = [0, 0]; // 중앙 초기값 설정 (centerPointer)
    let distance = [0, 0] // 왼쪽 거리, 오른쪽 거리 설정
    const answer = [];
    
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
            answer.push('R');
            rP = [numbers[i] / 3 - 1, 2];
        }
        if (numbers[i] % 3 === 1) {
            answer.push('L');
            lP = [Math.floor(numbers[i] / 3), 0];
        }
        if (numbers[i] % 3 === 2) {
            cP = [Math.floor(numbers[i] / 3), 1];
            distance[0] = Math.abs(cP[0] - lP[0]) + Math.abs(cP[1] - lP[1]);
            distance[1] = Math.abs(cP[0] - rP[0]) + Math.abs(cP[1] - rP[1]);
            if (distance[0] < distance[1]) {
                answer.push('L');
                lP = cP;
            } else if (distance[0] > distance[1]) {
                answer.push('R');
                rP = cP;
            } else {
                if (hand === 'left') {
                    answer.push('L');
                    lP = cP;
                } else {
                    answer.push('R');
                    rP = cP;
                }
            }
        }
        
        if (numbers[i] === 0) {
            cP = [3, 1];
            distance[0] = Math.abs(cP[0] - lP[0]) + Math.abs(cP[1] - lP[1]);
            distance[1] = Math.abs(cP[0] - rP[0]) + Math.abs(cP[1] - rP[1]);
            if (distance[0] < distance[1]) {
                answer.push('L');
                lP = cP;
            } else if (distance[0] > distance[1]) {
                answer.push('R');
                rP = cP;
            } else {
                if (hand === 'left') {
                    answer.push('L');
                    lP = cP;
                } else {
                    answer.push('R');
                    rP = cP;
                }
            }
        }
    }
    return answer.join('');
}