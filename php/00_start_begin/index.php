<?php 

    $password = "pizza";

    $hash = password_hash($password , PASSWORD_DEFAULT);

    // echo $hash;

    if(password_verify("pizza1", $hash)){
        echo "You are Logged in!";
    }
    else {
        echo "Incorrect password!";
    }

?>