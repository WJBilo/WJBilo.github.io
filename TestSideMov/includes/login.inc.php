<?php 

// Man skal have en session kørende før session variabler fungere på hjemmesiden

session_start(); 

if (isset($_POST['submit'])) {
	include 'dbh.inc.php'; 
    // mysqli_real_escape_string forhindre personer i at indtase maliciuos code i formen 
	$uid = mysqli_real_escape_string($conn, $_POST['uid']); 
	$pwd = mysqli_real_escape_string($conn, $_POST['pwd']); 

	// Error handlers 
	// Checker om inputs er tomme 
	if (empty($uid) || empty($pwd)) {
		header("Location: ../index.php?login=empty"); 
	    exit(); 
	} else {

		$sql = "SELECT * FROM users WHERE user_uid='$uid'"; 
		$result = mysqli_query($conn, $sql); 

		// her checker jeg om vi får et resultat
		// mysqli_num_rows(); fortæller os hvor mange rows vi fandt 
		$resultChecker = mysqli_num_rows($result); 
        // Checker om der er user id i databasen som passer til det som personen indtastede 
		if ($resultCheck < 1) {
			// Benytter følgende location ved alle intastingsfejl da personer der prøver at logge ind på andres account ikke skal vide at de måske tastede pasword rigtig osv. 
		header("Location: ../index.php?login=error"); 
	    exit(); 	
		} else {
			// Indsætter query i parrantesen
			// Det vi gør her at vi tager alt det data som vi har modtaget fra databasen, da vi søgte efter alle brugere hvor user_uid er lig med $uid og vi sætter det så ind i et array ved navn $row
			if ($row = mysqli_fetch_assoc($result)) {
				// p.t. er passworded i databasen hashed så vi skal dehash det for at checke om det passer det password som personen indtastede. 
				// password_verify(); tager det pwd som brugeren indtastede og matcher det med det som er i databasen 
				$hashedPwdCheck = password_verify($pwd, $row['pwd']);
				// Følgende if statement checker om de stemmer overens
				if ($hashedPwdCheck == false) {
				  	header("Location: ../index.php?login=error"); 
	                exit();
				  } elseif ($hashedPwdCheck == true) {
				  	// Her bliver brugeren logget ind
				  	// SESSION Bruger man får at bestemme en variabel som kan tilgåes i alle filer/alle sider på hjemmesiden  
				  	// Her sætter jeg en session variabler = det user data som er i databasen. 
				  	$_SESSION['u_id'] = $row['user_id']; 
				  	$_SESSION['u_first'] = $row['user_first']; 
				  	$_SESSION['u_last'] = $row['user_last']; 
				  	$_SESSION['u_email'] = $row['user_email']; 
				  	$_SESSION['u_uid'] = $row['user_uid']; 
				  	header("Location: ../index.php?login=succes"); 
	                exit();



				  } 

			}


		}

	}
} else {
	// ../ gå tilbage en directory 
	header("Location: ../index.php?login=error"); 
	exit(); 	
}
?> 