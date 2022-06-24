const cloneArray = require('./cloneArray')

// Test Fails
test("properly clones array", () => {
  const array = [1,2,3]
  expect(cloneArray(array))
  .toBe(array)
})
// Err: returns array with same value but diff ref location 
// Expected: [1, 2, 3], Received: serializes to the same string

// Test Passes (Using .toEqual and .not.toBe method)
test("properly clones array", () => {
  const array = [1,2,3]
  expect(cloneArray(array))
  .toEqual(array)
  expect(cloneArray(array))
  .not.toBe(array)
})

