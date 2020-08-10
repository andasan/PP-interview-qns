// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Hello there
// {
//     H:1,
//     e:3,
//     l:2,
//     o:1,
//     "": 1,
//     t:1,
//     h:1
//     r:1
// }

function maxChar(str){
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }
    console.log(charMap);

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// const result = maxChar('Hello there');
// console.log(result);

module.exports = maxChar;