const missingValue = arr => { //t: O(n), s: O(1)
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr[i]) {return i}
    }
}

// Example

let testArr = [0, 1, 2, 3, 4, 6, 7, 8];

console.log(missingValue(testArr)) // 5
