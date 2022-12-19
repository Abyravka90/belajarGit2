<?php
$username = "admin";
$password = "admin";

if ($username == "admin" && $password == "admin") {
    echo "Selamat datang di halaman Admin";
} elseif($username != "admin" || $password != "admin"){
    echo "Username atau password yang kamu masukan salah";
}
?>