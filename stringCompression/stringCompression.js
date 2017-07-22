// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).


const crayCrayString = 'aabcccccaaa';

let newString = crayCrayString.split('');

const stringCompression = (str) => {
  let letterNumber = 0; 
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      letterNumber += 1;
    }
    while (str[i] === str[i + 1]) {
      str.pop(str[i]);
    }
   return newString.join(letterNumber);
  }
};

console.log(stringCompression(newString));
