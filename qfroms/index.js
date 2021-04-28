// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(element) {
        this.stack1.push(element);
    }

    remove() {
        this.fillStack2();
        return this.stack2.pop();
    }

    peek() {
        this.fillStack2();
        return this.stack2.peek();
    }

    fillStack2() {
        let element = this.stack1.pop();
        while (element) {
            this.stack2.push(element)
            element = this.stack1.pop();
        }
    }
}

module.exports = Queue;