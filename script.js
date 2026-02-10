"use strict";

const tontonGifs = [
  "https://media.tenor.com/xUWuCwMMhMMAAAAi/madebychie-mocha-and-milk.gif",
  "https://media1.tenor.com/m/IP0fi1pOA1kAAAAC/pillow-bubu-dudu.gif",
  "https://media1.tenor.com/m/gXmAMWUQJs0AAAAC/ng%E1%BB%A7-ngon-kh%C3%B3c.gif",
  "https://media1.tenor.com/m/CJEm2aPh9ckAAAAd/kh%C3%B3c.gif",
  "https://media1.tenor.com/m/g4EUkIGbooQAAAAC/corner.gif",
  "bebe_pic.jpeg",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "yeeey~ i lab youuu 😚😚😚";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Hindi talaga? :((",
    ":<<",
    "Anlaki na nung yes oh :((",
    "Sige naaa :<< be my valentine naaa",
    "✋😔💔👈",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}