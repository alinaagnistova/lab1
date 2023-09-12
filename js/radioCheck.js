const radios = document.querySelectorAll('input[type="radio"]');
let x = null;

for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            x = radios[i];
        } else {
            x = null;
        }
    }

