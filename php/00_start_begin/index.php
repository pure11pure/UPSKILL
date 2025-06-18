<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label>username: </label>
        <input type="text" name="username" /><br>
        <label>password: </label>
        <input type="password" name="password" /><br>
        <input type="submit" name="login" value="Log in" />

    </form>
</body>

</html>

<?php 

    // $_POST[""];

    /*
    foreach($_POST as $key => $value){
        echo "{$key} = {$value} <br>";

    }
    */

    /*
    if(isset($_POST["login"])){
        echo "You tried to login <br>";

        $username = $_POST["username"];
        $password = $_POST["password"];

        if(empty($username)){
            echo "Username is <b> missing";
        }
        else{
            echo "Hello {$username}";
        }

    }
    */

?>




<!-- (0) -->



<!-- <?php 

    // $username = "";
    // $username = null;
    // $username = true;
    // $username = false;


    echo empty($username) . "<br>";

    if(empty($username)){
        echo "This variable is empty";
    }
    else{
        echo "This variable is NOT empty";
    }

?> -->



<!-- <?php 

    $username = "BroCode";
    // $username = null;

    echo isset($username) . "<br>";

    if(isset($username)){
        echo "This variable is set";
    }
    else{
        echo "This variable is NOT set";
    }

?> -->