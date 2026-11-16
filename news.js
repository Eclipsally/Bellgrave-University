
// =========================================
// BELLGRAVE CHRONICLE
// NEWSPAPER PAGE NAVIGATION
// =========================================

// Find all newspaper spreads
const spreads = document.querySelectorAll(".newspaper-spread");

// Find the navigation buttons
const previousButton = document.getElementById("previous-page");
const nextButton = document.getElementById("next-page");

// Find the page counter
const pageCounter = document.getElementById("page-counter");

// Keep track of the currently displayed spread
let currentSpread = 0;


// Display the correct newspaper spread
function showSpread(direction) {

    // Remove the previous spread
    spreads[currentSpread].hidden = true;

    // Move to the next or previous spread
    currentSpread += direction;

    // Display the new spread
    const activeSpread = spreads[currentSpread];

    activeSpread.hidden = false;

    // Restart the page-turn animation
    activeSpread.classList.remove("turn-next", "turn-previous");

    void activeSpread.offsetWidth;

    if (direction > 0) {
        activeSpread.classList.add("turn-next");
    } else {
        activeSpread.classList.add("turn-previous");
    }

    // Update the page counter
    pageCounter.textContent =
        `Spread ${currentSpread + 1} of ${spreads.length}`;

    // Disable buttons when reaching the beginning or end
    previousButton.disabled = currentSpread === 0;

    nextButton.disabled = currentSpread === spreads.length - 1;
}


// Next page button
nextButton.addEventListener("click", () => {

    if (currentSpread < spreads.length - 1) {
        showSpread(1);
    }

});


// Previous page button
previousButton.addEventListener("click", () => {

    if (currentSpread > 0) {
        showSpread(-1);
    }

});


// Allow readers to use their keyboard arrows
document.addEventListener("keydown", (event) => {

    // Don't interfere with typing in form fields
    if (
        event.target.matches("input, textarea, select") ||
        event.target.isContentEditable
    ) {
        return;
    }

    if (event.key === "ArrowRight" && currentSpread < spreads.length - 1) {
        showSpread(1);
    }

    if (event.key === "ArrowLeft" && currentSpread > 0) {
        showSpread(-1);
    }

});
