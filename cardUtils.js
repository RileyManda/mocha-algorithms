function createCard(document, targetElement, solutionNumber, solutionName) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  card.appendChild(cardHeader);

  const headerText = document.createElement('h3');
  headerText.textContent = `Counting People: ${solutionNumber}: ${solutionName}`;
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

  targetElement.appendChild(card);

  return card;
}

function displayCode(card, code) {
  const cardCodeContainer = card.querySelector('.code');
  cardCodeContainer.textContent = code;
}

module.exports = {
  createCard,
  displayCode,
};
