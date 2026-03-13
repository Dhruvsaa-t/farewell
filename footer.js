(function () {

  // Add footer CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "footer.css";
  document.head.appendChild(link);

  // Footer HTML
  const footer = `
    <footer>
      <div class="footerP1">
        <div class="footerP1L">
          <h4>(menu)</h4>
          <ul>
            <a href="index.html" class="footerLink"><li class="footerLi">Home</li></a>
            <a href="legends.html" class="footerLink"><li class="footerLi">Legends</li></a>
            <a href="index.html#Gallery" class="footerLink"><li class="footerLi">Gallery</li></a>
          </ul>
        </div>
        <div class="footerP1C">
          <h4>(Friends)</h4>
          <ul>
            <a href="Jay.html" class="footerLink"><li class="footerLi">Jay</li></a>
            <a href="Ketan.html" class="footerLink"><li class="footerLi">Ketan</li></a>
            <a href="Ayush.html" class="footerLink"><li class="footerLi">Ayush</li></a>
            <a href="Dhruvrajsinh.html" class="footerLink"><li class="footerLi">Dhruvrajsinh</li></a>
            <a href="Bhavdip.html" class="footerLink"><li class="footerLi">Bhavdip</li></a>
            <a href="Aman.html" class="footerLink"><li class="footerLi">Aman</li></a>
            <a href="Tushar.html" class="footerLink"><li class="footerLi">Tushar</li></a>
          </ul>
        </div>
        <div class="footerP1R">
          <h4>(⚠ Friendly Warning ⚠)</h4>
          <p class="footerP1RP">
            Everything written on this website is just for fun and memories.
            Please don’t take it seriously or personally 😄
          </p>
        </div>
      </div>

      <div class="footerP2">
        <h1 class="footerP2H1">
          3 Years · 7 Friends · Infinite Memories · One Last Commit
        </h1>

        <div class="footerP2Div">
          <p>©2026 Farewell Website</p>
          <p>From Dhruvrajsinh with love ❤️</p>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footer);

})();