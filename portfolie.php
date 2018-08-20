<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<title> My Portfolio </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="css/Header.css"> 
<link rel="stylesheet" type="text/css" href="css/PortfolioStyle.css"> 


<?php include"header.php"; ?> 

<!-- JQuery --> 
<script
src="http://code.jquery.com/jquery-3.3.1.js"
integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin="anonymous">
</script>

<!-- JS --> 
<script src="js/main.js"></script> 
</head>
<body>

<!-- MAIN (Center website) -->
<div class="main">




<h2>PORTFOLIO</h2>
<hr>
<p class="indledningParagraf">Dette er min portfolio. Her finder du de projekter som jeg har gennemført.</p>

<!-- Portfolio Gallery Grid -->
  <div class="række">
   <div class="kolonne">
     <div class="indhold">
        <a href="#"><h3>Movie Site Projekt</h3></a>
        <p>Dette projekt blev gennemført ud fra en Code-challenge, som firmaet Wexo havde stillet mig.</p>
       <!-- image slider --> 
         <div class="container">
            <div class="slider-outer"> 
                <img src="images/arrow-left.png" height="34" width="30px" class="prev"  alt="Prev">            
                <div class="slider-inner">
                   <img src="images/MovieSite.JPG" class="active">
                   <img src="images/image1.jpg" class="active">
                   <img src="images/image2.jpg" class="active">
                   <img src="images/image3.jpg" class="active">
                </div>
                <img src="images/arrow-right.png" height="34" width="30px" class="next"  alt="Next">          
            </div>
         </div>
     <!-- image slider end --> 

<!-- Følgende er FORM NOTER --> 

<!--Form-dataen bliver sent som en URL variabel med method="get" --> 

<!-- input type="text" definere et input feldt for tekstinput -->

<!-- input typen submit definere en knap for at submitte form dataen hen til en form-handler. --> 

<!-- action attribute definere den handling der skal ske når formen er submitted -->  

        <form method="get" action="https://github.com/Wbilo/MovieSite">
  			   <button type="submit" class="btn" style="width:100%">Download kildekode her!</button>
        </form>
  		  <form method="get" action="docs/wexo_code_challenge.pdf">
  			   <button type="submit" class="btn2" style="width:100%">Challenge beskrivelse</button>
  	    </form> 
     </div>
   </div>
   <div class="kolonne">
     <div class="indhold">
         <a href="#">
           <h3>Coming Soon</h3>
         </a>
         <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei.</p>
         <a href="#">
           <img src="images/coming-soon.jpg" height="135
           " width="100%"> 
           </img>
         </a>
         <br> 
         <form method="get" action="#">
           <button type="submit" class="btn" style="width:100%">Download kildekode her!</button>
         </form>
         <form method="get" action="#">
            <button type="submit" class="btn2" style="width:100%">Challenge beskrivelse</button>
         </form> 
     </div>
   </div>
   <div class="kolonne">
     <div class="indhold">
         <a href="#">
           <h3>Coming Soon</h3>
         </a>
         <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei. 
         </p>
         <a href="#">
           <img src="images/coming-soon.jpg" height="135
           " width="100%"> 
           </img> 
         </a>
         <br> 
         <form method="get" action="#">
           <button type="submit" class="btn" style="width:100%">Download kildekode her!
           </button>
         </form>
         <form method="get" action="#">
            <button type="submit" class="btn2" style="width:100%">Challenge beskrivelse</button>
         </form> 
     </div>
   </div>
   <div class="kolonne">
     <div class="indhold">
         <a href="#">
            <h3>Coming Soon</h3>
         </a>
         <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei.
         </p>
         <a href="#">
            <img src="images/coming-soon.jpg" height="135" width="100%"></img> 
         </a>
         <br> 
         <form method="get" action="#">
            <button type="submit" class="btn" style="width:100%">Download kildekode her!</button>
         </form>
         <form method="get" action="#">
            <button type="submit" class="btn2" style="width:100%">Challenge beskrivelse</button>
         </form> 
     </div>
    </div>
  <!-- END GRID -->
  </div>

  <div class="indholdNederst">
     <h3>Coming Soon</h3>
     <p>Lorem ipsum dolor sit amet, tempor prodesset eos no.   Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem   ipsum dolor sit amet, tempor prodesset eos no.</p>
     <p>Lorem ipsum dolor sit amet, tempor prodesset eos no.   Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem   ipsum dolor sit amet, tempor prodesset eos no.</p>
  </div>

<!-- end of main --> 
</div>


  <!-- Følgende skaber noget mellemrum ned til footeren --> 
<div class="space"></div>
<!-- Footer --> 
<?php include"footer.php"; ?>

</body>
</html>


