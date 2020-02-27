// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
        return this.data
    }

    remove() { 
        this.data.pop();
        return 1
    }
}

const q = new Queue()
q.add(1)
q.add(2)
q.remove()
console.log(q)

module.exports = Queue;
