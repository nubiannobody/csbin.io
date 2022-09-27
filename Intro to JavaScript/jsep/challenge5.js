/*
* ========== *
* Challenge 5 *
* =========== */

/*
indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
Enter the index position you think indexOf will return for each below. 
*/

function indexOf(string1, string2) {
        let position = string1.indexOf(string2)
        if (string1.includes(string2)) {
            return "index " + "| " + position;
        } else {
            return "-1";
        }
    }

console.log(indexOf("CodeSmith", "o")) //=== 1 ); // true
console.log(indexOf("hello", "ll")) // === 2 ); // true
console.log(indexOf("zebra", "z")) // === 0 ); // true
console.log(indexOf("banana", "B")) // === 0 ); // false 

