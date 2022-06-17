// Queue 구현
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size += 1;
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

function solution(n, t, m, p) {
    const answer = [];
    const numList = new Queue();
    let [num, turn, count] = [0, 0, 0];

    while (answer.length < t) {
        // 큐가 비어있을 경우 n진법으로 변환 후 Queue에 enqueue함
        if (numList.size === 0) {
            num.toString(n).split('').forEach((el) => numList.enqueue(el));
            num += 1; // 그 다음 값을 위해 숫자를 올림
        };
        // 현재 말해야하는 숫자를 dequeue하여 추출 게임 진행 횟수를 더함
        const target = numList.dequeue();
        count += 1;

        // 게임 진행 횟수를 인원 수로 나눈 나머지가 현재 순번이 됨
        // 나머지가 0 일 경우는 인원 수와 순번이 같음 
        turn = count % m === 0 ? m : count % m;
        if (turn === p) answer.push(target);
    }

    return answer.join('').toUpperCase();
}