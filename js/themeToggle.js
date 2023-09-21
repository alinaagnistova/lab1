const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.getElementsByClassName("header")[0];
const formBlock = document.getElementsByClassName("form-block")[0];
const buttons = document.getElementsByClassName("data-button");
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    formBlock.classList.toggle('dark');
    Array.from(buttons).forEach((el) => {
        el.classList.toggle('dark');
    });
});