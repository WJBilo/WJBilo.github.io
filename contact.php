<?php


// Jeg har benyttet PHPMailer til at få min mail form til at fungere ordentligt og også fordi at det er en lettere løsning end at benytte PHP's indbyggede mail() funktion. PHPMailer er et bibliotek til PHP, der giver en samling funktioner til at opbygge og sende email-meddelelser.

// $_POST holder data som er modtaget fra et HTTP POST request. 

// I denne situation vil de værdier der er blevet udfyldt i formen bliver sent som data i dette request


// følgende if (isset) checker om kontakt-formen er blevet sendt ved hjælp af submit knappen 

 if (isset($_POST['submit'])) {
    $mailSub = $_POST['mail_sub'];
    $mailMsg = $_POST['mail_msg'];
    $email = $_POST['email']; 
    $name = $_POST['Name']; 
    // Følgende statement sørger for at der bliver produceret en fejlkode hvis den ikke kan finde den givne fil
    require 'mailPHPMailer/PHPMailer-master/PHPMailerAutoload.php';
    $mail = new PHPMailer(); // Laver et nyt PHPMailer objekt 
    $mail ->IsSmtp(); // Specificere at der skal benyttes Simple Mail Transfer Protocol  til at sende mails med
    $mail ->SMTPDebug = 0; // Specificere Debug output level. 0 specificere at der ikke  skal være noget output. 
    $mail ->SMTPAuth = true; // Specificere om man vil bruge SMTP-authentication.
    $mail ->SMTPSecure = 'ssl'; // Tilføjer SMTP kryptering 
    $mail ->Host = "smtp.gmail.com"; // Specificere SMTP Server 
    $mail ->Port = 465; // eller 587 (Specificere port som der skal forbindes til) Port 465 er smtps
    $mail ->IsHTML(true); // Sætter email formatet til HTML 
    $mail ->Username = "wjbtest123@gmail.com"; //SMTP brugernavn 
    $mail ->Password = "hejwjb123"; // SMTP kodeord 
    $mail ->SetFrom("wjbtest123@gmail.com"); //Mailen bliver sendt fra denne mail  adresse 
    $mail->FromName = "Portfolio hjemmeside"; // Specificere hvor mailen er fra 
    $mail ->addReplyTo($email, $name); // Når jeg så inde på gmail vælger at svare på  beskeden der er sendt til mig fra en person som har benyttet formen, så er det den  mailadresse som personen har specificeret i formen, som mailen bliver sendt til. 
    $mail ->Subject = $mailSub; // Emnet på beskeden 
    $mail ->Body = $mailMsg. "<br><br> Med venlig hilsen <br>".$name; // Selve beskeden 
    $mail ->AddAddress("wjbtest123@gmail.com"); //Specificere den email adresse der  skal modtage mailen 
 
    
    // Følgende if statement bliver benyttet for at checke om mailen er blevet sendt og hvis den er det så bliver variablen '$msg' sat = en bekræftelse besked og hvis  mailen ikke bliver sendt så bliver den sat = en fejlbesked.



     if ($mail->send())
     $msg = "Din mail er blevet sendt, tak!";
      
     else
	 $msg = "Det mislykkedes, prøv venligst igen!"; 
   
}
?> 
<!-- ikludere header --> 
<?php include"header.php"; ?>
<!DOCTYPE html>

<html>
<head> 

<meta charset="utf-8">
<title> Contact page </title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<link rel="stylesheet" type="text/css" href="css/Header.css"> 
<link rel="stylesheet" type="text/css" href="css/Contact.css"> 

</head>



<body>
 <div class="wrapper">
	 <div class="kontakt-titel">
	 	<h1> Skriv til mig </h1>
	 	<h2> Så svarer jeg på din besked hurtigst muligt! </h2> 
	 </div>
	 	  <?php 
          // $mail->ErrorInfo checker om der er blevet indtastet en invalid mailadresse
          // $msg er en varibel som blev definerret længere oppe i koden
	 	  // Følgende if statement checker om variablen $msg er sat til noget og hvis den er det, så checker den om $mail->ErrorInfo er sat til noget og hvis den ikke er det, så bliver variablen $msg udskrevet  og hvis den er sat til noget, så udskriver den en fejlbesked. 
           if (isset($msg)) 
           { 
                 if ($mail->ErrorInfo == "")
                  {
	 	                if ($msg != "")
	 	                {
                            echo "<h3><br>$msg<br><br>"; 
	 	                } 
	 	                else 
	 	                {
                            null; 
	 	                }
                 }
                 else 
                 {
                     echo "<h3><br>Den indtastede mailadresse er invalid<h3>"; 
                 } 
           }	 	  
          ?>
     <!-- Følgende er noter til kontakt-formen --> 

	 <!-- input type="text" definere et input feldt for tekstinput -->

	 <!-- input typen submit definere en knap for at submitte form dataen hen til en form-handler. --> 

	 <!-- action attribute definere den handling der skal ske når formen er submitted --> 
     <!-- required sørger for at man først kan trykke submit når alle felter er udfyldt --> 

	 <div class="kontakt-form">
	 	
	 	<!-- post sender form dataene som en HTTP-posttransaktion --> 
         <form id="contact-form" method="post" action="contact.php">
            <input name="Name" type="text" class="form-control" placeholder="Dit fulde navn" required><br>
   
            <input name="email" type="text" class="form-control" placeholder="Din email" required><br>
   
            <input name="mail_sub" type="text" class="form-control" placeholder="Emne" required><br>
   
            <textarea name="mail_msg" class="form-control" placeholder="Besked" row="4" required></textarea> 
            <br> 
   
            <input type="submit" name="submit" class="form-control submit" value="SEND BESKED">
         </form>	 	
	 </div>
 </div>
 <!-- skaber noget mellemrum ned til footeren --> 
 <div class="space"></div>
 <!-- inkludere footer --> 
 <?php include"footer.php"; ?> 
</body>
</html> 
