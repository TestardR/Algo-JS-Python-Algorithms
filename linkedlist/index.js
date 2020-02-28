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
            return this.head = null;
        }

        let node = this.head.next;
        let previous = this.head;

        while (node.next) {
            previous = node
            node = node.next
        }

        previous.next = null;
    }

    insertLast(data) {

        let node = this.head

        if (!node) {
            return node = new Node(data, null);
        }

        while (node) {
            if (!node.next) {
                return node.next = new Node(data, null)
            }
            node = node.next;
        }
    }

    getAt(n) {
        let counter = 0;

        let node = this.head;

        while (node) {
            if (counter === n) {
                return node
            }
            counter++
            node = node.next

        }

        return null

    }

    removeAt(n) {
        if (!this.head) {
            return null
        }

        if (index === 0) { 
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(n - 1);
        // out of bounce
        if(!previous || !previous.next) {
            return;
        }
        // jump over
        previous.next = previous.next.next

    }

    insertAt(data, n) {
        if (!this.head) {
            this.head = new Node(data)
        }

        if (index === 0) { 
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(n - 1);
        // out of bounce
        const node = new Node(data, previous.next)

        previous.next = node
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while(node) {
            fn(node, counter)
            counter++
            node = node.next
        }

        return;
    }




}

const list = new LinkedList();
list.insertFirst('c');
list.insertFirst('d');
list.insertLast('e')
console.log(list.getAt(2));

module.exports = { Node, LinkedList };
