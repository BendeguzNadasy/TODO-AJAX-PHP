<?php

require_once './MySqlDB.php';

$ab = new MySqlDB();

$todok = array();
$eredmeny = $ab->lekerdez("todo", 1);

if ($eredmeny->num_rows > 0) {
    while($sor = $eredmeny->fetch_assoc()) {
        $todok[] = $sor;
    }
    echo json_encode($todok);
}
else {
    echo "Nincs adat.";
}



