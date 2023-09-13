<?php
$start = microtime(true);
date_default_timezone_set('Europe/Moscow');
include 'checkout.php';

class DataValidator
{
    private $params;

    function __construct($params)
    {
        $this->params = $params;
    }

    function checkInPOST()
    {
        foreach ($this->params as $value) {
            if (!isset($_POST[$value])) {
                http_response_code(406);
                die();
            }
        }
    }

    function checkTypeVal()
    {
        foreach ($this->params as $value) {
            if (!is_numeric($_POST[$value])) {
                http_response_code(415);
                die();
            }
        }
    }

    function fullCheck()
    {
        $this->checkInPOST();
        $this->checkTypeVal();
    }
}

$dataValidator = new DataValidator(array("x", "y", "r"));
$dataValidator->fullCheck();
$x = $_POST['x'];
$y = $_POST['y'];
$r = $_POST['r'];
$checkout = new Checkout($x, $y, $r);
$result = $checkout->checkout() ? "ПРАВДА" : "ЛОЖЬ";
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
//    } else {
//        echo json_encode(['error' => "Данные не валидны"]);
//    }
//} else {
//    // Возвращаем сообщение об ошибке, если параметры не были переданы
//    echo json_encode(['error' => "Параметры не переданы"]);
//}


