document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  headerContainer.innerHTML = `
<div id="block-1">
<nav class="menu-left" id="head-cred" >
<i class="fa-solid fa-phone"></i><span> +33 7 65 78 65 43</span>
<i class="fa-solid fa-envelope"></i><span>  test@test.fr</span>
</nav>
<div id="head-burger">
  <i class="fa-solid fa-bars" id="burger"></i>
</div>  
<div class="logo-container">
<a href="index.html">
  <img src="https://cdn.discordapp.com/attachments/1092361701158043738/1092399129960914964/EP-logo-DEF-carre.png" class="logo">
</a>
  </div>
<nav class="menu-right">

  <div class="icons-container">
    <div class="icon-container">
        
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <div class="icon-container">
        
        <i class="fa-regular fa-user"></i>
    </div>

    <div class="icon-container">
        
        <i id="cart-btn" class="fa-solid fa-cart-shopping"></i>
    </div>
    
    
    
    <div id="cart">
        <div id="cart-items">
            <div class="cart-item"></div>
            <div class="cart-item"></div>
            <div class="cart-item"></div>
        </div>
        <div id="check-out">
            <button id="check-out-btn">CHECK OUT</button>
        </div>
    </div>
  </div>
</nav>
</div>
<div id="block-2">
  <nav id="menu">
      <a href="a-propos.html" >A propos</a>
      <a href="product_list.html" id="first-div">Nos Collections</a>
      <div id="block-3">
        <div class="items"><a href="collection-precieuse.html"><img src="assets/img/bracelet.webp">Précieuses</a></div>
        <div class="items"><a href="collection-impertinente.html"><img src="assets/img/bracelet.webp">Impertinentes</a></div>
        <div class="items"><a href="collection-unique.html"><img src="assets/img/bracelet.webp">Unique</a></div>
        </div>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
  </nav>
</div>

  `;

  const footerContainer = document.getElementById("footer-container");
  footerContainer.innerHTML = `<div id="foot-head">
  <div class="row">
      <div class="col-12 col-sm-1"></div>
      <div class="col-12 col-sm-2"><a href="collection-precieuse.html">Précieuse</a></div>
      <div class="col-12 col-sm-2"><a href="collection-impertinente.html">Impertinente</a></div>
      <div class="col-12 col-sm-2"><a>Unique</a></div>
      <div class="col-12 col-sm-2"><a href="blog.html">Blog</a></div>
      <div class="col-12 col-sm-2"><a href="contact.html">Contact</a></div>
      <div class="col-12 col-sm-1"></div>
  </div>
</div>
<div class="divider-footer"></div>
<div id="foot-info">
  <div class="row">
      <div class="col-12 col-sm-4 order-2 order-sm-1"> 
          <div class="footer-section">
              <h2 class="white-title" style="text-transform: uppercase;">à propos</h2>
              <p>Création de bijoux 100% uniques et originaux faits à la main en France avec des pierres fines ou précieuses pour sublimer toutes les femmes</p>
          </div>
      </div>
      <div class="col-12 col-sm-4 order-1 order-sm-2">
          <div class="footer-section" style="display: flex;"> 
              <a href="index.html" style="margin: auto;">
                  <img src="https://cdn.discordapp.com/attachments/1092361701158043738/1092399129960914964/EP-logo-DEF-carre.png" class="logo">
              </a>
          </div>
      </div>
      <div class="col-12 col-sm-4 order-3 order-sm-3"> 
          <div class="footer-section row">

              <h2 class="white-title" style="text-transform: uppercase;">contact</h2>
              <div class="col-12"> <i class="fa-solid fa-phone"></i><span>0123456789</span></div>
              <div class="col-12"> <i class="fa-solid fa-envelope"></i><span>contact@emmapierre.com</span></div>
              <div class="col-12"> <i class="fa-brands fa-instagram"></i><span>@emmapierrejewels</span></div>
          
          </div>
      </div>
  </div>
</div>
<div id="legal">
<p>Tous droit réservé  - © Emma Pierre - 2023 </p>
<p>Mentons légales</p>
<p>Conditions générales de ventes</p>
</div>`;

  const firstDiv = document.getElementById("first-div");
  const secondDiv = document.getElementById("block-3");

  // Hide the second div initially
  secondDiv.style.display = "none";

  // Add a mouseenter event listener to the first div
  firstDiv.addEventListener("mouseenter", function () {
    // Show the second div
    console.log("hovered");
    secondDiv.style.display = "flex";
  });

  // Add a mouseleave event listener to the first div
  firstDiv.addEventListener("mouseleave", function () {
    // Check if the mouse is hovering over the second div
    const isHovering = isMouseHovering(secondDiv);

    // If the mouse is not hovering over the second div, hide it
    if (!isHovering) {
      secondDiv.style.display = "none";
    }
  });

  // Add a mouseenter event listener to the second div
  secondDiv.addEventListener("mouseenter", function () {
    // Show the second div
    secondDiv.style.display = "flex";
  });

  // Add a mouseleave event listener to the second div
  secondDiv.addEventListener("mouseleave", function () {
    // Hide the second div
    secondDiv.style.display = "none";
  });

  // Helper function to check if the mouse is hovering over an element
  function isMouseHovering(element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const { clientX, clientY } = event;

    return (
      clientX >= left && clientX <= right && clientY >= top && clientY <= bottom
    );
  }

  const toggleDiv = document.getElementById("cart-btn");
  const otherDiv = document.getElementById("cart");

  // Hide the other div initially
  otherDiv.style.display = "none";

  // Add a click event listener to the toggle div
  toggleDiv.addEventListener("click", function () {
    // Toggle the display of the other div
    if (otherDiv.style.display === "none") {
      otherDiv.style.display = "block";
    } else {
      otherDiv.style.display = "none";
    }
  });

  const burger = document.getElementById("burger");
  const burgerMenu = document.getElementById("block-2");

  // Add a click event listener to the toggle div
  burger.addEventListener("click", function () {
    // Toggle the display of the other div
    if (burgerMenu.style.display === "none") {
      burgerMenu.style.display = "flex";
    } else {
      burgerMenu.style.display = "none";
    }
  });

  //   const cursor = document.getElementById('cursor');

  //   if (window.innerWidth < 747) {
  //     cursor.style.display = "none";
  //   }

  //   else{

  // document.addEventListener('mousemove', e => {
  //   cursor.style.top = e.pageY + 'px';
  //   cursor.style.left = e.pageX + 'px';
  // });

  // document.addEventListener('mouseleave', e => {
  //   cursor.style.display = 'none';
  // });

  // document.addEventListener('mouseenter', e => {
  //   cursor.style.display = 'block';
  // });

  // }

  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("header-container");
    if (window.pageYOffset > 20) {
      navbar.style.backgroundColor = "white";
    }
    if (window.pageYOffset === 0) {
      navbar.style.backgroundColor = "#ffffff87";
    }
  });
});
