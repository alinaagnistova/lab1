document.getElementById('valForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let x = document.querySelectorAll('input[type="radio"]:checked')[0].value;
    let y = document.getElementById('y').value;
    let r = document.getElementById('r').value;
    if (validate(x, y, r)) {
        send(x, y, r);
    }

});

function send(x, y, r) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/base.php', true);
    xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.error) {
                alert(response.error);
            } else {
                let table = document.querySelector('table');
                let newRow = table.insertRow(1);
                newRow.innerHTML =
                    '<td>' + response.x + '</td>' +
                    '<td>' + response.y + '</td>' +
                    '<td>' + response.r + '</td>' +
                    '<td>' + response.result + '</td>' +
                    '<td>' + response.time + '</td>' +
                    '<td>' + response.script_time + '</td>';
            }
        }
    };
    xhr.send('x=' + x + '&y=' + y + '&r=' + r);
}



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

function validate(x, y, r) {
    let replaceDot = val => val.replace(',', '.');
    let y1 = replaceDot(y);
    let r1 = replaceDot(r);
    if (x == null){
        showExc("Необходимо выбрать значение координаты X:(");
        return false;
    }

    if (y1 === "") {
        showExc("Необходимо указать значение координаты Y:(");
        return false;
    }

    if (isNaN(y1)) {
        showExc("Нет, так не надо. Надо вот так: Y - число");
        return false;
    }

    if (y1 < -5 || y1 > 5) {
        showExc("Координата Y может быть любым числом из диапазона {-5;5}");
        return false;
    }

    if (r1 === "") {
        showExc("Необходимо указать значение радиуса:(");
        return false;
    }

    if (isNaN(r1)) {
        showExc("Нет, так не надо. Надо вот так: Радиус - число");
        return false;
    }

    if (r1 < 1 || r1 > 4) {
        showExc("Радиус может быть любым числом из диапазона {1;4}");
        return false;
    }
    return true;
}