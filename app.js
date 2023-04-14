"use strict";

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 25;

const state = {
  allProdArray: [],
};

function Products(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProdArray.length);
}

function renderProduct() {
  let prod1 = getRandomNumber();
  let prod2 = getRandomNumber();
  let prod3 = getRandomNumber();

  if (prod1 === prod2) {
    prod2 = getRandomNumber();
  } else if (prod1 === prod3) {
    prod3 = getRandomNumber();
  } else if (prod2 === prod3) {
    prod3 = getRandomNumber();
  }

  image1.src = state.allProdArray[prod1].src;
  image2.src = state.allProdArray[prod2].src;
  image3.src = state.allProdArray[prod3].src;
  image1.alt = state.allProdArray[prod1].name;
  image2.atl = state.allProdArray[prod2].name;
  image3.alt = state.allProdArray[prod3].name;
  state.allProdArray[prod1].views++;
  state.allProdArray[prod2].views++;
  state.allProdArray[prod3].views++;
}

function handleProdClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickProd = event.target.alt;
  for (let i = 0; i < state.allProdArray.length; i++) {
    if (clickProd === state.allProdArray[i].name) {
      state.allProdArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    alert("Voting has Ended! Click 'OK' for results");
    renderChart();
    productContainer.removeEventListener("click", handleProdClick);
  } else {
    renderProduct();
  }
}

// function renderResults() {
//   let ul = document.querySelector("ul");
//   for (let i = 0; i < state.allProdArray.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = `${state.allProdArray[i].name} had ${state.allProdArray[i].clicks} votes, and was seen ${state.allProdArray[i].views} times.`;
//     ul.appendChild(li);
//   }
// }

function renderChart() {
  const labelArray = [];
  const clicksArray = [];
  const viewsArray = [];

  for (let i = 0; i < state.allProdArray.length; i++) {
    let thisProd = state.allProdArray[i];
    labelArray.push(thisProd.name);
    clicksArray.push(thisProd.clicks);
    viewsArray.push(thisProd.views);
  }

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Views",
        data: viewsArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
      {
        label: "Clicks",
        data: clicksArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const canvasChart = document.getElementById("myChart");
  new Chart(canvasChart, config);
}

let bag = new Products("bag", "./images/bag.jpg");
let banana = new Products("banana", "./images/banana.jpg");
let bathroom = new Products("bathroom", "./images/bathroom.jpg");
let boots = new Products("boots", "./images/boots.jpg");
let breakFast = new Products("breakfast", "./images/breakfast.jpg");
let bubbleGum = new Products("bubblegum", "./images/bubblegum.jpg");
let chair = new Products("chair", "./images/chair.jpg");
let cthulhu = new Products("cthulhu", "./images/cthulhu.jpg");
let dogDuck = new Products("dog-duck", "./images/dog-duck.jpg");
let dragon = new Products("dragon", "./images/dragon.jpg");
let pen = new Products("pen", "./images/pen.jpg");
let petSweep = new Products("pet-sweep", "./images/pet-sweep.jpg");
let scissors = new Products("scissors", "./images/scissors.jpg");
let shark = new Products("shark", "./images/shark.jpg");
let sweep = new Products("sweep", "./images/sweep.jpg");
let tauntaun = new Products("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Products("unicorn", "./images/unicorn.jpg");
let waterCan = new Products("water-can", "./images/water-can.jpg");
let wineGlass = new Products("wine-glass", "./images/wine-glass.jpg");

state.allProdArray.push(
  bag,
  banana,
  bathroom,
  boots,
  breakFast,
  bubbleGum,
  chair,
  cthulhu,
  dogDuck,
  dragon,
  pen,
  petSweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  waterCan,
  wineGlass
);

renderProduct();

productContainer.addEventListener("click", handleProdClick);
