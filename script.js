const container = document.querySelector(".container");
const selectedSeats = document.querySelector(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie")
let ticketPrice = +movieSelect.value;

//update count and total with price
function updatePrice () {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;
}

//seat click event listener
container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updatePrice();
    }
});

//movie selection event listener
movieSelect.addEventListener("change", e => {
    ticketPrice = e.target.value;
    updatePrice();
})
