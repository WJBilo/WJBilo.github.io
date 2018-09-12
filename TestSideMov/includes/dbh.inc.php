<?php 


// Man skal have en session kørende før session variabler fungere på hjemmesiden

session_start(); 

$dbServername = "localhost"; 
$dbUsername = "root"; 
$dbPassword = ""; 
$dbName = "nytloginsystem"; 


$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName); 	




?>