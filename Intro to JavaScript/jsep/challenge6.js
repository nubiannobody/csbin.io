/* ========== *
* Challenge 6 *
* =========== */

// Create a function letterExists that takes a word (string) 
// and a character (string), and console.logs whether that letter can be found inside that word. 

function letterExists(word, letter) {

if (word.includes(letter)) {
        return true
    } else {
        return false;
    }
  
  }
  
  console.log(letterExists("superman", "e")); //=> true
  console.log(letterExists("starship", "S")); //=> false
  console.log(letterExists("th1s", "1")); //=> true
  console.log(letterExists("he!lo", "!")); //=> true