<?php
// Her gentager jeg sessionen. (Det var her jeg nåede til i opgaven)
session_start();
?>
<?php include "Header.php"?>
<?php
$g=$_SESSION['sub'];
echo "<img src='$g'>";

?>