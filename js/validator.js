let y = document.getElementById('y');
let r = document.getElementById('r');




function showExc(message) {
    let alert = document.getElementById('alert');
    let alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.style.color = 'red';
    alert.appendChild(alertDiv);
    setTimeout(function () {
        alertDiv.remove();
    }, 2000);


}

function validate() {
    if (x === null) {
        showExc("Необходимо выбрать значение координаты X:(");
        return false;
    }

    if (y === "") {
        showExc("Необходимо указать значение координаты Y:(");
        return false;
    }

    if (isNaN(y)) {
        showExc("Нет, так не надо. Надо вот так: Y - число");
        return false;
    }

    if (y < -5 || y > 5) {
        showExc("Координата Y может быть любым числом из диапазона {-5;5}");
        return false;
    }

    if (r === "") {
        showExc("Необходимо указать значение радиуса:(");
        return false;
    }

    if (isNaN(r)) {
        showExc("Нет, так не надо. Надо вот так: Радиус - число");
        return false;
    }

    if (r < 1 || r > 4) {
        showExc("Радиус может быть любым числом из диапазона {1;4}");
        return false;
    }
    return true;
}