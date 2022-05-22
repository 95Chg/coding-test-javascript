// 알파벳 이동 값 찾기, N(13)이하면 ▲가는 것이 빠르고 O(14)이상이면 ▼가는 것이 더 빠름
const findAlphabet = (target) => {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fromLeftIndex = Alphabet.indexOf(target);
    const fromRightIndex = Alphabet.length - fromLeftIndex;
    return fromLeftIndex < 13 ? fromLeftIndex : fromRightIndex;
};

function solution(name) {
    let horizontalMove = name.length - 1; // 수평 이동 최대 값 설정
    let verticalMove = 0;

    for (let i = 0; i < name.length; i += 1) {
        verticalMove += findAlphabet(name[i]); //알파벳 상하 선택 값 더하기(A는 어차피 0이라서 상관없음)

        // 즉, A가 반복되어 끝나는 지점의 글자 갯수가 반환됨
        let nextAlphabet = i + 1;
        // 다음 알파벳이 A이고 다음 알파벳 인덱스가 길이보다 짧을 경우 1을 더함
        while (nextAlphabet < name.length && name[nextAlphabet] === "A") {
            nextAlphabet += 1;
        }

        // i는 현재 선택된 글자까지 움직이는 거리, aFinishPosition는 A가 끝나는 자리의 거리
        const aFinishPosition = name.length - nextAlphabet;
        const FromRightToLeftMove = (i * 2) + aFinishPosition; // 오른쪽으로 갔다가 원점으로 가서 왼쪽으로 가는 길이
        const FromLeftToRightMove = (aFinishPosition * 2) + i; // 왼쪽으로 갔다가 원점으로 가서 오른쪽으로 가는 길이

        horizontalMove = Math.min(horizontalMove, FromRightToLeftMove, FromLeftToRightMove);
    }

    return horizontalMove + verticalMove;
}