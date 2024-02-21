/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*What to check for a anagram
1. Check if the number of letters are same

2. Check if the letter from one is all present in the other 
   convert everything in lower
   and then place a check for the existence 
*/

function isAnagram(str1, str2) {
 const str1Clean = str1.replace(/\s/g, '').toLowerCase();
 const str2Clean = str2.replace(/\s/g, '').toLowerCase();
 console.log()
  if(str1Clean.length != str2Clean.length){
    return false
  } else{
    let sortedStr1 = str1Clean.split('').sort().join('')
    let sortedStr2 = str2Clean.split('').sort().join('')
    if( sortedStr1 === sortedStr2){
      return true
    }else{
      return false
    }
  }
 
}

module.exports = isAnagram;
