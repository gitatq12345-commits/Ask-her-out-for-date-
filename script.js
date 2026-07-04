const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

yesBtn.addEventListener("click", function() {
  document.body.innerHTML = `
  <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;background:#ffe4ec;font-family:Arial;">
    <h1>Yay! ❤️</h1>
    <h2>I can't wait for our date, Laxmi! 🌹</h2>
    <p>Love, Sandhya 💖</p>
  </div>`;
});
