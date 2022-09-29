
/* =========== *
* Challenge 9 *
* ============ */

// Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
// Assume the `ele` will be a primitive data type (no arrays or objects).
// DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION! 

function myIndexOf(array, ele){

    for (let val in array) {
        if (array[val] === ele) {
            return val;
        }
    }
    return -1
}

    // if (array.includes(ele)) {
    //     return array[ele];
    // } else {
    //     return -1
    // }
//}
  
  console.log(myIndexOf([1, 2, 3, 4, 5], 5)); //=> 4
  console.log(myIndexOf(["a", "b", "c"], "a")); //=> 0
  console.log(myIndexOf(["a", "b", "c"], "d")); //=> -1
  