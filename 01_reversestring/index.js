//--Directions
//Given a string, return a new string with the reversed
//order of characters
//--Example
//  reverse('apple') === 'leppa'
//  reverse('hello') === 'olleh'
//  reverse('Greetings!') === '!sgniteerG'

function reverseStr(str) {
    //First solution
    // const arr = str.split('')
    // arr.reverse();
    // return arr.join('');
    // return str.toLowerCase().split('').reverse().join('');

    //Second solution
    // let reversed = '';
    // for(let character of str){
    //     reversed = character + reversed
    //     //Hello
    //     //0--- H
    //     //1--- e + H = eH
    //     //2--- l + eH = leH
    //     //3--- l + leh = lleH
    //     //4--- o + lleH 
    //     //outpu = olleH
    // }
    // return reversed;

    //Third solution
    return str.split('').reduce((accumulator, character)=> {
        return character + accumulator;
    });
}

module.exports = reverseStr;