// let btn = document.querySelector("button");

// btn.addEventListener('click',() => {
//     alert("T'as appuyer le mauvais bouton");
// });

let interval = setInterval(hello, 5000);

function hello() {
  console.log("hello \n");
}

let btn = document.querySelector("button");

function stop() {
  clearInterval(interval);
}
btn.addEventListener("click", () => {
  stop();
});
