// TODO: Dom ui js code
import * as CountSolutions from './count-people/countpeople.js';

const codeContainer = document.getElementById('codeContainer');

function displayCode(code) {
  codeContainer.innerText = code;
}

// Get the solution code
const solutionCode1 = CountSolutions.solution.toString();
const solutionCode2 = CountSolutions.solution2.toString();

// Format the code for display
const formattedCode = `
      // Solution 1
      ${solutionCode1}

      // Solution 2
      ${solutionCode2}
    `;

// Display the formatted code
displayCode(formattedCode);