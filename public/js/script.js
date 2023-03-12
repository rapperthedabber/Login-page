//const { response } = require("express");

const signUp = document.getElementById('signup');
const login = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('login');

async function newUser (signUp, password){
signUp.trim()
password.trim()
if (signUp && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ signUp, password }),
      headers: { 'Content-Type': 'application/json' },
    });

if (response.ok) {
    document.location.replace('/');
    alert('sign up successful')
  } else {
    alert('Failed to sign up');
  }
}}



signUp.addEventListener("click", function(e) {
e.defaultPrevented;
newUser(signUp.value, password.value)
})