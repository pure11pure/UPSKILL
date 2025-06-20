<?php

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "root";
    $db_name = "businessdb";
    $conn = "";

    try {
        $conn = mysqli_connect(
            $db_server,
            $db_user,
            $db_pass,
            $db_name
        );
    } catch (mysqli_sql_exception) {
        echo "Could not connect! <br> ";
    }

    // if ($conn) {
    //     echo "You are connected! <br>";
    // }

?>