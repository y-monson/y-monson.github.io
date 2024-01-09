
const cards = document.querySelectorAll('.card')

// Each card is assigned the class="flipped" which hides the 
// skill name and logo and sisplays the skill level
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped')
  })
});