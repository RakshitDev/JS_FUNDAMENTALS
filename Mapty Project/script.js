"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (new Date() + "").slice(-10);
  constructor(distance, coords, duration) {
    this.distance = distance;
    this.coords = coords;
    this.duration = duration;
  }
}
class Running extends Workout {
  constructor(distance, coords, duration, cadance) {
    super(distance, coords, duration);
    this.cadance = cadance;
    this.calpace();
  }
  calpace() {
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(distance, coords, duration, elevation) {
    super(distance, coords, duration);
    this.elevation = elevation;
    this.calelevation();
  }
  calelevation() {
    this.speed = this.duration / (this.distance / 60);
    return this.speed;
  }
}

const run1 = new Running(24, [37, 7], 10, 178);
const cycling = new Cycling(24, [37, 7], 10, 178);
console.log(run1, cycling);

class App {
  #movePosition;
  #map;
  #workouts = [];
  constructor() {
    this._getPosition();
    this._toggleEventField();

    form.addEventListener("submit", this._handleFormSubmit.bind(this));
  }

  _getPosition() {
    // Gets your coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get the location");
        },
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const cords = [latitude, longitude];

    this.#map = L.map("map").setView(cords, 30);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(cords).addTo(this.#map).openPopup();

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(moveElement) {
    this.#movePosition = moveElement;

    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleEventField() {
    inputType.addEventListener("change", function (e) {
      e.preventDefault();

      if (inputType.value === "running") {
        inputCadence.closest(".form__row").classList.add("form__row--hidden");

        inputElevation
          .closest(".form__row")
          .classList.remove("form__row--hidden");
      } else {
        inputCadence
          .closest(".form__row")
          .classList.remove("form__row--hidden");

        inputElevation.closest(".form__row").classList.add("form__row--hidden");
      }
    });
  }

  _handleFormSubmit(e) {
    e.preventDefault();

    const validInput = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const cadence = +inputCadence.value;
    const elevation = +inputElevation.value;

    // Get coordinates
    const { lat, lng } = this.#movePosition.latlng;

    // Running
    if (type === "running") {
      if (!validInput(distance, duration, cadence)) {
        return alert("Please enter number inputs");
      }

      const workout = new Running(distance, [lat, lng], duration, cadence);

      this.#workouts.push(workout);
    }

    // Cycling
    if (type === "cycling") {
      if (!validInput(distance, duration, elevation)) {
        return alert("Please enter number inputs");
      }

      const workout = new Cycling(distance, [lat, lng], duration, elevation);

      this.#workouts.push(workout);
    }

    console.log(this.#workouts);

    this._renderWorkout();
    inputDistance.value = inputCadence.value = inputDuration.value = "";

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          autoClose: false,
          closeOnClick: false,
        }).setContent("Workout"),
      )
      .openPopup();

    form.classList.add("hidden");
  }

  _renderWorkout() {
    console.log("inside the render workout");

    let html = ` <li class="workout workout--running" data-id="1234567890">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">5.2</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">24</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">4.6</span>
            <span class="workout__unit">min/km</span>
          </div>
          </li>`;

    form.insertAdjacentHTML("afterend", html);
  }
}

const app = new App();
