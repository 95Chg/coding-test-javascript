function solution(id_list, report, k) {
    const inputArr = [...new Set(report)].map((el) => el.split(' '));
    const reportList = new Map();
    const blockUser = [];
    const answer = Array(id_list.length).fill(0);
    id_list.forEach((user) => reportList.set(user, {from: [], to: [], count: 0}))
    
    // 신고리스트 작성
    for (let arr of inputArr) {
        reportList.get(arr[0])['to'].push(arr[1]);
        reportList.get(arr[1])['from'].push(arr[0]);
        reportList.get(arr[1])['count'] += 1;                    
    }
    
    // 정지된 유저 설정
    for (let user of id_list) {
        if (reportList.get(user)['count'] >= k) { 
            blockUser.push(user);
        }
    }
    
    // 메일 발송 횟수 계산
    for (let user of id_list) {
        reportList.get(user)['to'].forEach((el) => { 
            if (blockUser.includes(el)) {
                answer[id_list.indexOf(user)] += 1
            }
        })
    }
    
    return answer;
}