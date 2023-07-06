loginButton = document.getElementById('login-button');
registerButton = document.getElementById('register-button');

loginButton.addEventListener('click', signup);
registerButton.addEventListener('click', register);

function signup() {
  console.log('signup');
}
function register() {
  console.log('register');
}
