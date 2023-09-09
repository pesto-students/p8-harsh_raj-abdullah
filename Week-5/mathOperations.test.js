const mathOperations = require('./Ex-5.4_mathOperations');

describe('Test Cases for mathOperations week5', () => { 
  
  test('sum 1 + 2 to equal 3.', () => { 
    expect(mathOperations.sum(1, 2)).toBe(3)
  })

  test('diff 5 - 3 to equal 2.', () => { 
    expect(mathOperations.diff(5, 3)).toBe(2)
  })

  test('product 3 * 2 to equal 6.', () => { 
    expect(mathOperations.product(3, 2)).toBe(6)
  })

})
