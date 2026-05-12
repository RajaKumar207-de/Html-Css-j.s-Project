const p = document.querySelector("p");

const text = p.innerText;

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomText() {
  const str = text
    .split("")
    .map(() => {
      return characters[Math.floor(Math.random() * 52)];
    })
    .join("");

  p.innerText = str;
  iteration +=0.25
}

setInterval(randomText, 30);