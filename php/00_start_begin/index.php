<?php
    $age = 101;

    if($age >= 100){
        echo "You are too old to enter this site";
    }
    elseif($age <= 0){
        echo "That wasn't a valid age";
    }
    elseif($age >= 18){
        echo "You may enter this site";
    }
    else{
        echo "You must be 18+ to enter";
    }
?>