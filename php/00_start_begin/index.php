<?php 

    $child = true;
    $senior = false;
    $ticket = null;

    if($child || $senior){
        $ticket = 10;
    }
    else{
        $ticket = 15;
    }

    echo "The ticket price is \${$ticket}";

?>



<!-- <?php 

    $age = 25;
    $citizen = true;

    if(!$age >= 18 || !$citizen){
        echo "You cannot vote";
    }
    else{
        echo "You can vote";
    }

?> -->



<!-- <?php 

    $age = 25;
    $citizen = true;

    if($age >= 18 && $citizen){
        echo "You can vote";
    }
    else{
        echo "You cannot vote";
    }

?> -->





<!-- <?php 

    $temp = 15;
    $cloudy = true;

    if($temp < 0 || $temp > 30){
        echo "The weather is bad. <br>";
    }
    else{
        echo "The weather is good. <br>";
    }

    if(!$cloudy){
        echo "It's sunny.";
    }
    else{
        echo "It's cloudy.";
    }

?> -->






<!-- <?php 

    $temp = 15;

    if($temp < 0 || $temp > 30){
        echo "The weather is bad.";
    }
    else{
        echo "The weather is good.";
    }

?> -->




<!-- <?php 

    $temp = 35;

    if($temp >= 0 && $temp <= 30){
        echo "The weather is good.";
    }
    else{
        echo "The weather is bad.";
    }

?> -->