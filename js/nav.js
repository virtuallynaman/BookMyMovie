const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav">
      <a href="index.html"><img src="images/logo.png" class="brand-logo" alt=""></a>
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="Search for Now Showing Movies and Upcoming Movies">
              <button class="search-btn" onclick="window.location.href = 'search.html';">search</button>
          </div>
          <a href="signup.html"><img src="img/user.png" alt=""></a>
          <a href="cart.html"><img src="img/cart.png" alt=""></a>
      </div>
  </div>
  <ul class="links-container">
      <li class="link-item"><a href="index.html" class="link">Upcoming Movies</a></li>
      <li class="link-item"><a href="#" class="link">Recently Released</a></li>
      <li class="link-item"><a href="#" class="link">Categories</a></li>
      <li class="link-item"><a href="#" class="link">Languages</a></li>
  </ul>
    `;
}

createNav();