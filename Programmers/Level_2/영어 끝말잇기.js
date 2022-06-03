function solution(n, words) {
    let turn = 1;
    let answer = [0, 0];

    for (let i = 1; i < words.length; i += 1) {
        if (i % n === 0) turn += 1;
        let sequence = i % n + 1;

        const lastWord = words[i - 1];
        const connetWord = words[i];
        const mentionedWord = words.slice(0, i);
        const isPossible =
            (!mentionedWord.includes(connetWord))
            &&
            (lastWord[lastWord.length - 1] === connetWord[0]);

        if (!isPossible) {
            answer = [sequence, turn];
            break;
        }
    }

    console.log(answer)
}