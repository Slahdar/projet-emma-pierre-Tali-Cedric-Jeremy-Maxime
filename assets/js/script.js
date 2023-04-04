document.addEventListener("DOMContentLoaded", function () {
  // const headerContainer = document.getElementById("header-container");
  // headerContainerrr.innerHTML = `
  //   <div id="flex-1">
  //   <nav class="menu-left">
  //   <i class="fa-solid fa-phone"></i><span> +33 7 65 78 65 43</span>
  //   <i class="fa-solid fa-envelope"></i><span>  test@test.fr</span>
  //   </nav>
  //   <div class="logo-container">
  //     <img src="image.png" class="logo">
  //   </div>
  //   <nav class="menu-right">
  //     <div class="icon-container">
  //       <i class="fa-solid fa-magnifying-glass"></i>
  //       <i class="fa-regular fa-user"></i>
  //       <i class="fa-solid fa-cart-shopping"></i>
  //     </div>
  //   </nav>
  //   </div>
  //   <div id="flex-2">
  //     <nav id="menu">
  //         <p>item1</p>
  //         <p>item1</p>
  //         <p>item1</p>
  //         <p>item1</p>
  //     </nav>
  //   </div>
  //   <div id="flex-3">

  //   </div>

  // `;

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

  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

  document.addEventListener("mouseleave", (e) => {
    cursor.style.display = "none";
  });

  document.addEventListener("mouseenter", (e) => {
    cursor.style.display = "block";
  });
});
