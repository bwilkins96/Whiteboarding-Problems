class Stack {

    constructor() {
        this.data = [];
        this.min = null;
    }

    push(ele) { //t: O(1)
        this.data[this.data.length] = ele;

        if (ele < this.min || !this.min) {this.min = ele}
    }

    pop() { //t: average-case O(1), worst-case O(n)
        let popped = this.data.pop();

        if ( popped === this.min && this.data.length > 0) {
            this.min = this.data[0];

            for(let i = 1; i < this.data.length; i++) {
                if (this.data[i] < this.min) {this.min = this.data[i]}
            }
        } else if (this.data.length === 0) {this.min = null}

        return popped;
    }

    getMin() { //t: O(1)
        if (this.min) { return this.min }
    }

}


// Example

let testStack = new Stack();

console.log("min: " + testStack.getMin() + "\n"); // undefined

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);

console.log(testStack.data); // [1, 2, 3, 4]
console.log("min: " + testStack.getMin() + "\n"); // 1

testStack.push(-15);

console.log(testStack.data); // [1, 2, 3, 4, -15]
console.log("min: " + testStack.getMin() + "\n") // -15

console.log(testStack.pop()) // -15
console.log(testStack.data); // [1, 2, 3, 4]
console.log("min: " + testStack.getMin()) // 1
