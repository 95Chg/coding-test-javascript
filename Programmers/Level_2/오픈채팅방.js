function solution(record) {
    const answer = [];
    const user = {};
    const splitedRecord = record.map((el) => el.split(' '));
    for (const [action, id, name] of splitedRecord) {
        if (action !== 'Leave') {
            user[id] = name;
        }
    }

    for (const [action, id] of splitedRecord) {
        if (action === 'Enter') {
            answer.push(`${user[id]}님이 들어왔습니다.`);
        }
        if (action === 'Leave') {
            answer.push(`${user[id]}님이 나갔습니다.`);
        }
    }

    return answer;
}