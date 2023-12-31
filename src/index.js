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
  const displayTimePassed = document.getElementById("displayTimePassed");

  const venusButton = document.getElementById("venus");
  const venResponse = document.getElementById("venResponse");
  const displayVenusAge = document.getElementById("displayVenusAge");
  const displayTimePassedVenus = document.getElementById("displayTimePassedVenus");

  const marsButton = document.getElementById("mars");
  const marsResponse = document.getElementById("marsResponse");
  const displayMarsAge = document.getElementById("displayMarsAge");
  const displayTimePassedMars = document.getElementById("displayTimePassedMars");

  const jupButton = document.getElementById("jupiter");
  const jupResponse = document.getElementById("jupResponse");
  const displayJupAge = document.getElementById("displayJupAge");
  const displayTimePassedJupiter = document.getElementById("displayTimePassedJupiter");

  mercuryButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('Please submit the form first.');
      return;
    }
    const mercuryAge = userInstance.calculateMercuryAge();
    displayMercuryAge.innerText = `${mercuryAge} years`;
    const timePassed = userInstance.timePassedOnMercury();
    displayTimePassed.innerText = ` ${timePassed}`;
    mercResponse.classList.remove("hidden");
    mercResponse.scrollIntoView({ behavior: 'smooth' });
  });

  venusButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const venusAge = userInstance.calculateVenusAge();
    displayVenusAge.innerText = ` ${venusAge} years`;
    const timePassedVenus = userInstance.timePassedOnVenus();
    displayTimePassedVenus.innerText = ` ${timePassedVenus}`;
    venResponse.classList.remove("hidden");
    venResponse.scrollIntoView({ behavior: 'smooth' });
  });

  marsButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const marsAge = userInstance.calculateMarsAge();
    displayMarsAge.innerText = ` ${marsAge} years`;
    const timePassedMars = userInstance.timePassedOnMars();
    displayTimePassedMars.innerText = ` ${timePassedMars}`;
    marsResponse.classList.remove("hidden");
    marsResponse.scrollIntoView({ behavior: 'smooth' });
  });

  jupButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('please submit the form first.');
      return;
    }
    const jupAge = userInstance.calculateJupiterAge();
    displayJupAge.innerText = ` ${jupAge} years`;
    const timePassedJupiter = userInstance.timePassedOnJupiter();
    displayTimePassedJupiter.innerText = ` ${timePassedJupiter}`;
    jupResponse.classList.remove("hidden");
    jupResponse.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('resubmitButton').addEventListener('click', function () {
    document.querySelector("form").reset();
    const existingPTag = document.querySelector('#response');
    if (existingPTag) {
      existingPTag.remove();
    }
    document.getElementById('mercResponse').setAttribute("class", "hidden");
    document.getElementById('venResponse').setAttribute("class", "hidden");
    document.getElementById('marsResponse').setAttribute("class", "hidden");
    document.getElementById('jupResponse').setAttribute("class", "hidden");
    document.body.scrollIntoView({ behavior: 'smooth' });
  });
});









