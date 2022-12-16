<?php

$username = readline("Insert username : ");
$password = readline("Insert password : ");

if ($username == 'admin' && $password == 'password') {
    echo 'Welcome To This Website!';
    echo "\n";
}else{
    echo "Sorry,you're not the admin";
    echo "\n";
}


?>