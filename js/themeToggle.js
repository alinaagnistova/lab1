const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.getElementsByClassName("header")[0];
const formBlock = document.getElementsByClassName("form-block")[0];
const updateButton = document.getElementsByClassName("update-data-button")[0];
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    // header.forEach((el) => {
    //     el.classList.toggle('dark');
    // });
    header.classList.toggle('dark');
    formBlock.classList.toggle('dark');
    updateButton.classList.toggle('dark');
});