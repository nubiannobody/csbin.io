/* ========== *
* Challenge 2 *
* =========== */

// Create a functon buildSentence that takes three words (strings) and adds them together 
// and console.logs the whole sentence (string) complete with capitalization and punctuation. 

function buildSentence(word1, word2, word3) {
// your code goes here...

return word1[0].toUpperCase() + word1.slice(1) + " " + word2 + " " + word3 + ".";

}

console.log(buildSentence("coding", "is", "awesome")) //=> "Coding is awesome."
console.log(buildSentence("we're", "number", "1")) //=> "We're number 1."

