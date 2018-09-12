<?php 
  // DENNE FIL ER FORÆLDET!**
  // Dette er min tidligere version. Jeg har lavet
  // en ny version i contact.php filen hvor jeg benytter PHPMailer istedet
  



   // $_POST holder data som er modtaget fra en HTTP POST request. 

// I denne situation vil de værdier der er blevet udfyldt i formen bliver sent som parametre i dette request


   // if (isset) checker om kontakt-formen er blevet sendt 

   if (isset($_POST['submit'])) {

   	$name = $_POST['name']; 
   	$subject = $_POST['subject']; 
   	$mailFrom = $_POST['mail'];   
   	$message = $_POST['message']; 

   	
    // Gmail giver ikke adgang til at mails kan blive modtaget på denne her måde så jeg har lavet en midlertidig mail 
    // Her sætter jeg en variabel = den mail adresse som beskeden skal sendes til 

   	$mailTo = "cqu73080@molms.com"; 
   	$headers = "Fra: ".$mailFrom; 
   	// \n sørger for at der bliver 'sprunget' ned til en ny linje 
   	$txt = "Du har modtaget en mail fra ".$name.".\n\n".$message;  

   	// mail() funktionen gør det muligt at sende emails direkte fra et script. 
   	mail($mailTo, $subject, $txt, $headers);
	
	// header() funktionen sender en 'raw' HTTP header til klienten
   	header("Location: contact.php?mailsendt");  
   }
?>