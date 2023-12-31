import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from '../src/js/age-calculator.js';

window.addEventListener("load", function () {
  const userForm = document.querySelector("#userForm");
  const responseContainer = document.querySelector('#response');

  let userInstance = null;

  function handleUserForm(event) {
    event.preventDefault();
    responseContainer.innerText = null;

    const name = document.querySelector('#inputName').value;
    const age = parseInt(document.querySelector('#inputAge').value);

    userInstance = new User(name, age);

    const response1 = name;
    const response2 = age;
    const pTag = document.createElement("p");
    pTag.append(`Your name: ${response1}. Your Age: ${response2}.`);
    responseContainer.append(pTag);
  }

  userForm.addEventListener("submit", handleUserForm);

  const mercuryButton = document.getElementById("mercury");
  const mercResponse = document.getElementById("mercResponse");
  const displayMercuryAge = document.getElementById("displayAge");
  const venusButton = document.getElementById("venus");
  const venResponse = document.getElementById("venResponse");
  const displayVenusAge = document.getElementById("displayVenusAge");
  const marsButton = document.getElementById("mars");
  const marsResponse = document.getElementById("marsResponse");
  const displayMarsAge = document.getElementById("displayMarsAge");
  const jupButton = document.getElementById("jupiter");
  const jupResponse = document.getElementById("jupResponse");
  const displayJupAge = document.getElementById("displayJupAge");

  mercuryButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('Please submit the form first.');
      return;
    }
    const mercuryAge = userInstance.calculateMercuryAge();
    displayMercuryAge.innerText = `${mercuryAge} years`;
    mercResponse.classList.remove("hidden");
  });

  venusButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const venusAge = userInstance.calculateVenusAge();
    displayVenusAge.innerText = ` ${venusAge} years`;
    venResponse.classList.remove("hidden");
  });

  marsButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const marsAge = userInstance.calculateMarsAge();
    displayMarsAge.innerText = ` ${marsAge} years`;
    marsResponse.classList.remove("hidden");
  });

  jupButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const jupAge = userInstance.calculateJupiterAge();
    displayJupAge.innerText = ` ${jupAge} years`;
    jupResponse.classList.remove("hidden");
  });
});









