/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string str which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the str correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result += n;
    return this.result;
  }

  subtract(n) {
    this.result -= n;
    return this.result;
  }

  multiply(n) {
    this.result *= n;
    return this.result;
  }

  divide(n) {
      if( n === 0) throw new Error('Divison by zero not viable')
      this.result /= n;
      return this.result;
    


  }

  clear() {
    this.result = 0;
    return this.result;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    try {
      str = str.replace(/\s+/g, '');
      if( /\/0/.test(str)) throw new Error('Divison by zero detected')
      // console.log(str,'Here is exp')
      this.result = eval(str);
      // console.log
      return this.result;
    } catch (e) {
      throw new Error('Division by zero');
    }
  }
}



module.exports = Calculator;