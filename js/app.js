// Array which holds the cards
let card = document.getElementsByClassName('card');
let cards = [...card];

// Array which will compare to see if matching
let flippedCards = [];

// Loop through cards to display
for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', showCard)
}

// Toggle open and show class when card is clicked
function showCard() {
	this.classList.toggle('open');
	this.classList.toggle('show');
	this.classList.toggle('remove-events')
}

