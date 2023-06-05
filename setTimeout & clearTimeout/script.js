setTimeout(function () {
  console.log("Callback received");
}, 2000);

console.log("Waiting for callback");

setTimeout(callbackFunc, 3000);

function callbackFunc() {
  console.log("Callback received from outside function");
}

const timerId = setTimeout(callbackFunc2, 4000);

function callbackFunc2() {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timer fired");
}
