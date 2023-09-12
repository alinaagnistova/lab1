<?php
class Checkout{
    private $x;
    private $y;
    private $r;

    function __construct($x, $y, $r)
    {
        $this->x = $x;
        $this->y = $y;
        $this->r = $r;
    }
    
    function rectangle(){
        return ($this->x <= 0 && $this->x >= - $this->r && $this->y <= 0 && $this->y >= - $this->r/2);
    }

    function triangle(){
        return ($this->x >= 0 && $this->x <= $this->r/2 && $this->y <= 0 && $this->y >= - $this->r);
    }

    function circle(){
        return ($this->x >= 0 && $this->y >= 0 && pow($this->x, 2) + pow($this->y,2) <= pow($this->r/2, 2));
    }
    function checkout(){
       return $this->rectangle()|| $this->triangle() || $this->circle(); 
    }
}