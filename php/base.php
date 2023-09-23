<?php
require_once 'validator.php';
date_default_timezone_set('Europe/Moscow');
$start = microtime(true);


//$_SERVER['REQUEST_METHOD'] === 'POST'
if (isset($_POST['r']) && isset($_POST['x']) && isset($_POST['y'])) {
    $x = floatval($_POST['x']);
    $y = floatval($_POST['y']);
    $r = floatval($_POST['r']);
    if (validate($x, $y, $r)) {
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
    } else {
        echo json_encode(['error' => 'Невалидные данные']);
        http_response_code(400);
    }
} else {
    echo json_encode(['error' => 'Валидация не завершена']);
    http_response_code(400);
}
?>
