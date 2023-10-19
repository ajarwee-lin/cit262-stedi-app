// myName.test.js

const { expect } = require('chai');
const { getMyName } = require('./myName'); // Import the getMyName function

// Describe the test suite
describe('Name Function', () => {

  // Describe the specific function you're testing
  describe('getMyName', () => {

    // Write your test case
    it('should return your name', () => {
      const result = getMyName(); // Call the function
      expect(result).to.equal('Your Name'); // Check if the result matches your name
    });

  });

});
// Run the test
