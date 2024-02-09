//turn into event listeners for range
const low = document.getElementById("rangeLow");
const high = document.getElementById("rangeHigh");

//function for pause and going to next page
function goToNextPage () {
    setTimeout((location.href = './gamePage1.html'), 500);
}

//event listeners
low.addEventListener("click", () => {
    localStorage.setItem('range', 5);
    goToNextPage();
});

high.addEventListener("click", () => {
    localStorage.setItem('range', 12);
    goToNextPage();
});

console.log(localStorage.setItem('operator', '+'));
console.log(localStorage.setItem('operator', '*'));