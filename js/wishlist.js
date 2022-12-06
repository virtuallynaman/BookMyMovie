let wishBtn = document.getElementById("wishBtn");
let wishText = document.getElementById("wishText");

wishBtn.onclick = function () {
    if (wishBtn.classList.contains("fa-regular")) {
        wishBtn.classList.remove("fa-regular");
        wishBtn.classList.add("fa-solid");
        wishText.innerHTML = "<i id='checkbtn' class='fa-solid fa-check'></i> Added to wishlist";
        wishText.style = "margin-left: -81px"
    } else {
        wishBtn.classList.remove("fa-solid");
        wishBtn.classList.add("fa-regular");
        wishText.innerHTML = "Add to wishlist";
        wishText.style = "margin-left: -62px"
    }
};