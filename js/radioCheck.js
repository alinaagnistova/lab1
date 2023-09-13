const radios = document.querySelectorAll('input[type="radio"]');
let x;
let isSelected = false;

for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        x = radios[i].value;
        isSelected = true;
        break;
    }
    if (!isSelected){
        x = null;
    }
}

