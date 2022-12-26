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
  const displaySteps = document.querySelector("#display-steps");

  let date = new Date(pizzaTime);

  let step1 = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  let step2 = new Date(date.getTime() - 3 * 60 * 60 * 1000);
  let step3 = new Date(date.getTime() - 2 * 60 * 60 * 1000);
  let step4 = new Date(date.getTime() - 0 * 60 * 60 * 1000);

  //create element

  displaySteps.innerHTML = `<span class="time">${toDateTime(
    step1
  )}</span><p class="time-desc"> start preparing the polish&and place it in the fridge</p>
  <span class="time">${toDateTime(
    step2
  )} </span><p class="time-desc">remove poolish from the fridge and let it rest in room temp</p>
  <span class="time">${toDateTime(
    step3
  )} </span><p class="time-desc">begin with making the dough</p>
  <span class="time">${toDateTime(
    step4
  )}</span><p class="time-desc">let the formed ready balls rest for 1h :) and your're ready to go!
  </p>
  <span class="note">*poolish fridge time: 20hrs</span>
  <span class="note">*change the date to try different time</span>
  `;
});

button.addEventListener("click", () => {
  button.classList.toggle("darkBtn");
});
