function checkAnagram() {
  // first read words from html
  // if the words have un-equal length they will not be anagrams
  // afterwards, write the output [Anagram or Not Anagram to Html Page]
  let word1 = document.getElementById("word1").value.toLowerCase();
  let word2 = document.getElementById("word2").value.toLowerCase();
  //   console.log(word1);
  //   console.log(word2);
  let string1 = word1.split("").sort().join("");
  //let string1 = word1.sort();

  let string2 = word2.split("").sort().join("");
  console.log(string1);
  console.log(string2);
  if (word1.length !== word2.length) {
    document.getElementById("result").innerHTML = "Not Anagram";
    return;
  }
  if (string1 == string2) {
    document.getElementById("result").innerHTML = "Anagram";
    return;
  } else {
    document.getElementById("result").innerHTML = "Not Anagram";
  }

  //   const letters = {};
  //   for (let i = 0; i < word1.length; i++) {}

  //   for (let i = 0; i < word1.length; i++) {
  //     for (let j = 0; j < word2.length; j++) {
  //       if (word1[i] == word2[j]) {

  //     }
  //   }
  //   //   if (word1.length == word2.length) {
  //   //     console.log("The word is Anagram");
  //   //   } else {
  //   //     console.log("The word is not Anagram");
  //   //   }
  // }
}
