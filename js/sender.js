document.getElementById('valForm').addEventListener('submit', function (e) {
    e.preventDefault();
})

function send() {
    let y = document.getElementById('y').value;
    let r = document.getElementById('r').value;
    let xhr = new XMLHttpRequest();
    if (validate()) {
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
}


// $("document").ready(function () {
//     $("#feedBack").on("submit", function () {
//         let dataForm = $(this).serialize();
//         $.ajax({
//             url: 'php/base.php', //idk if url correct
//             method: 'post',
//             dataType: 'html',
//             data: dataForm,
//             success: function (data) {
//                 console.log(data);
//             },
//             error: function (XHR, status, error) {
//                 console.error("Error:", error);
//             }
//         });
//     });
// });
// let y = document.getElementById('y');
// let r = document.getElementById('r');
// if (validate()){
//     console.log("ПЕРЕДАЧА ДАННЫХ...");
//     $.ajax({
//         type: "POST",
//         url: "php/base.php",
//         dataType: "html",
//         data: {
//             x: x,
//             y: y.value,
//             r: r.value,
//             time: new Date().getTimezoneOffset()
//         },
//         success: function(data) {
//             // addInTable(data);
//         },
//         error: function(XHR, status, error) {
//             console.error("Error:", error);
//         }
//     });
// } else {
//     console.log("Процесс валидации не завершен");
// }
