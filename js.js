const datePicker = document.querySelector("#pizza-time");
const warning = document.getElementsByClassName("warning");
const img = document.querySelector("img");
const button = document.querySelector("button");

function toDateTime(date) {
  let str = "";
  let month, day, hour, min;

  month = date.getUTCMonth() + 1;
  month = month < 10 ? "0" + month : month;
  day = date.getUTCDate();
  day = day < 10 ? "0" + day : day;
  hour = date.getUTCHours();
  hour = hour < 10 ? "0" + hour : hour;
  min = date.getUTCMinutes();
  min = min < 10 ? "0" + min : min;

  str += day + "/" + month;
  str += " " + hour + ":" + min;
  return str;
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  img.classList.add("hidden");
  const pizzaTime = document.getElementById("pizza-time").value;
  // const timeDisplay = document.querySelector("#display-time");
  const displayStep4 = document.querySelector("#display-step4");
  const displayStep3 = document.querySelector("#display-step3");
  const displayStep2 = document.querySelector("#display-step2");
  const displayStep1 = document.querySelector("#display-step1");

  let date = new Date(pizzaTime);

  let step1 = new Date(date.getTime() - 25 * 60 * 60 * 1000);
  let step2 = new Date(date.getTime() - 3 * 30 * 60 * 1000);
  let step3 = new Date(date.getTime() - 2 * 30 * 60 * 1000);
  let step4 = new Date(date.getTime() - 1 * 60 * 60 * 1000);

  displayStep1.innerHTML = `${toDateTime(
    step1
  )} <span class="">prepare the polish& put in the firdge </span>`;

  displayStep2.innerHTML = `${toDateTime(
    step2
  )} <span> polish put in room temp </span>`;

  displayStep3.innerHTML = `${toDateTime(
    step3
  )} <span>pmake the dought and let it rest</span>`;

  displayStep4.innerHTML = `${toDateTime(step4)} let the formed balls rest`;
});

button.addEventListener("click", () => {
  button.classList.toggle("darkBtn");
});
