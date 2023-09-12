<?php
$start = microtime(true);
include 'checkout.php';

class DataValidator
{
    private $params;

    function __construct($params){
        $this->params=$params;
    }

    function checkInPOST(){
        foreach($this->params as $value) {
            if (!isset($_POST[$value])) {
                http_response_code(406);
                die();
            }
        }
    }

    function checkTypeVal(){
        foreach($this->params as $value){
            if (!is_numeric($_POST[$value])){
                http_response_code(415);
                die();
            }
        }
    }

    function fullCheck(){
        $this->checkInPOST();
        $this->checkTypeVal();
    }
}
$dataValidator = new DataValidator(array("x", "y", "r", "time"));
$dataValidator->fullCheck();

$x = $_POST['x'];
$y = $_POST['y'];
$r = $_POST['r'];
$time = $_POST['time'];

$checkout = new Checkout($x, $y, $r);
$flag = $checkout->checkout() ? "ПРАВДА" : "ЛОЖЬ";
$time = date('H:i:s');
$script_time=round(microtime(true) - $start, 4);
$result = "<tr>" .
    "<td> $x </td>" .
    "<td> $y </td>" .
    "<td> $r </td>" .
    "<td> $flag </td>" .
    "<td> $time </td>" .
    "<td> $script_time </td>" .
    "</tr>";
echo $result;

