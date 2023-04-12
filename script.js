"use strict";

/////////////// Data
const prize = {
  0: "",
  1: "",
  2: "1 Soul Coin",
  3: "1 Soul Coin, Smiler the Defiler info",
  4: "1 Soul Coin, Smiler the Defiler info, 2 weeks of rations",
  5: "1 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice",
  6: "2 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice",
  7: "2 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice, Devil's Ride",
  8: "2 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice, Devil's Ride, Info about other Warlords",
  9: "2 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice, Devil's Ride, Info about other Warlords, Tormentor",
  10: "3 Soul Coin, Smiler the Defiler info, 2 weeks of rations, Silvered weapon of choice, Devil's Ride, Info about other Warlords, Tormentor",
};

let friendshipPoints = document.querySelector(".friendship--pts");

let rewardDisplay = document.querySelector(".reward-display");

const goodBtn = [...document.querySelectorAll(".good")];
const badBtn = [...document.querySelectorAll(".bad")];
const terribleBtn = [...document.querySelectorAll(".terrible")];

const goodArr =
  JSON.parse(localStorage.getItem("goodBtn")) ||
  new Array(goodBtn.length).fill("false");
const badArr =
  JSON.parse(localStorage.getItem("badBtn")) ||
  new Array(badBtn.length).fill("false");
const terribleArr =
  JSON.parse(localStorage.getItem("terribleBtn")) ||
  new Array(terribleBtn.length).fill("false");

////////////////////////////////////////////////

//////////////// Elements

///////////////////////////////////////////////
let counter = JSON.parse(localStorage.getItem("counter")) || 0;
friendshipPoints.textContent = counter;

// FUNCTIONS
const toggleGoodBtn = (e) => {
  const index = e.target.dataset.index;
  if (e.target.dataset.clicked === "false") {
    counter += 2;
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "true";
    localStorage.setItem("counter", JSON.stringify(counter));
    goodArr[index] = e.target.dataset.clicked;
    localStorage.setItem("goodBtn", JSON.stringify(goodArr));
  } else {
    counter -= 2;
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "false";
    localStorage.setItem("counter", JSON.stringify(counter));
    goodArr[index] = e.target.dataset.clicked;
    localStorage.setItem("goodBtn", JSON.stringify(goodArr));
  }
};

const toggleBadBtn = (e) => {
  const index = e.target.dataset.index;
  if (e.target.dataset.clicked === "false") {
    counter -= 1;
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "true";
    localStorage.setItem("counter", JSON.stringify(counter));
    badArr[index] = e.target.dataset.clicked;
    localStorage.setItem("badBtn", JSON.stringify(badArr));
    if (counter <= -5) {
      rewardDisplay.textContent = `Zostaliście przegonieni przez Mad Maggie za pomocą MadCaps'ów`;
    }
  } else {
    counter += 1;
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "false";
    localStorage.setItem("counter", JSON.stringify(counter));
    badArr[index] = e.target.dataset.clicked;
    localStorage.setItem("badBtn", JSON.stringify(badArr));
  }
};

const toggleTerribleBtn = (e) => {
  const index = e.target.dataset.index;
  if (e.target.dataset.clicked === "false") {
    counter -= 2;
    localStorage.setItem("counter", JSON.stringify(counter));
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "true";
    terribleArr[index] = e.target.dataset.clicked;
    localStorage.setItem("terribleBtn", JSON.stringify(terribleArr));
    if (counter <= -5) {
      rewardDisplay.textContent = `Zostaliście przegonieni przez Mad Maggie za pomocą MadCaps'ów`;
    }
  } else {
    counter += 2;
    localStorage.setItem("counter", JSON.stringify(counter));
    friendshipPoints.textContent = counter;
    rewardDisplay.textContent = prize[counter];
    e.target.dataset.clicked = "false";
    terribleArr[index] = e.target.dataset.clicked;
    localStorage.setItem("terribleBtn", JSON.stringify(terribleArr));
  }
};
/////////////////////////////////////////////

// Buttons event handlers
goodBtn.forEach((btn, index) => {
  btn.dataset.index = index;
  btn.dataset.clicked = goodArr[index];
  btn.addEventListener("click", toggleGoodBtn);
});
// goodBtnMM.addEventListener('click', toggleGoodBtn);
// goodBtnCC.addEventListener('click', toggleGoodBtn);
// goodBtnM.addEventListener('click', toggleGoodBtn);
// goodBtnPN.addEventListener('click', toggleGoodBtn);
// goodBtnB.addEventListener('click', toggleGoodBtn);

badBtn.forEach((btn, index) => {
  btn.dataset.index = index;
  btn.dataset.clicked = badArr[index];
  btn.addEventListener("click", toggleBadBtn);
});
// badBtnMM.addEventListener('click', toggleBadBtn);
// badBtnCC.addEventListener('click', toggleBadBtn);
// badBtnM.addEventListener('click', toggleBadBtn);
// badBtnPN.addEventListener('click', toggleBadBtn);
// badBtnB.addEventListener('click', toggleBadBtn);

terribleBtn.forEach((btn, index) => {
  btn.dataset.index = index;
  btn.dataset.clicked = terribleArr[index];
  btn.addEventListener("click", toggleTerribleBtn);
});
// terribleBtnMM.addEventListener('click', toggleTerribleBtn);
// terribleBtnCC.addEventListener('click', toggleTerribleBtn);
// terribleBtnM.addEventListener('click', toggleTerribleBtn);
// terribleBtnPN.addEventListener('click', toggleTerribleBtn);
// terribleBtnB.addEventListener('click', toggleTerribleBtn);
//////////////////////////////////////////

localStorage.setItem("name", "Matt");

const name = localStorage.getItem("name");
