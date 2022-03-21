// You can find a table of Morse code characters here:
// https://morsedecoder.com/

let alphabet = ` !ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
//splitting alphabet to form an array of seperate elements
let alphabetArray = alphabet.split("");

//morse alphabet
let morseCode = [
  "/",
  "-.-.--",
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

const stringToMorseCode = (word) => {
  let wordArray = word.split("");
  let index,
    indexes = [],
    morseCodedArray = [],
    morseCodedString;

  //below loops through wordArray and for every element it searches alphetArray to find the matching elements index
  for (let i = 0; i < wordArray.length; i++) {
    index = alphabetArray.findIndex((letter) => letter === wordArray[i]);
    indexes.push(index);
  }
  //use indexes to match indexes inside morseCode array to extract morecode elements
  for (let j = 0; j < indexes.length; j++) {
    //below line sends morse code values to morseCodedArray
    morseCodedArray.push(morseCode[indexes[j]]);
    //morseCodedArray to string
    morseCodedString = morseCodedArray.join(" ");
  }

  console.log(morseCodedString);
};

stringToMorseCode("HELLO MY NAME IS GERSHWEN");

//Challenge 2
const morseCodeToString = (code) => {
  //seperating morse code string with by space and storing them as elements inside codeArray
  let codeArray = code.split(" ");
  let index,
    indexes = [],
    stringedArray = [],
    wordString;

  for (let i = 0; i < codeArray.length; i++) {
    index = morseCode.findIndex((morsecode) => morsecode === codeArray[i]);
    indexes.push(index);
  }

  for (let j = 0; j < indexes.length; j++) {
    stringedArray.push(alphabetArray[indexes[j]]);
    wordString = stringedArray.join("");
  }

  console.log(wordString);
};

morseCodeToString(
  ".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ... / --. . .-. ... .... .-- . -."
);


