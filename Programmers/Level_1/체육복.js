function solution(n, lost, reserve) {
    const studentCloth = Array(n).fill(1); // 옷의 갯수 초기화
    for (let i = 0; i < lost.length; i += 1) { // 옷을 잃어버린 학생 처리
        studentCloth[lost[i] - 1] -= 1;
    }
    
    for (let i = 0; i < reserve.length; i += 1) { // 여분 옷을 가져온 학생 처리
        studentCloth[reserve[i] - 1] += 1;
    }

    for (let i = 0; i < n; i += 1) { // 옷 나눠주기 처리
        if (studentCloth[i] === 2 && studentCloth[i + 1] === 0 || // 앞 학생이 뒷 학생에게 나눠줌
            studentCloth[i + 1] === 2 && studentCloth[i] === 0) { // 뒷 학생이 앞 학생에게 나눠줌
            studentCloth[i] = 1;
            studentCloth[i + 1] = 1;
        }

    }
    
    return studentCloth.filter((el) => el >= 1).length;
}