// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
    //solution 1
    // let count = 0;
    // const vowelCheker = ['a','e','i','o','u'];

    // for(let char of str.toLowerCase()){
    //     // includes
    //     if(vowelCheker.includes(char)){
    //         count++;
    //     }
    // }
    // return count;

    //solution 2
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}

console.log(vowels('Why do you ask?'));
module.exports = vowels;   