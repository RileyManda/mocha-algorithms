import CountSolutions from './count-people/countpeople.js';

const cardContainer = document.querySelector('.counting-people-solution');

function createCard(solutionNumber) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  card.appendChild(cardHeader);

  const headerText = document.createElement('h3');
  headerText.textContent = `Counting People Solution ${solutionNumber}`;
  cardHeader.appendChild(headerText);

  const expandBtn = document.createElement('button');
  expandBtn.classList.add('expand-btn');
  const expandIcon = document.createElement('i');
  expandIcon.classList.add('fas', 'fa-chevron-down');
  expandBtn.appendChild(expandIcon);
  cardHeader.appendChild(expandBtn);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  card.appendChild(cardContent);

  const cardCodeContainer = document.createElement('code');
  cardCodeContainer.classList.add('code');
  cardContent.appendChild(cardCodeContainer);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas', 'fa-times');
  closeBtn.appendChild(closeIcon);
  cardContent.appendChild(closeBtn);

  closeBtn.style.display = 'none'; // Hide the close button initially

  return card;
}

// Define an array of solution functions
const solutionFunctions = [
  CountSolutions.solution,
  CountSolutions.solution2,
  CountSolutions.solution3,
];

// Generate cards for each solution
solutionFunctions.forEach((solutionFn, index) => {
  const card = createCard(index + 1); // Create a card element for the solution
  const expandBtn = card.querySelector('.expand-btn');
  const closeBtn = card.querySelector('.close-btn');
  const cardCodeContainer = card.querySelector('.code');

  function displayCode(element, code) {
    element.textContent = code;
  }

  // Display the solution code
  const solutionCode = solutionFn.toString();
  displayCode(cardCodeContainer, solutionCode);

  // Expand/Collapse functionality
  expandBtn.addEventListener('click', () => {
    card.classList.add('expanded');
    closeBtn.style.display = 'block';
    expandBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    card.classList.remove('expanded');
    closeBtn.style.display = 'none';
    expandBtn.style.display = 'block';
  });

  cardContainer.appendChild(card); // Add the card to the container
});
