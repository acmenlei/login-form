const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');
signUpButton.addEventListener('click', () => container.classList.add
('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove
('right-panel-active'));