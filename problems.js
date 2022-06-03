function logBetween(lowNum, highNum) { //t: O(n), s: O(n)
    const arr = [];

    for (let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }

    return arr;
}

function logBetweenStepper(min, max, step) { //t: O(n) s: O(n)
    const arr = [];

    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }

    return arr;
}

const printReverse = (min, max) => { //t: O(n) s: O(n)
    const arr = [];

    for (let n = max - 1; n > min; n--) {
        arr.push(n);
    }

    return arr;
}

const fizzBuzz = function(max) { //t: O(n) s: O(n)
    const fizzArr = [];

    for (let n = 3; n <= max; n++) {
        if ((n % 3 === 0 || n % 5 === 0) && !(n % 3 === 0 && n % 5 === 0)) {
            fizzArr.push(n);
        }
    }

    return fizzArr;
}

function isPrime(num) { //t: O(n) s: O(1)
    if (num < 2) {return false}

    for (let n = 2; n < num; n++) {
        if (num % n === 0) {return false}
    }

    return true;
}

const maxValue = function(nums) { //t: O(n) s: O(1)
    if (nums.length === 0) {return null}
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {max = nums[i]}
    }

    return max;
}

const myIndexOf = (array, target) => { //t: O(n) s: O(1)

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {return i}
    }

    return -1;
}

function factorArray(array, number) { //t: O(n) s: O(n)
    const factors = [];

    array.forEach( num => {
        if (number % num === 0) {factors.push(num)}
    });

    return factors;
}

const oddRange = function(end) { //t: O(n) s: O(n)
    const odds = [];

    for (let n = 1; n <= end; n += 2) {
        odds.push(n);
    }

    return odds;
}

const reverseHyphenString = str => { //t: O(n) s: O(n)
    const hyphArr = str.split("-");
    const revArr = [];

    for(let i = hyphArr.length - 1; i >= 0; i--) {
        revArr.push(hyphArr[i]);
    }

    return revArr.join("-");
}

function intersect(arr1, arr2) { //t: O(n) s: O(n)
    const common = [];

    if (arr1.length > arr2.length) {
        arr1.forEach( el => {
            if (arr2.includes(el)) {common.push(el)}
        });
    } else {
        arr2.forEach( el => {
            if (arr1.includes(el)) {common.push(el)}
        });
    }

    return common;
}

const mirrorArray = function(arr) {
    const mirror = arr;

    for (let i = arr.length - 1; i >= 0; i--) {
        mirror.push(arr[i]);
    }

    return mirror;
}

const abbreviate = sentence => { //t: O(n^2) s: O(n)
    const sentArr = sentence.split(" ");

    sentArr.forEach( (word, i) => {
        if (word.length > 4) {
            sentArr[i] = abbreviateWord(word);
        }
    })

    return sentArr.join(" ");
}

const abbreviateWord = word => { //included in above
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const wordArr = word.split("");

    for (let i = 0; i < wordArr.length; i++) {
        if (vowels.includes(wordArr[i].toLowerCase())) {
            wordArr.splice(i, 1); i--;
        }
    }

    return wordArr.join("");
}

function adults(people) { //t: O(n) s: O(n)
    const adults = [];

    people.forEach( person => {
        if (person.age >= 18) {
            adults.push(person.name);
        }
    })

    return adults;
}

const countScores = function(people) { //t: O(n) s: O(n)
    const scores = {};

    people.forEach( person => {
        if (!scores[person.name]) {
            scores[person.name] = person.score;
        } else {
            scores[person.name] += person.score;
        }
    });

    return scores;
}

const firstNPrimes = num => { //t: O(n^2) s: O(n)
    const primes = [];

    for (let n = 2; primes.length < num; n++) {
        if (isPrime(n)) {primes.push(n)}
    }

    return primes;
}

function peakFinder(arr) { //t: O(n) s: O(n)
    const peaks = [];

    arr.forEach( (num, i) => {
        if (i === 0 && num > arr[i + 1]) {peaks.push(i)}
        else if (i === arr.length - 1 && num > arr[i - 1]) {peaks.push(i)}
        else if (num > arr[i - 1] && num > arr[i + 1]) {peaks.push(i)}
    });

    return peaks;
}

const divisibleByThreePairSum = function(arr) { //t: O(n^2) s: O(n)
    const threePS = [];

    arr.forEach( (num, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if ((num + arr[j]) % 3 === 0) {threePS.push([i,j])}
        }
    });

    return threePS;
}

const zipArray = (arr1, arr2) => { //t: O(n) s: O(n)
    const zipped = [];

    for (let i = 0; i < arr1.length; i++) {
        zipped.push([arr1[i], arr2[i]]);
    }

    return zipped;
}

function twoDimensionalTotal(array) { //t: O(n) s: O(1)
    let sum = 0;

    array.forEach( arr => {
        arr.forEach( num => {
            sum += num;
        });
    });

    return sum;
}

const countInnerElement = function(array) { //t: O(n) s: O(n)
    const count = {};

    array.forEach( arr => {
        arr.forEach( ele => {
            if (count[ele]) {count[ele]++}
            else {count[ele] = 1}
        });
    });

    return count;
}

const twoDiff = arr => { //t: O(n^2) s: O(n)
    const twoDiffArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] - arr[j] === 2) || (arr[j] - arr[i] === 2)) {
                twoDiffArr.push([i, j]);
            }
        }
    }

    return twoDiffArr;
}

function arrayDiff(arr1, arr2) { //t: O(n) s: O(n)
    const difference = [];

    arr1.forEach( ele => {
        if (!arr2.includes(ele)) {
            difference.push(ele);
        }
    });

    return difference;
}

const valueCounter = function(obj, val) { //t: O(n) s: O(1)
    let count = 0;

    for(let key in obj) {
        if (obj[key] === val) {count++}
    }

    return count;
}

const elementCount = arr => { //t: O(n) s: O(n)
    const counter = {};

    arr.forEach( ele => {
        if (counter[ele]) {counter[ele]++}
        else {counter[ele] = 1}
    })

    return counter;
}

function nextTwoPrimes(num) { //t: O(n) s: O(1)
    const nextTwoPrimes = [];

    for (let n = num + 1; nextTwoPrimes.length < 2; n++) {
        if (isPrime(n)) {nextTwoPrimes.push(n)}
    }

    return nextTwoPrimes;
}

const pairProduct = (arr, num) => { //t: O(n^2) s: O(n)
    const pairs = []; let i = 0;

    while ( i < arr.length) {
        let j = i + 1;

        while ( j < arr.length ) {

            if (arr[i] * arr[j] === num) {
                pairs.push([i, j]);
            }

            j++
        }
        i++;
    }
    return pairs;
}

function twoDimensionalSize(array) { //t: O(n) s: O(1)
    let count = 0;

    array.forEach( arr => {
        arr.forEach( ele => {
            count++;
        })
    })

    return count;
}

const longWordCount = function(sentence) { //t: O(n) s: O(1)
    const words = sentence.split(" ");
    let count = 0;

    words.forEach( word => {
        if (word.length > 7) {count++}
    })

    return count;
}

const factorial = n => { //t: O(n) s: O(1)
    if (n === 1) {return 1}

    return n * factorial(n - 1);
}

const iterFactorial = num => { //t: O(n) s: O(1)
    let factorial = 1;

    for(let n = 2; n <= num; n++) {
        factorial *= n
    }

    return factorial;
}

function lcm(num1, num2) { //t: O(n) s: O(1)
    let greater;

    if (num1 > num2) {greater = num1}
    else {greater = num2}

    for(let n = greater; n <= num1 * num2; n++) {
        if ((n % num1 === 0) && (n % num2 === 0)) {return n}
    }
}

const hipsterfyWord = function(word) { //t: O(1) s: O(n)
    const letters = word.split("");
    const vowels = "aeiouAEIOU";

    for(let i = letters.length - 1; i >= 0; i--) {
        if (vowels.includes(letters[i])) {
            letters.splice(i, 1);
            return letters.join("");
        }
    }
}

const hipsterfy = sentence => { //t: O(n) s: O(n)
    const sentArr = sentence.split(" ");

    sentArr.forEach( (word, i) => {
        sentArr[i] = hipsterfyWord(sentArr[i])
    });

    return sentArr.join(" ");
}

function objectToString(count) { //t: O(n) s: O(n)
    let str = "";

    for (let letter in count) {
        for (let i = 0; i < count[letter]; i++) {
            str += letter;
        }
    }

    return str;
}

const shortestWord = function(sentence) { //t: O(n) s: O(n)
    const words = sentence.split(" ");
    let shortest = words[0];

    for(let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i]
        }
    }

    return shortest;
}

const greatestCommonFactor = (num1, num2) => { //t: O(n) s: O(1)
    let smaller;

    if (num1 < num2) {smaller = num1}
    else {smaller = num2}

    for (let n = Math.abs(smaller); n > 0; n--) {
        if ((num1 % n === 0) && (num2 % n === 0)) {return n}
    }
}

function isPassing(assessments) { //t: O(n) s: O(1)
    let total = 0

    assessments.forEach( function(assessment) {
        total += assessment.score;
    })

    let average = total / assessments.length
    return (average >= 70);
}

const valueConcat = function(array, obj) { //t: O(n) s: O(n)
    const concatArr = [];

    array.forEach( function(ele) {
        if(ele in obj) {
            concatArr.push(ele + obj[ele])
        } else {
            concatArr.push(ele);
        }
    });

    return concatArr;
}

const threeInARow = arr => { //t: O(n) s: O(1)

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] === arr[i - 1]) && (arr[i - 1] === arr[i - 2])) {
            return true;
        }
    }

    return false;
}

function variableNameify(words) { //t: O(n) s: O(n)
    let variable = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        variable += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return variable;
}

const threeIncreasing = function(arr) { //t: O(n) s: O(1)

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i - 2] === arr[i - 1] - 1) && (arr[i - 1] === arr[i] - 1)) {
            return true;
        }
    }

    return false;
}

const reverse2D = array => { //t: O(n) s: O(n)
    let reversed = "";

    for (let i = array.length - 1; i >= 0; i--) {
        let arr = array[i];

        for(let j = arr.length - 1; j >= 0; j--) {
            reversed += arr[j]
        }
    }

    return reversed;
}

function reverb(word) { //t: O(n) s: O(1)
    const vowels = "aeiouAEIOU";

    for(let i = word.length - 1; i >= 0; i--) {

        if (vowels.includes(word[i])) {
            return word + word.slice(i)
        }
    }

    return word;
}

const countRepeats = function(string) { //t: O(n) s: O(n)
    const counter = {}; let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (counter[string[i]]) {counter[string[i]]++}
        else {counter[string[i]] = 1}
    }

    for (let letter in counter) {
        if (counter[letter] > 1) {count++}
    }

    return count;
}

const pairsToString = array => { //t: O(n) s: O(n)
    let str = "";

    array.forEach( arr => {
        for (let i = 0; i < arr[1]; i++) {
            str += arr[0];
        }
    });

    return str;
}

function countAdjacentSums(arr, n) { //t: O(n) s: O(1)
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] + arr[i - 1] === n) {count++}
    }

    return count;
}

const signFlipCount = function(nums) { //t: O(n) s: O(1)
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0)) {
            count++;
        }
    }

    return count;
}

const powerSequence = (base, length) => { //t: O(n) s: O(n)
    const powerArr = [base];

    for (let i = 0; i < length - 1; i++) {
        powerArr.push(powerArr[i] * base);
    }

    return powerArr;
}

function collapseString(str) { //t: O(n) s: O(n)
    let current; let collapsed = "";

    for (let i = 0; i < str.length; i++) {
        if (current === str[i]) {}
        else {
            collapsed += str[i];
            current = str[i];
        }
    }

    return collapsed;
}

const oddWordsOut = function(sentence) { //t: O(n) s: O(n)
    const sentArr = sentence.split(" ");
    const newSent = [];

    sentArr.forEach( function(word) {
        if (word.length % 2 === 0) {
            newSent.push(word);
        }
    })

    return newSent.join(" ");
}

const mindPsAndQs = str => {
    let pqStreak = 0; let longest = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "P" || str[i] === "Q") {
            pqStreak++;
            if (pqStreak > longest) {longest = pqStreak}
        } else {
            pqStreak = 0;
        }
    }

    return longest;
}

function commonFactors(num1, num2) { //t: O(n) s: O(n)
    const commonFacts = []; let shortest
    if (num1 < num2) {shortest = num1}
    else {shortest = num2}

    for(let n = 1; n <= shortest; n++) {
        if ((num1 % n === 0) && (num2 % n === 0)) {
            commonFacts.push(n);
        }
    }

    return commonFacts;
}

const commonPrimeFactors = function(num1, num2) { //t: O(n^2) s: O(n)
    const commonFacts = commonFactors(num1, num2);
    const commonPrimes = [];

    commonFacts.forEach( function(n) {
        if (isPrime(n)) {commonPrimes.push(n)}
    });

    return commonPrimes;
}

const splitHalfArray = array => { //t: O(1) s: O(n)
    const splitArr = [];
    let half = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        splitArr.push(array.slice(0, half));
        splitArr.push(array.slice(half));
    } else {
        splitArr.push(array.slice(0, half));
        splitArr.push(array.slice(half + 1));
    }

    return splitArr;
}

function threeUniqueVowels(string) {
    const vowels = "aeiou"; const uniqs = [];

    for(let i = 0; i < string.length; i++) {
        let letter = string[i].toLowerCase();

        if (vowels.includes(letter) && !uniqs.includes(letter)) {
            uniqs.push(letter);
        }
    }

    return (uniqs.length >= 3);
}

const vowelShift = sentence => { //t: O(n^2) s: O(n)
    const vowels = "aeiou"
    const letters = sentence.split("")

    letters.forEach( (ele, i) => {
        if (vowels.includes(ele)) {
            vIdx = ((vowels.indexOf(ele) + 1) % vowels.length)
            letters.splice(i, 1, vowels[vIdx]);
        }
    });

    return letters.join("");
}

function hasSymmetry(array) { //t: O(n) s: O(n)
    const forward = array.join("");
    let backward = "";

    for (let i = array.length - 1; i >= 0; i--) {
        backward += array[i];
    }

    return (backward === forward);
}

const evenSum = num => { //t: O(n) s: O(1)
    let sum = 0;

    for(let n = 2; n <= num; n += 2) { sum += n }

    return sum;
}

const evenSumArray = arr => { //t: O(n^2) s: O(n)
    const evenSums = [];

    arr.forEach( num => {
        evenSums.push(evenSum(num));
    });

    return evenSums;
}

function numsToWords(numStr) { //t: O(n^2) s: O(n)
    let words = "";

    for(let i = 0; i < numStr.length; i++) {
        let num = numStr[i];

        if (num === "0") {words += "Zero"}
        else if (num === "1") {words += "One"}
        else if (num === "2") {words += "Two"}
        else if (num === "3") {words += "Three"}
        else if (num === "4") {words += "Four"}
        else if (num === "5") {words += "Five"}
        else if (num === "6") {words += "Six"}
        else if (num === "7") {words += "Seven"}
        else if (num === "8") {words += "Eight"}
        else if (num === "9") {words += "Nine"}
    }

    return words;
}

function numsToWords2(numStr) { //t: O(n) s: O(n)
    let words = "";
    const numWords ={'1': "One", '2': "Two", '3': "Three", "4": "Four", '5': 'Five',
    '6': 'Six', '7': 'Seven', '8': "Eight", "9": "Nine", "0": "Zero"}

    for(let i = 0; i < numStr.length; i++) {
        let num = numStr[i];

        if (num in numWords) {words += numWords[num]};
    }

    return words;
}

const moreDotLessDash = function(str) { //t: O(n) s: O(1)
    let dotCount = 0; let dashCount = 0;

    for(let i = 0; i < str.length; i++) {
        if (str[i] === ".") {dotCount++}
        else if (str[i] === "-") {dashCount++}
    }

    return dotCount > dashCount;
}
