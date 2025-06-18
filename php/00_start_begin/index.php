<?php 

    $date = date("l");

    switch($date){
        case "Monday":
            echo "I hate Mondays.";
            break;
        case "Tuesday":
            echo "It is Taco Tuesday.";
            break;
        case "Wednesday":
            echo "The work week is half over!";
            break;
        case "Thursday":
            echo "It's almost the weekend.";
            break;
        case "Friday":
            echo "The weenend is here!";
            break;
        case "Saturday":
            echo "Time to party!";
            break;
        case "Sunday":
            echo "Time to relax.";
            break;
        default:
            echo "{$date} is not a day";
    }

?>



<!-- <?php 

// ถ้าไม่ break มันจะทำตามเคสข้างล่างจากมันทั้งหมด

      $grade = "B";

      switch($grade){
        case "A" : 
            echo "You did great.";
            break;
        case "B" : 
            echo "You did good.";
            break;
        case "C" : 
            echo "You did okay.";
            break;
        case "D" : 
            echo "You did poorly.";
            break;
        case "F" : 
            echo "You failed.";
            break;
        default: 
            echo "{$grade} is not valid.";
      }

?> -->




<!-- <?php

    $grade = "A";

    if ($grade == "A") {
        echo "You did great";
    } 
    elseif ($grade == "B") {
        echo "You did good";
    } 
    elseif ($grade == "c") {
        echo "You did okay";
    } 
    elseif ($grade == "d") {
        echo "You did poorly";
    } 
    elseif ($grade == "F") {
        echo "You failed";
    }
    else{
        echo "{$grade} is not a valid grade.";
    }

?> -->