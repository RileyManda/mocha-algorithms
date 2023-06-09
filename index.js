// TODO: Dom ui js code
import * as CountSolutions from './count-people/countpeople.js';

const codeContainer = document.getElementById('codeContainer');

function displayCode(code) {
  codeContainer.innerText = code;
}

// Get the solution code
const countsolutionCode1 = CountSolutions.solution.toString();
const countsolutionCode2 = CountSolutions.solution2.toString();

// Format the code for display
const formattedCode = `
      // Solution 1
      ${countsolutionCode1}

      // Solution 2
      ${countsolutionCode2}
    `;

// Display the formatted code
displayCode(formattedCode);