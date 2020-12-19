const algorithmTest = (testFunction, params, expects) => {
  params.forEach((param, idx) => {
    const result = testFunction(...param)
    const expect = expects[idx]

    let isMatch = result === expect
    if (Array.isArray(expect)) {
      isMatch = arrayMatch(result, expect)
    }

    if (isMatch) {
      console.log(`Match :: result : ${result}, expect : ${expect} `)
    } else {
      console.log(`
      ------------------------------------------------------
      \t param is ${param}
      
      \t result -> ${result} 
      \t expect -> ${expect}
      ------------------------------------------------------`)
    }
  })
}

const arrayMatch = (arr1, arr2) => {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  // Otherwise, return true
  return true
}

export { algorithmTest }