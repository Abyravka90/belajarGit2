<?php
<?php

$nilai = readline("Input nilai : ");

switch ($nilai) {
    case ($nilai > 85):
        echo "A";
        break;
    case ($nilai >= 75 && $nilai <= 85):
        echo "B";
        break;
    case ($nilai >= 60 && $nilai <= 75):
        echo "C";
        break;

    default:
        echo "D";
        break;
}

?>
?>