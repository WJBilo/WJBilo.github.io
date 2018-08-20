
/*
jQuery methoden er inde i en document ready event,
da det forhindre jQuery koden i at køre før 
dokumentet er færdig med at loade
*/

$(document).ready(function(){
	/* Dette gør at når man klikker på et element med klassen 
	'next' (pilen der pejer til højre),
	så sker der det at man får det næste billide med klassen
	active
	*/ 
  $('.next').on('click', function(){
// her sætter jeg en variabel lig med de elementer der har klassen active
    var currentImage = $('.active');

    /* 
    .next() gør at man får den umiddelbart næste 'søskende' 
      af hvert element i et
      sæt af matchede elementer.
      Hvis der er givet en selector, henter den kun den næste søskende
      hvis den passer til den selector. I dette tilfælde er det søskende med
      klassen active. 

    */ 

    // følgende sætter en variabel = det næste element med klassen active
    // og vil dermed retunere den næste søskende der er i rækken. 
    var nextImage = currentImage.next(); 

// følgende if statement
// checker om der er flere end et billide og hvis der er det
// så fjern klassen active på det nuværende element og giv det -10
// z-index (mindre prioritet) og derefter tilføj klassen
// active til det næste billide i rækken og giv den højere prioritet 

    if(nextImage.length){
    	currentImage.removeClass('active').css('z-index', -10);
    	nextImage.addClass('active').css('z-index', 10);  

     

    }

  }); 
  /* Følgende gør at når man klikker på et element med klassen 
	'prev' (pilen til der pejer til venstre), 
	så sker der det at man får det forige billide med klassen
	active
	*/ 

  $('.prev').on('click', function(){
    var currentImage = $('.active');
    var prevImage = currentImage.prev(); 

    if(prevImage.length){
    	currentImage.removeClass('active').css('z-index', -10);
    	prevImage.addClass('active').css('z-index', 10);  



    }

  }); 
  

});