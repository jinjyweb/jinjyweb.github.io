const languageCards = document.querySelectorAll('.language-card');

languageCards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      languageCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    }
  });
});