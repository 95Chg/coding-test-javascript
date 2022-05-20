function solution(progresses, speeds) {
    const answer = [];

    while (progresses.length > 0) {
        progresses = progresses.map((v, i) => v + speeds[i]);
        let complete = 0;

        for (let i = 0; i < progresses.length; i += 1) {
            if (progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                complete += 1;
                i -= 1;
            }
        }
        if (complete) answer.push(complete);
    }

    return answer;
}
