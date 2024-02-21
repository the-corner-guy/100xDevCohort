/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let str = str.toLowerCase()
    const vow = ['a', 'e', 'i', 'o', 'u']
    let vCount = 0
    const newStrSorted = str.replace(/\s/g,'').split('')
    for(i=0; i < newStrSorted.length; i++ ){
      if( vow.includes(newStrSorted[i])){
        vCount++
      }
    }
    return vCount
}

module.exports = countVowels;