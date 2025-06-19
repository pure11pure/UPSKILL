<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        username: <br>
        <input type="text" name="username" /> <br>
        age: <br>
        <input type="text" name="age" /><br>
        email: <br>
        <input type="text" name="email" /><br>
        <input type="submit" name="login" value="Login" /> <br><br>
    </form>
</body>

</html>


<?php

    if(isset($_POST["username"])){

        /** รับแค่ username ไม่ต้องการรับ code
         * <script>alert("You have a Virus")</script>
         * $username = $_POST["username"];
        */

        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);

        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);

        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

        $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);

        $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

        if(empty($age)){
            echo "That number wasn't valid. <br>";
        }
        // else {
        //     echo "You are  $age years old. <br>";
        // }

        if(empty($email)){
            echo "That email wasn't valid. <br>";
        }
        // else {
        //     echo "Your email is : $email. <br>";
        // }

        echo "My name is $username. I'm $age years old. My email is $email.";
    }

?>