<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label>Enter a country</label>
        <input type="text" name="country" />
        <input type="submit" />
    </form>
</body>

</html>


<?php 

    $capitals =array("USA" => "Washington D.C." , 
                    "Japan" => "Kyoto", 
                    "South Korea" => "Seoul", 
                    "India" => "New Delhi");

    $capital = $capitals[$_POST["country"]];
    echo "The capital is <b>{$capital}";

    /**
     * 1
     */
    // $capitals["USA"] = "Las Vegas";
    // $capitals["China"] = "Beijing";
    // array_pop($capitals);
    // array_shift($capitals);
    // $capitals = array_flip($capitals);
    // $capitals = array_reverse($capitals);
    // echo count($capitals) . "<br>";
    // foreach($capitals as $key => $value){
    //     echo "{$key} = {$value} <br>";
    // }


    /**
     * 2
     */
    // $keys = array_keys($capitals);
    // $values = array_values($capitals);
    // foreach($values as $value){
    //     echo "{$value}  <br>";
    // }


?>