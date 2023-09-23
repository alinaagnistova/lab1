<?php
function rectangle($x, $y, $r)
{
    return ($x <= 0 && $x >= -$r && $y <= 0 && $y >= -$r / 2);
}

function triangle($x, $y, $r)
{
    return ($x >= 0 && $x <= $r / 2 && $y <= 0 && $y >= -$r);
}

function circle($x, $y, $r)
{
    return ($x >= 0 && $y >= 0 && pow($x, 2) + pow($y, 2) <= pow($r / 2, 2));
}

function checkout($x, $y, $r)
{
    return rectangle($x, $y, $r) || triangle($x, $y, $r) || circle($x, $y, $r);
}

function validate($x, $y, $r)
{
    if (!(is_float($x) && is_float($y) && is_float($r))) {
        return false;
    } else {
        if (!($x >= -2 && $x <= 2 && strlen($x) <= 10)) {
            return false;
        }
        if (!($y >= -5 && $y <= 5 && strlen($y) <= 10)) {
            return false;
        }
        if (!($r >= 1 && $r <= 4 && strlen($r) <= 10)) {
            return false;
        }
        return true;
    }
}
