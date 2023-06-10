const cardUtils = require('./cardUtils.js');
const CountSolutions = require('./count-people/countpeople.js').CountSolutions;

const createCard = cardUtils.createCard;
const displayCode = cardUtils.displayCode;

// Define an array of solution functions with their respective names
const solutionFunctions = [
  { fn: CountSolutions.binarySolution, name: 'Binary Solution' },
  { fn: CountSolutions.linkedListSolution, name: 'Linked List Solution' },
  { fn: CountSolutions.binarySearchSolution, name: 'Binary Search Solution' },
  { fn: CountSolutions.mergeSortSolution, name: 'Merge Sort Solution' },
  { fn: CountSolutions.quickSortSolution, name: 'Quick Sort Solution' },
  {fn: CountSolutions.binarySearchTreeSolution,name: 'Binary Search Tree Solution',
  },
];

// Function to generate cards for each solution
function generateCards(targetElement) {
  solutionFunctions.forEach((solution, index) => {
    const card = createCard(targetElement, index + 1, solution.name);

    const solutionCode = solution.fn.toString();
    displayCode(card, solutionCode);

    card.expand = () => {
      card.expanded = true;
    };

    card.collapse = () => {
      card.expanded = false;
    };

    card.addEventListener('expand', () => {
      card.classList.add('expanded');
    });

    card.addEventListener('collapse', () => {
      card.classList.remove('expanded');
    });

    console.log(card);
  });
}


const targetElement = {
  querySelector: (selector) => console.log(`Querying selector: ${selector}`),
};
generateCards(targetElement);
