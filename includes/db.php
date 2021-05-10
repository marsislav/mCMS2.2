<?php
ob_start();
$db['db_host'] ='localhost';
$db['db_user'] ='marsisl1_wc';
$db['db_password'] ='8702014425Mars!';
$db['db_name'] ='marsisl1_wc';
foreach ($db as $key=>$value) {
define (strtoupper($key),$value);
}
$connection=mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$connection) {
    die (mysqli_error($connection));
}
?>