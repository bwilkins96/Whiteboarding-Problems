class LinkedNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor(val = null) {
        this.head = null;

        if (val) {
            this.head = new LinkedNode(val);
        }
    }

    add(val) {
        let newNode = new LinkedNode(val);
        if (!this.head) {this.head = newNode; return}

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    getArray() { //t: O(n) s: O(n)
        const nodeArr = [];

        let current = this.head;

        while (current) {
            nodeArr.push(current);
            current = current.next;
        }

        return nodeArr;
    }

    reverse() { //t: O(2n) or O(n) s: O(n)
        const nodeArr = this.getArray();
        if (nodeArr.length < 2) {return}

        this.head = nodeArr[nodeArr.length - 1];

        for (let i = nodeArr.length - 1; i >= 0; i--) {
            nodeArr[i].next = nodeArr[i - 1];
        }

        nodeArr[0].next = null;
    }

    getValues() {
        const nodeArr = this.getArray();
        const values = [];

        for(let i = 0; i < nodeArr.length; i++) {
            values.push(nodeArr[i].val);
        }

        return values;
    }

}


// Example

let testList = new SinglyLinkedList(12);
testList.add(99);
testList.add(37);
testList.add(14);

/* for(let i = 1; i <= 96; i++) {
    testList.add(i);
} */

console.log(testList.getValues()); // [12, 99, 37, 14]
//console.log(testList.getArray());

testList.reverse();

console.log("\n" + testList.head.val + "\n"); // 14
console.log(testList.getValues()); // [14, 37, 99, 12]
//console.log(testList.getArray());
