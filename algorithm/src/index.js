function solution(num) {
  let count = 0

  while (num !== 1 && count++ <= 500) {
    num = num % 2 ? num * 3 + 1 : (num /= 2)
  }

  return num === 1 ? count : -1
}
//////////////////////////

const { algoTest } = require('./utils')

const testFunc = solution
const params = [6, 16, 626331, 1]
const expects = [8, 4, -1, 0]

algoTest(testFunc, params, expects)

console.log(params)
