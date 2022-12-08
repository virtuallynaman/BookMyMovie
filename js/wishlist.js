let wishBtn = document.getElementById("wishBtn");
let wishText = document.getElementById("wishText");
let movieName = document.getElementById("movieName");
let movieBanner = document.getElementById("movieBanner");
let movieposter = document.getElementById("movieposter");
let movietitle = document.getElementById("movietitle");

function wishlistData() {
    movieposter.innerHTML = localStorage.getItem("wishlistedMoviePoster");
    movietitle.innerHTML = localStorage.getItem("wishlistedMovie");
    
    if (movietitle.innerHTML === "You have not wishlisted any movie yet") {
        movietitle.style.width = "300px";
    }
    else if(movietitle.innerHTML = movieName.innerHTML){
        wishText.innerHTML = "<i id='checkbtn' class='fa-solid fa-check'></i> Added to wishlist";
        wishBtn.classList.add("fa-solid");
        movietitle.style.width = "200px";
        wishText.style = "margin-left: -81px";
    }
    else {
        movietitle.style.width = "200px";
    }
}

wishlistData();

wishBtn.onclick = function() {
    if (wishBtn.classList.contains("fa-regular")) {
        wishBtn.classList.remove("fa-regular");
        wishBtn.classList.add("fa-solid");
        wishText.innerHTML = "<i id='checkbtn' class='fa-solid fa-check'></i> Added to wishlist";
        wishText.style = "margin-left: -81px";
        localStorage.setItem("wishlistedMovie", movieName.innerHTML);
        localStorage.setItem("wishlistedMoviePoster", movieBanner.innerHTML);
        wishlistData();
    } else {
        wishBtn.classList.remove("fa-solid");
        wishBtn.classList.add("fa-regular");
        wishText.innerHTML = "Add to wishlist";
        wishText.style = "margin-left: -62px";
        localStorage.setItem("wishlistedMovie", "You have not wishlisted any movie yet");
        localStorage.removeItem("wishlistedMoviePoster");
        wishlistData();
    }
};