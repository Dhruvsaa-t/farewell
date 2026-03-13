(function () {

  // Add CSS file
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "header.css"; // Ensure this is the responsive CSS file
  document.head.appendChild(link);

  // Header HTML
  const header = `
    <header>
      <nav>
        <div class="navLeft"><h2>Batch of 2023–2026</h2></div>
        <div class="navRight">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="legends.html">Legends</a></li>
            <li><a href="index.html#Gallery">Gallery</a></li>
          </ul>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);

  // Hamburger toggle for mobile
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector(".navRight ul");

  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

})();