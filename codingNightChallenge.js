// For this challenge, you will be required to build a Morse code encryptor and decrypter.

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//splitting alphabet to form an array of seperate elements
let alphabetArray = alphabet.split("");

//morse alphabet
let morseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

// const stringToMorseCode = (word) => {
//   //store word in own array with each element split
//   let wordArray = word.split("");
//   //search through alphabetArray to find matching index
//   const findIndex = (alphabet) => {
//     for (let i = 0; i < alphabet.length; i++) {
//       if (alphabet[i] === wordArray[i]) {
//         indexes.push(i);
//       }
//     }
//   };

//   findIndex(alphabetArray)
//   console.log(indexes);
// };

const stringToMorseCode = (word, alphabetArray, morseCode) => {
  let wordArray = word.split("");

  //   const filteredArray = wordArray.filter((value) =>
  //     alphabetArray.includes(value)
  //   );
  //need to match the elements in both arrays then find the index of those arrays. Map method?
  console.log(
    alphabetArray.map(function (value, index, arr) {
      return index;
    })
  );
};

stringToMorseCode("CHALLENGE", alphabetArray, morseCode);
