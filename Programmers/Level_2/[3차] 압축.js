function solution(msg) {
    const answer = [];
    // 1. 길이기 1인 모든 단어를 포함하도록 사전을 초기화 한다.
    const dict = new Map()
    for (let i = 'A'.codePointAt(0); i <= 'Z'.codePointAt(0); i += 1) {
        dict.set(String.fromCodePoint(i), i - 64);
    }
    
    for (let i = 0; i < msg.length; i += 1) {
        let w = msg[i];
        // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
        for (let j = i + 1; j < msg.length; j += 1) {
            let c = msg[j];
            // 4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
            if (!dict.has(w + c)) {
                dict.set(w + c, dict.size + 1);
                break;
            } else {
                w = w + c;
                i += 1; // 사전에 있으므로 해당 글자는 건너 뛴다.(3. 입력에서 w를 제거한다.)
            }
        }
        // 3. w에 해당하는 사전의 색인 번호를 출력하고, 
        answer.push(dict.get(w));
    }
   
    return answer;
}