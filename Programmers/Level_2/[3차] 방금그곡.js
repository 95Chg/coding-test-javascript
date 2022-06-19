// 문자의 일부를 토큰화하는 함수
const tokenizing = (str) => {
    return str.replace(/C#/g, 'c')
        .replace(/D#/g, 'd')
        .replace(/F#/g, 'f')
        .replace(/G#/g, 'g')
        .replace(/A#/g, 'a');
};

function solution(m, musicinfos) {
    const musicInfos = musicinfos.map((musicinfo) => musicinfo.split(',').map((el) => el));

    //곡 정보의 Map화
    const musicMap = new Map();
    for (const [startTime, endTime, musicTitle, musicSheet] of musicInfos) {

        // 시작과 종료 시간의 시각, 분 분할 
        const [startHour, endHour, startMinute, endMinute] = [
            Number(startTime.substr(0, 2)),
            Number(endTime.substr(0, 2)),
            Number(startTime.substr(3)),
            Number(endTime.substr(3))
        ];

        // 재생시간 계산
        const playTime = (endMinute + 60 * (endHour - startHour)) - startMinute;

        // 토큰화 함수를 통해 #이 붙은 문자열 변환
        const tokenizedSheet = tokenizing(musicSheet);
        const sheetLength = tokenizedSheet.length;

        // 곡 정보 입력
        musicMap.set(musicTitle, {
            title: musicTitle,
            startTime: `${startHour}:${startMinute}`,
            endTime: `${endHour}:${endMinute}`,
            playTime: playTime,
            sheet: tokenizedSheet,
            sheetLength: sheetLength,
            totalSheet:
                // (재생시간 / 악보길이)횟수만큼 반복 재생함
                tokenizedSheet.repeat(Math.floor(playTime / sheetLength))
                +
                // 재생시간보다 악보길이가 짧은시간만큼 재생함
                tokenizedSheet.substr(0, playTime % sheetLength)
        });
    }

    let answer = '';
    musicMap.forEach((info, key) => {
        const { title, playTime } = info;

        if (musicMap.get(key).totalSheet.includes(tokenizing(m))) { // 악보에 기억한 멜로디가 있을 경우
            if (!answer) answer = title;
            else {
                // hash가 true인 값이 여러 개일때 재생 시간이 긴 음악으로 변경
                if (playTime > musicMap.get(answer).playTime) answer = title;
            }
            // 만일 재생시간도 같은 음악이 존재하더라도 순서대로 루프를 돌았기 때문에 먼저 입력된 음악이 저장되게 됨
        }
    });

    return !answer ? '(None)' : answer;
}