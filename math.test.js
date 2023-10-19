// math.test.js

const { expect } = require('chai');
const { add } = require('./math'); // Import the add function

// Describe the test suite
describe('Math Functions', () => {

  // Describe the specific function you're testing
  describe('add', () => {

    // Write your test case
    it('should return the sum of two numbers', () => {
      const result = add(2, 3); // Call the function with test data
      expect(result).to.equal(5); // Check if the result matches the expected value
    });

    it('should handle negative numbers', () => {
      const result = add(-5, 3);
      expect(result).to.equal(-2);
    });

  });

});
