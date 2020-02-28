// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (!node) {
            return null;
        }

        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        return this.head = null;
    }

    removeFirst() {
        return this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {

            previous = node;

            node = node.next;

        }

        previous.next = null;
    }


}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeLast();

console.log(list.getLast());
console.log(list.size());

module.exports = { Node, LinkedList };
