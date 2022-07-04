function solution(fees, records) {
    // records의 문자열을 split후 차량번호가 작은 순서로 정렬함
    const convertRecords = [...records.map((info) => info.split(' '))].sort((a, b) => a[1] - b[1]);
    // 각 정보를 Map으로 차량번호, 입출입, 입출입 시각, 입출입 분으로 설정
    const recordsMap = new Map();
    for (const [carTime, carNum, carAction] of convertRecords) {
        const [carHour, carMinute] = [Number(carTime.slice(0, 2)), Number(carTime.slice(3))];
        if (!recordsMap.get(carNum)) {
            recordsMap.set(carNum, {
                carNumber: carNum,
                action: [carAction],
                hour: [carHour],
                minute: [carMinute],
            })
        } else {
            const { _, action, hour, minute } = recordsMap.get(carNum);
            action.push(carAction);
            hour.push(carHour);
            minute.push(carMinute);
        }
    }

    const times = [];
    for (const value of recordsMap.values()) {
        const { _, action, hour, minute } = value;
        // In으로 끝날 경우 액션의 길이가 홀수이므로 종료 시간인 23:59을 추가 해줌
        if (action.length % 2 !== 0) {
            hour.push(23);
            minute.push(59);
        }
        // In & Out으로 반복되므로 시간 정보를 2개씩 계산하여 주차시간을 계산함
        let tempTime = 0;
        for (let i = 0; i < hour.length; i += 2) {
            tempTime += (hour[i + 1] * 60 + minute[i + 1]) - (hour[i] * 60 + minute[i]);
        }
        times.push(tempTime);
    }

    const [basicTime, basicFee, unitTime, unitFee] = [...fees];
    const answer = [];
    times.forEach((time) => {
        answer.push(
            time <= basicTime
                ? basicFee // 기본 시간 이하일 경우
                : basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee // 기본 시간 이상일 경우
        );
    })

    return answer;
}