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

  mercuryButton.addEventListener("click", function () {
    if (!userInstance) {
      alert('Please submit the form first.');
      return;
    }

    const mercuryAge = userInstance.calculateMercuryAge();

    displayMercuryAge.innerText = `${mercuryAge} years`;

    mercResponse.classList.remove("hidden");
  });
});









