<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <form action="index.php" method="get"> -->
    <form action="index.php" method="post">
        <label>username: </label><br>
        <input type="text" name="username"><br>
        <label>password: </label><br>
        <input type="password" name="password"><br>
        <input type="submit" value="log in">
    </form>
</body>

</html>

<?php

    //$_GET =>  Date is appended to the url
    //          NOT SECURE 
    //          GET requests can be cached
    //          Better for a search page

    // echo "{$_GET["username"]} <br>" ;
    // echo "{$_GET["password"]} <br>"; 
    
    //$_POST =>  Date is packaged inside the body of the HTTP request
    //          MORE SECURE 
    //          GET requests are not cached
    //          Better for submitting credentials  

    echo "{$_POST["username"]} <br>" ;
    echo "{$_POST["password"]} <br>";
?>