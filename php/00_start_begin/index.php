<?php 

    $username = "pure Punnaporn Monkey";
    $phone = "123-456-7890";

    // $username = strtolower($username);
    // $username = strtoupper($username);
    // $username = trim($username); //ลบช่องว่าง อักขระส่วนเกินหน้า-หลังสตริง
    // $username = str_pad($username, 20, "/");
    // $username = str_replace("-", "", $phone);
    // $username = strrev($username);
    // $username = str_shuffle($username);
    // $equals = strcmp($username, "pure Punnaporn");
    // $count = strlen($phone);
    // $index = strpos($username, " ");
    // $index = strpos($phone, "-");
    // $firstname = substr($username, 0, 4);
    // $lastname = substr($username, 5);
    // echo $fullname;
    

    // $fullname = explode(" ", $username);
    // foreach ($fullname as $name){
    //     echo $name ."<br>";
    // }


    $username1 = array("pure", "Punnaporn", "Monkey");

    $username1 = implode("//", $username1);
    echo $username1;


?>