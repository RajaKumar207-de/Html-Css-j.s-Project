const para = document.querySelector("p");

const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = para.innerText;

let interval;

para.addEventListener("mouseenter", () => {

    clearInterval(interval);

    interval = setInterval(() => {

        const str = text
        .split('')
        .map(() => {

            return characters[
                Math.floor(Math.random() * characters.length)
            ];

        })
        .join("");

        para.innerText = str;

    }, 100);

});