<?php
$start = microtime(true);
date_default_timezone_set('Europe/Moscow');


function rectangle($x, $y, $r){
    return ($x <= 0 && $x >= - $r && $y <= 0 && $y >= - $r/2);
}

function triangle($x, $y, $r){
    return ($x >= 0 && $x <= $r/2 && $y <= 0 && $y >= - $r);
}

function circle($x, $y, $r){
    return ($x >= 0 && $y >= 0 && pow($x, 2) + pow($y,2) <= pow($r/2, 2));
}
function checkout($x, $y, $r){
    return rectangle($x, $y, $r)|| triangle($x, $y, $r) || circle($x, $y, $r);
}

if (isset($_POST['r']) && isset($_POST['x']) && isset($_POST['y'])) {
    $x = $_POST['x'];
    $y = $_POST['y'];
    $r = $_POST['r'];

    $result = checkout($x, $y, $r) ? "ПРАВДА" : "ЛОЖЬ";
    $script_time = round((microtime(true) - $start), 10);
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
}

?>
