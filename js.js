const datePicker = document.querySelector("#pizza-time");
const warning = document.getElementsByClassName("warning");
const img = document.querySelector("img");
const button = document.querySelector("button");

const toDateTime = (date) => {
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let min = date.getUTCMinutes();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  return `${day}/${month} ${hour}:${min}`;
};

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  img.classList.add("hidden");

  const pizzaTime = document.getElementById("pizza-time").value;
  const displaySteps = document.querySelector("#display-steps");

  let date = new Date(pizzaTime);
  let step1 = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  let step2 = new Date(date.getTime() - 3 * 60 * 60 * 1000);
  let step3 = new Date(date.getTime() - 2 * 60 * 60 * 1000);
  let step4 = new Date(date.getTime());

  displaySteps.innerHTML = `
        <span class="time">${toDateTime(step1)}</span>
        <p class="time-desc"> start preparing the polish&place it in the fridge</p>
        <span class="time">${toDateTime(step2)}</span>
        <p class="time-desc">remove poolish from the fridge and let it rest in room temp</p>
        <span class="time">${toDateTime(step3)}</span>
        <p class="time-desc">begin with making the dough</p>
        <span class="time">${toDateTime(step4)}</span>
        <p class="time-desc">let the formed ready balls rest for 1h :) and it's time for topping!</p>
        <span class="note">*poolish fridge time: 20hrs</span>
        <span class="note">*change the date to try different time</span>
    `;
});

button.addEventListener("click", () => {
  button.classList.toggle("darkBtn");
});
