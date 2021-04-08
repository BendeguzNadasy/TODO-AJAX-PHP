<?php

require './MySqlDB.php';
$mySql = new MySqlDB();
$todo = $_POST["todo"];
$datum = $_POST["datum"];
$allapot = $_POST["allapot"];

$mySql->ujRekord("todo", "(todo, datum, allapot)", "('$todo','$datum','$allapot')");
//print_r($_POST);
echo json_encode($_POST);
