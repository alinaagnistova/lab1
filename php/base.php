<?php
$start = microtime(true);
date_default_timezone_set('Europe/Moscow');
function check($x, $y, $r){
    return ($x <= 0 &&$x >= - $r && $y <= 0 && $y >= - $r/2) || ($x >= 0 && $x <= $r/2 && $y <= 0 && $y >= - $r) || ($x >= 0 && $y >= 0 && pow($x, 2) + pow($y,2) <= pow($r/2, 2));
}
if (isset($_POST['x']) && isset($_POST['y']) && isset($_POST['r'])) {
    $x = $_POST['x'];
    $y = $_POST['y'];
    $r = $_POST['r'];
if (is_numeric($r) && is_numeric($x) && is_numeric($y)){
    $result = check($x, $y, $r);
    $script_time = round(microtime(true) - $start, 4);
$response = [
    'x' => $x,
    'y' => $y,
    'r' => $r,
    'result' => $result,
    'time' => date('H:i:s'),
    'script_time' => $script_time
];
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        echo json_encode(['error' => "Данные не валидны"]);
    }
} else {
    // Возвращаем сообщение об ошибке, если параметры не были переданы
    echo json_encode(['error' => "Параметры не переданы"]);
}


