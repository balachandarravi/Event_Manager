const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const smallScreenLoginBtn = document.getElementById('smallScreenLogin');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

smallScreenLoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


