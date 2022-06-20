const multiCompare = (valA, valB, valC, valD) => {
    return valA < valB ? -1
        : valA > valB ? 1
            : valC < valD ? -1
                : valC > valD ? 1
                    : 0 // 비교군이 모두 같다면 현재 순서 그대로 유지함
};

function solution(files) {
    const filesMap = new Map();
    // (HEAD 정규식 그룹), (NUMBER 정규식 그룹), (TAIL 정규식 그룹)
    const RegExp = /([^0-9]+)([0-9]+)(.*)/;
    //  files를 HEAD, NUMBER, TAIL로 맵핑
    files.forEach((file) => {
        const fileInfo = file.match(RegExp);
        const [name, head, number, tail] = [...fileInfo];
        filesMap.set(name, {
            name: name,
            head: head,
            number: +number,
            tail: tail
        })
    });

    const answer = files.sort((file1, file2) => {
        const [matchFile1, matchFile2] = [filesMap.get(file1), filesMap.get(file2)];
        // HEAD 값 추출
        const [headFile1, headFile2] = [matchFile1.head.toLowerCase(), matchFile2.head.toLowerCase()];
        // NUMBER 값 추출
        const [numFile1, numFile2] = [matchFile1.number, matchFile2.number];
        // 다중 정렬 수행 (HEAD는 사전 순, 숫자는 내림차순)
        return multiCompare(headFile1, headFile2, numFile1, numFile2);
    });

    return answer;
}