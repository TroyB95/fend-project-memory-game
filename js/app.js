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

// Select deck which contains all the cards
const deck = document.querySelector(".deck");

createGrid();

function createGrid(){

// A variable which stores the shuffled cards
	let shuffled = shuffle(cards);

// A loop which adds the shuffled cards into the deck
	for(var i = 0; i < shuffled.length; i++){
		[].forEach.call(shuffled, function(card){
			deck.appendChild(card);
		});
		 cards[i].classList.remove("show", "open", "match");
	}
};

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
