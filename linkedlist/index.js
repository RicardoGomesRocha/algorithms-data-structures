// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {


    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        ++this.length;
    }

    size() {
        return this.length;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    removeFirst() {
        const node = this.head;
        const next = this.head.next;
        if (next) {
            this.head = new Node(next.data, next.next);
        } else {
            this.head = null;
        }
        --this.length;
        return node;
    }

    removeLast() {
        let node = this.head;
        let removeElement = null
        if (!node) return removeElement;
        if (!node.next) {
            removeElement = node.next;
            this.head = null;
            this.length = 0;
            return removeElement;
        } else {
            while (node.next && node.next.next) {
                node = node.next;
            }
            removeElement = node.next;
            node.next = undefined;
            --this.length;
        }
        return removeElement;
    }


    insertLast(element) {
        let node = this.getLast();
        if (node) {
            node.next = new Node(element);
        } else {
            this.head = new Node(element);
        }
        ++this.length;
    }

    getAt(index) {
        if (index > this.length) return null;
        let i = 0;
        let node = this.head;
        while (index > i) {
            ++i;
            node = node.next;
        }
        return node;
    }

    removeAt(index) {
        let i = 0;
        let node = this.head;
        let removedElement = null;
        if (!node) return removedElement;
        if (this.length === 1) {
            removedElement = this.head;
            this.head = null;
            return removedElement;
        }
        if (index === 0) {
            removedElement = this.head;
            this.head = this.head.next;
            return removedElement;
        }
        while (index - 1 > i) {
            node = node.next;
            ++i
        }
        removedElement - node.next;
        node.next = node.next.next;
        --this.length;
    }

    insertAt(element, index) {
        ++this.length;
        if (index === 0) {
            return this.insertFirst(element);
        }
        if (index >= this.length) {
            return this.insertLast(element);
        }
        const node = this.getAt(index - 1);
        node.next = new Node(element, node.next);
        return node.next;
    }

    forEach(callback, node = this.head) {
        if (node) {
            callback(node);
            this.forEach(callback, node.next);
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = {
    Node,
    LinkedList
};