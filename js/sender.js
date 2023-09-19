document.getElementById('valForm').addEventListener('submit', function (e) {
    e.preventDefault();
})

    if (validate()) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/base.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
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
        xhr.send('&x=' + x + '&y=' + y + '&r=' + r);
    } else {
        console.log("Валидация не завершена");
    }

