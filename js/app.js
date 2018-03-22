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


// Add the card which gets flipped to the flipped cards array and see if they match
function flipCard(){
	flippedCards.push(this);
	console.log(flippedCards);
	let length = flippedCards.length;

	if (length === 2){
		// moves();
		if(flippedCards[0].dataset.id === flippedCards[1].dataset.id){
			matched()
		} else {
			deactivate();
			// Not matched function which flips them back over
			setTimeout(function() {
				flippedCards[0].classList.remove("show", "open");
			    flippedCards[1].classList.remove("show", "open");
			    flippedCards[0].classList.remove("remove-events");
			    flippedCards[1].classList.remove("remove-events");
			    flippedCards = [];
			    reactivate();
				}, 1000);
			}
		}
	};

//for when cards match
function matched(){
    flippedCards[0].classList.add("match");
    flippedCards[1].classList.add("match");
    flippedCards[0].classList.remove("show", "open");
    flippedCards[1].classList.remove("show", "open");
    flippedCards = [];
}


// function notMatched(){

//     flippedCards[0].classList.remove("show", "open");
//     flippedCards[1].classList.remove("show", "open");
//     flippedCards[0].classList.remove("remove-events");
//     flippedCards[1].classList.remove("remove-events");
//     flippedCards = [];
// }

// Function to stop cards being clickable when not matched
function deactivate(){
	for(var i = 0; i < cards.length; i++) {
		cards[i].classList.add("remove-events")
	}
}

// Function to allow cards to be clickable again
function reactivate(){
	for(var i = 0; i < cards.length; i++) {
		cards[i].classList.remove("remove-events")
	}
}

// function to add the flipCard click listener to all the cards.
for(var i = 0; i < cards.length; i++){
	cards[i].addEventListener('click', flipCard);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
