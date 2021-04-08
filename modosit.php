<?php
require './MySqlDB.php';
parse_str(file_get_contents('php://input'),$adatom);
$mysql = new MySqlDB();
$id = $adatom["ID"];
$allapot = $adatom["allapot"];
//$id = "2";
//$allapot = "1";
$update = "allapot='".$allapot."'";
echo $update;
$mysql->frissit("todo", $update, "ID=".$id);


