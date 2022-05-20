
// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. 
// A valid argument is a number followed by a sequence of letters. 
// Ex. 2fcjjm

// The number in the string represents how many characters 
// each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

// Write your code below this line


function decoder(str) {
    let solution = "";
    let decipher = Number(str[0]);
    for (let i = 1; i < str.length; i++) {
        let strValue = str[i].charCodeAt() + decipher;
        solution += String.fromCharCode(strValue);
    }
    return solution;
}

console.log(decoder('2fcjjm'));
