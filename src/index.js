import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from '../src/js/age-calculator.js';

function handleUserForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const name = document.querySelector('#inputName').value;
  const age = parseInt(document.querySelector('#inputAge').value);
  const user = new User(name, age);
  const response1 = user.name;
  const response2 = user.age;
  const pTag = document.createElement("p");
  pTag.append(`Your name: ${response1}. Your Age: ${response2}.`);
  document.querySelector('#response').append(pTag);
}
window.addEventListener("load", function () {
  document.querySelector("#userForm").addEventListener("submit", handleUserForm);
});





