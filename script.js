//let container = document.querySelector("#container");

//let houer = document.querySelector("#houer");
//let minuts = document.querySelector("#minuts");
//let seconds = document.querySelector("#seconds");
let allTime = document.querySelector("#allTime");
setInterval(function time() {
  let clock = new Date();
  let houer = clock.getHours() < 10 ? "0" + clock.getHours() : clock.getHours();
  let minuts =
    clock.getMinutes() < 10 ? "0" + clock.getMinutes() : clock.getMinutes();
  let seconds =
    clock.getSeconds() < 10 ? "0" + clock.getSeconds() : clock.getSeconds();
  allTime.innerHTML = `${houer}:${minuts}:${seconds}`;
}, 1000);
