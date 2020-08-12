// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Tom Marvolo Riddle <----> I Am Lord Voldemort

function anagrams(stringA, stringB){
    //Solution 1
    // const aCharMap = buildCharMap(stringA);
    // const bCharMap = buildCharMap(stringB);

    // if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    //     return false
    // }

    // for(let char in aCharMap){
    //     if(aCharMap[char] !== bCharMap[char]){
    //         return false
    //     }
    // }

    // return true;

    //Solution 2
    return cleanString(stringA) === cleanString(stringB);
}

//helper function
function buildCharMap(str){

    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        //if else
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
        //ternary operator
        // charMap[char] = charMap[char] + 1 || 1
    }

    return charMap;
}

//2nd helper function for solution 2
function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// console.log('anagrams: ', anagrams('Tom Marvolo Riddle', 'I Am Lord Voldemort'))
module.exports = anagrams;

