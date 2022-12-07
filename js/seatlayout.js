const container = document.querySelector(".container");
const seats = document.querySelectorAll(" .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const totalPrice = document.getElementById("totalPrice");
const paymentbtn = document.getElementById("paymentbtn");
const paymentSummary = document.getElementById("paymentSummary");

populateUI();

//seat click event listener
container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updatePrice();
    }
});

//update count and total with price
function updatePrice() {
    const selectedSeats = document.querySelectorAll(".selected");
    const selectedSeatsCount = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = 250 * selectedSeatsCount;

    updatePaymentButton(selectedSeatsCount);
}

// Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
}

updatePrice();

function updatePaymentButton(numOfSelectedSeats) {
    if (numOfSelectedSeats > 0) {
        paymentbtn.style.visibility = "visible";
        totalPrice.innerText = 250 * numOfSelectedSeats;
        paymentSummary.style.visibility = "visible";
    }
    else{
        paymentbtn.style.visibility = "hidden";
        paymentSummary.style.visibility = "hidden";
    }
}