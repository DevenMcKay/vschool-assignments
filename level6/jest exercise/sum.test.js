// const { default: test } = require('node:test')
const {sum,helper} = require('./sum')

test('Properly adds two numbers', () => {
  expect(sum(1, 2)
  ).toBe(3)
})

helper()