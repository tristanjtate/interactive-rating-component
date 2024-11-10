
// Capturing USER Selected Rating!

// variable for whatever rating user selects
let selectedRating;

// selecting all buttons, to add event listener

const ratingButtons = document.querySelectorAll('.rating-button');

// looping through all 5 buttons in ratingButtons list
ratingButtons.forEach(button => {
    // then adding an event listener for a "click" event
    button.addEventListener('click', () => {
        // currently, this func will handle click events for whatever button
        console.log('Button clicked:', button.textContent);
        // this logs the buttons number to the console

        // now update selected rating for what was picked
        selectedRating = button.textContent;
    })
});

// --------------------------------------------------

// FORM control

// grab form
const form = document.querySelector('form');

// grab thankYouComponent(container hidden)
const thankYouComponent = document.getElementById("thankYouComponent");

// selecting rating text to update what user picks(to show on thank you component)
const ratingTextDisplay = document.getElementById('rating-text')

// i already have selected rating variable above

// adding event listener for the form. Also adding prevent default to prevent auto refreshing of page
form.addEventListener('submit', (event) => {
    // prevents from auto refreshing
    event.preventDefault();

    // if rating is selected
    if (selectedRating) {
        // print to console for troublshootin
        console.log(`Form submitted: Rating ${selectedRating} selected!`);
        // updating p element in thankYouComponent to show rating upon appearing
        ratingTextDisplay.textContent = `You selected ${selectedRating} out of 5`;

        // hide form and show thankyou container
        form.classList.add('hidden');
        // show thank you
        thankYouComponent.classList.remove('hidden');

      
        // if nothing selected then alert msg pops up
    } else {
        alert("Please select a rating before submitting!");
   }
});

// ---------------------------------------------------
