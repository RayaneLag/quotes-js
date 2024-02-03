const quotes = [
  {
    quote:
      "Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.",
    author: "Master oogway",
  },
  {
    quote: "I have no ennemies",
    author: "Thorfinn",
  },
  {
    quote:
      "Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice! ",
    author: "Doflamingo",
  },
  {
    quote:
      "There is no heaven or hell. No matter what you do while you're alive,everybody goes to the same place once you die. Death is Equal.",
    author: "ryuk",
  },
  {
    quote: "“When a man learns to love he must bear the risk of hatred.”",
    author: "Obito",
  },
];

const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const container6 = document.querySelector(".container6");
const container7 = document.querySelector(".container7");
const containers = [
  document.querySelector(".container"),
  document.querySelector(".container2"),
  document.querySelector(".container3"),
  document.querySelector(".container4"),
  document.querySelector(".container5"),
  document.querySelector(".container6"),
  document.querySelector(".container7"),
];

const buttons = document.querySelectorAll(".mybtn");

let activeContainerIndex = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(activeContainerIndex);
    if (activeContainerIndex === 0) {
      containers[0].style.display = "none";
    }
    containers[activeContainerIndex].classList.remove("active");

    containers[activeContainerIndex].style.zIndex = "1";
    activeContainerIndex = (activeContainerIndex + 1) % containers.length;
    containers[activeContainerIndex].classList.add("active");
    containers[activeContainerIndex].style.zIndex = "10";
  });
});








// function getRandomIndex(max) {
//   return Math.floor(Math.random() * max);
// }

// const tabLength = containers.length;
// const randomIndex = getRandomIndex(containers);
// const randomQuote = containers[randomIndex].quotes;
// console.log(randomQuote);