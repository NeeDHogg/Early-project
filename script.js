"use strict";
const submitBtn = document.querySelector(".submit--button");
const imgBrawler = document.querySelector(".bravler--icon");
const importantText = document.querySelector(".text");
const inputs = document.querySelectorAll(".form-group input");
const brawlersArray = ["Leon", "Crow", "Spike", "Poco"];
let numHero = Math.trunc(Math.random() * 4);
// console.log(numHero);

function checkInputs() {
  let allFilled = true;
  inputs.forEach(function (input) {
    if (input.value === "") {
      allFilled = false;
    }
  });
  submitBtn.disabled = !allFilled;
}

submitBtn.addEventListener("click", function () {
  imgBrawler.src = `/imgs/brawler-${numHero}.png`;
  importantText.innerHTML = `Ого твоє імя дуже схоже на бравлера ${brawlersArray[numHero]}`;
});
