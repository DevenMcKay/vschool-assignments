Setup Jest
  1. npm init -y
  2. npm i -save-dev jest
  #  installs jest as dev tool (not for final deployment)
  3. >package.json> change "test" to "test" : "jest"
  4. create <FILENAME>.test.js file for each module
  5. import module/function to be tested in <FILENAME>.test.js and construct test
  6. npm test (runs all <FILENAME>.test.js in node executed folder)
  7. npm test -- <FILENAME>.test.js to run single test file
  #  expect(<FILENAME>(a,b)).toBe(c) ensure parenthesis placement: expect(()).toBe()
  # package.json > change "test" to "test" : "jest --coverage" 
  # >coverage>index.html> open with live server 