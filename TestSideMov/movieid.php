<?php
// En session gør det muligt at gøre data tilgængeligt på de forskellige sider på hele websiden
// Her starter jeg en session og benytter $_SESSION til det formål at det kan gemme en film i wishlisten i et stykke tid.
session_start();
// array_key_exists — Tjekker om den givne key eller index eksistere i array'et
// $_POST er en global variabel (associatuve array) som holder data som er modtaget fra en HTTP POST anmodning.
if(array_key_exists('sub',$_POST))
// Her henter jeg information fra min form på linje 50-55.
$_SESSION['sub']=$_POST['sub'];
?>

<?php 
// Jeg inkludere headeren
include "Header.php"
?>
<div class='container'> 


<?php
// Jeg inkuldere curl.php  fordi at den indeholder "curl" funktionen som jeg vil bruge
include"curl.php";

// isset checker om variablen er sat til noget.  
// Her henter jeg filmes id ud af url'en
// $_GET henter værdien af det som der kommer efter = tegnet i ?id= i url'en. Selve værdien den henter er filmens 'simpleID'.    
if (isset($_GET['id'])) 
{
   $movid = $_GET['id'];
   // Nu henter jeg alt data for hver film og ligger det ind i $array4
   $array4 = curl("http://bbmiddleware.wexo.dk/movie/$movid");
}
// Nu løber jeg dataen igennem i et loop og henter det ud som jeg gerne vil vise.

foreach($array4 as $val) 
{
   // Jeg echo'er baggrundsbillidet
   $background = "<img src=". $val["wexoAdditional"]["selectedImages"]["background"] ."><br>" . "</img><br>";
   echo $background;
    
   //Jeg udskriver titlen på filmen
   $title = "<h2 class='desc'>" .$val["title"] ."</h2><br>";
   echo $title;
 
   //Jeg udskriver beskrivelsen på filmen
   $description = "<h4 class='desc'>" .$val["description"] ."</h4><br>";
   echo $description;

   // Jeg laver filmens "runtime", som er sat i sekunder, om til minutter ved at dividere med 60.
   $tid = $val['plprogram$runtime'];
   $tid = $tid / 60;
   

   echo "<h3 class='desc'> Runtime: " . $tid ." Minutter</h3><br>"; 
   
   // Her bliver thumbnailen af filmen submitted, når man trykker på 'add to wishlist 
   $titlewish = $val["wexoAdditional"]["selectedImages"]["thumbnail"];
   // Jeg sender informationen med en post method.
   echo "<form  method='post'>
   <input type='hidden' name='sub' value='$titlewish'><br>
   <input type='submit' value='Add to wishlist'><br>";
    
    // Jeg indsætter et iframe med filmens trailer fra youtube
    echo "<br><iframe width='560' height='315' src=https://www.youtube.com/embed/" . $val['tdc$youtubeTrailer'] ." frameborder='0' allow='autoplay; encrypted-media' allowfullscreen>" . "</iframe><br><br>";
}

// Jeg henter data om skuespillere og instruktør.
$ActorOrDirector = $array4[0]['plprogram$credits'];

?>

<h1 class="cast"> Cast </h1>
<br> 
<div class='row'> 
  <?php 
  // Jeg udskriver skuespillere og instruktør
  foreach($ActorOrDirector as $val)
  {
  $AorD = $val['plprogram$creditType'];
  $Name = $val['plprogram$personName'];
  
   echo "<div class='col'><ul class='person'><h5>$Name</h5></ul><ul class='person'><h5>$AorD</h5></ul>  <br><br></div>"; 
  }
  ?>
</div>




</div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Genre</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

 <!-- Bootstrap --> 


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script> 

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<!-- bootstrap end --> 
 <style>
  * {

      margin: 0 auto; 
  }
  .person {
  width: 150px;
  height: 60px;
  padding: 10px;
  margin: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
    
 }
  .desc {
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;  
 }
  img {
  width: 100%;
  height: 500px;
  padding: 10px;
  margin: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

 }
 
 /* submit button*/   
  input[type=text] {
  padding:5px; 
  border:2px solid #ccc; 
  border-radius: 5px;
 }

 input[type=text]:focus {
    border-color:#333;
 }

 iframe {

  width: 100%;
 }

 input[type=submit] {
 padding:20px 25px; 
 background:#ccc; 
 border:0 none;
 cursor:pointer;
 border-radius: 5px; 
 width: 100%;
 }

.cast {
  width: 200px;
  height: 70px;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;

    

 }
 </style>
</head>
</html>