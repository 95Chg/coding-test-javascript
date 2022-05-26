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
            this.tail = newNode;
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

function solution(priorities, location) {
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i += 1) {
        queue.enqueue([priorities[i], i]);
    }
    
    priorities.sort((a, b) => b - a);
    
    let answer = 0;
    
    while(true) {
        const curVal = queue.peek();
        if (curVal[0] < priorities[answer]) queue.enqueue(queue.dequeue());
        else {
            const value = queue.dequeue();
            answer += 1;
            if (location === value[1]) return answer
        }
    }
}