/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanStr = str.replace(/\s+/g, '')
  cleanStr = cleanStr.replace(/[^\w\s]/g, '')
  let forwardStr = cleanStr.toLowerCase()
  let backwardStr = []
  const strArray = cleanStr.toLowerCase().split('')
  //console.log(forwardStr, strArray)
  for( i=strArray.length; i>0; i--){
    backwardStr.push(strArray[i-1])
  }
  backwardStr = backwardStr.join('')
  //console.log(`Here is fstr ${forwardStr} and bstr ${backwardStr}`)

  if( forwardStr == backwardStr){
    return true;
  }else{
    return false;
  }
  
}
module.exports = isPalindrome;

