// const intervalId = setInterval(startInterval, 1000);

// function startInterval() {
//   console.log(new Date().getSeconds());
// }

let intervalId;

function stopInterval() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = "white";
}

function startColorChange() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(startColorChange, 500);
  }
}

document.querySelector("#start").addEventListener("click", startInterval);
document.querySelector("#stop").addEventListener("click", stopInterval);
