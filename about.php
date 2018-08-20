<!DOCTYPE html>

<html>
<head> 

<meta charset="utf-8">
<title> About side </title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" type="text/css" href="css/about.css">
<link rel="stylesheet" type="text/css" href="css/Header.css">


</head>
<!-- inkludere headeren --> 
  <?php include"header.php"; ?> 
  <body>
	<div class="profile-box">
		<img src="images/profilepic.jpg" class="profile-pic">
		<h1>William Juul Bilø </h1>	
		<h5> Datateknikerlærling</h5>

		<p>
			Jeg er 19 år gammel og startede på Data- og kommunikations-uddannelsen i 2018 og har fornylig bestået grundforløb 2 med en standpunktskarakter på 12.
            I 2015-2016 arbejdede jeg for et digitalt bureau, KompetenceKanalen A/S, på Store Torv i Aarhus C, hvor jeg arbejdede med SEO linkbuilding. 
            Udover det har jeg også fra 2015-2017 arbejdet i KIWI i Frederiks Allé, som kasseassistent.  
            <br>  
            <br> 
			Jeg er imødekommende og jeg arbejder målrettet og engageret med de opgaver jeg får stillet. Jeg forstår vigtigheden af, at få samspillet i et team til at fungere og jeg tager gerne ansvar for at føre opgaven i mål. 
		</p>
		<br> 
		<br>
			<!-- Følgende er en form som benytter get methoden til at hente en fil når brugeren trykker på knappen --> 
	    <form method="get" action="docs/Ansoegning WJB.pdf">
	        <button type="submit" class="btn" style="width:35%">Download Ansøgning!</button>
	    </form>

	    <form method="get" action="docs/CV WJB.pdf">
	        <button type="submit" class="btn2" style="width:35%">Download CV!</button>
	    </form> 
	</div> 
  <!-- følgende skaber noget mellemrum ned til footeren --> 
    <div class="space"></div>
    <!-- inkludere footer --> 
    <?php include"footer.php"; ?> 
  </body>
</html> 
