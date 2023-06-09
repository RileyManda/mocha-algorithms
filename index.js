import CountSolutions from './count-people/countpeople.js';

const cardCodeContainer = document.getElementById('cardCodeContainer');
const expandBtn = document.querySelector('.expand-btn');
const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');
const closeBtn = document.querySelector('.close-btn');

function displayCode(code) {
  cardCodeContainer.textContent = code;
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

// Expand/Collapse functionality
expandBtn.addEventListener('click', () => {
  cardContent.classList.toggle('expanded');
  expandBtn.classList.toggle('expanded');
  card.classList.toggle('expanded');

  if (card.classList.contains('expanded')) {
    closeBtn.style.display = 'block';
    expandBtn.style.display = 'none';
  } else {
    closeBtn.style.display = 'none';
    expandBtn.style.display = 'block';
  }
});

closeBtn.addEventListener('click', () => {
  cardContent.classList.remove('expanded');
  expandBtn.classList.remove('expanded');
  card.classList.remove('expanded');
  closeBtn.style.display = 'none';
  expandBtn.style.display = 'block';
});
