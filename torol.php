<?php

require_once './MySqlDB.php';
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $mySql = new MySqlDB();

    $mySql->torol("todo", "ID=" . $_GET["ID"]);
}

