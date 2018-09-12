
// Her definere jeg nogle funktioner 
// som tager x som parameter værdi
// Og inde i f.eks. sin(x) funktionen 
// retunere jeg Math.sin(x), hvor x er funktionens argument. 
// Funktionen sin(x) vil nu fungere på samme måde som 
// den indbyggede funktion Math.sin(x) og retunere sinusværdien til x.
// Grunden til at jeg gør det er for at undgår 
// at der står f.eks. Math.sin på skærmen frem
// for bare sin(), da Math.sin() ikke er nær så 
// brugervenligt og pænt. Så sin(x) bliver tilføjet til
// lommeregnerens input felt, frem for Math.sin(x). 
function sin(x) {
// Math.sin og Math.cos måler vinkler i radianer ved default,
// så får at få omregnet radianer om til vinkler,
// gange jeg med PI og dividere med 180
	return Math.sin(x * Math.PI/180); 
}

function cos(x) {

	return Math.cos(x * Math.PI/180); 
}

function sqrt(x) {

	return Math.sqrt(x); 
}

function log(x) {

    return Math.log(x); 

}

// Her sæætter jeg variablen PI = den indbyggede property Math.PI (ca. 3.14159)
var PI = Math.PI; 


// Her laver jeg en funktion som tager et nummer som parameter værdi
function hentNummer(nummer) {

// Her sætter jeg en variabel = det HTML element som har id'et 'input'
// hvilket er den øverste del af selve skærmem på lommeregneren
	var regnestykkePåSkærmen = document.getElementById('input'); 

// Denne her switch sætning checker hvilket tal-input
// der bliver valgt og lægger det til variablen's værdi
// F.eks. hvis man trykker på knappen med værdien '1', så
// bliver funktion hentNummer kaldt med 1 som parameter værdi
// og inde i funktionen bliver switch sætningen kørt og den stopper
// ved case 1 i dette tilfælde og udføre den kode der er defineret i den case.
// Og det der sker inde i f.eks. case 1 er at der bliver lagt
// '1' til inputfeltets værdi.   
// .value fanger 'værdien' af variablen. 
// x += 1 er det samme som at sige input x = x + 1: 
	switch (nummer) {
		case 1:
		regnestykkePåSkærmen.value += '1';
		break; 
		case 2:
		regnestykkePåSkærmen.value += '2'; 
		break; 
		case 3:
		regnestykkePåSkærmen.value += '3';
		break; 
		case 4:
		regnestykkePåSkærmen.value += '4';
		break; 
		case 5:
		regnestykkePåSkærmen.value += '5';
		break; 
		case 6:
		regnestykkePåSkærmen.value += '6';
		break; 
		case 7:
		regnestykkePåSkærmen.value += '7';
		break; 
		case 8:
		regnestykkePåSkærmen.value += '8';
		break; 
		case 9:
		regnestykkePåSkærmen.value += '9';
		break; 
		case 0:
		regnestykkePåSkærmen.value += '0';
		break; 

	}
}



// Her laver jeg en funktion som tager et matematisk tegn som parameter værdi
function hentTegn(tegn) {

// Her sætter jeg en variabel = det HTML element som har id'et 'input'. 
// hvilket er den øverste del af selve skærmem på lommeregneren. 
	var regnestykkePåSkærmen = document.getElementById('input'); 
	// Denne her switch sætning fungere på samme måde som 
	// den switch sætning som bliver defineret inde i funktionen 'hentNummer'. 
	switch (tegn) {

		case '+':
		regnestykkePåSkærmen.value += '+';
		break; 
		case '-':
		regnestykkePåSkærmen.value += '-';
		break; 
		case '*':
		regnestykkePåSkærmen.value += '*';
		break; 
		case '/':
		regnestykkePåSkærmen.value += '/';
		break; 
		case '.':
		// Dette if statement checker om regnestykkets længde er på 0
        // og hvis det er det så læg '0.' til frem for '.'
		if (regnestykkePåSkærmen.value.length==0) {
		regnestykkePåSkærmen.value += '0.'; 
	    }
	    else {
	    	regnestykkePåSkærmen.value += '.';
	    }
		break; 
		case 'Log':
		regnestykkePåSkærmen.value += 'log(';
		break; 
		case 'sqrt': 
		regnestykkePåSkærmen.value += 'sqrt(';
		break; 
		case '(':
		regnestykkePåSkærmen.value += '(';
		break; 
		case ')':
		regnestykkePåSkærmen.value += ')';
		break; 
		case 'mod':
		regnestykkePåSkærmen.value += '%';
		break; 
		case 'pi':
		regnestykkePåSkærmen.value += 'PI'; 
		break; 
		case 'SIN':
		regnestykkePåSkærmen.value += 'sin(';  
		break; 
		case 'COS':
		regnestykkePåSkærmen.value += 'cos(';  
		break; 
	}
}


// Beskrivelse af funktionerne deaktiverKnap() og aktiverKnap(): 

// Når man trykker på en af de knapper
// som har et Matematisk tegn som værdi (*, -, +, /, mod)
// så bliver funktionen deaktiverKnap() kaldt og 
// deaktivere knapperne, så man ikke kan skrive to
// af disse tegn lige efter hinanden.
// Trykker man derimod på en knap med et nummer
// som værdi så bliver knappperne genaktiveret og man kan trykker på dem igen. 


function deaktiverKnap() {
// '.disabled = true' deaktivere de valgte HTML elementer når denne her funktion bliver kaldt. 
// Et deaktiveret element er ubrugeligt og kan ikke klikkes. 
	document.getElementById('operandPLUS').disabled = true; 
	document.getElementById('operandMinus').disabled = true; 
	document.getElementById('operandMod').disabled = true; 
	document.getElementById('operandGange').disabled = true; 
	document.getElementById('operandDividere').disabled = true; 
	document.getElementById('operandPunktum').disabled = true; 
}

function aktiverKnap() { 
// '.disabled = false' aktivere HTML elementerne igen  
// og funktionaliteten af elementerne træder i kraft igen. 
	document.getElementById('operandPLUS').disabled = false; 
	document.getElementById('operandMinus').disabled = false; 
	document.getElementById('operandMod').disabled = false; 
	document.getElementById('operandGange').disabled = false; 
	document.getElementById('operandDividere').disabled = false; 
	document.getElementById('operandPunktum').disabled = false; 
}


// Denne her funktion bliver kaldt når man trykker på knappen 
// 'CE' og den rydder alt på skærmen ved at sætte 
// det hele = "". 
function rydIndhold() {

	document.getElementById('input').value = "";
	document.getElementById('resultatet').value = "";
// funktionen deaktiverKnap bliver også kaldt for at deaktivere
// de knapper med matematiske tegn, så man ikke kan
// starte regnestykket med f.eks. et '+' tegn. 
	deaktiverKnap();
// Som undtagelse lader jeg '.' være aktiv da det 
// er accepteret at starte regnestykket med '0.' 
// Samme begrundelse for minus
	document.getElementById('operandPunktum').disabled = false;
	document.getElementById('operandMinus').disabled = false;  

}

// Denne funktion bliver kaldt når man trykker på inputknappen 'C'.
// Den sletter den seneste char der er blevet udskrevet. 

function sletChar() {
// sætter en variabel = det HTML element som har id'et 'input'
// hvilket er et <input> element, som er  selve 'skærmem' på lommeregneren

	var regnestykkePåSkærmen = document.getElementById('input'); 
// Her sætter jeg variablen 'a' lig med værdien
// af variablen 'regnestykkePåSkærmen.value'
	var a = regnestykkePåSkærmen.value; 
	
// substring metoden udrager en del af en string
// Her definere jeg at den string jeg gerne vil udrage 
// skal starte ved index 0, hvilket er indexet for den første char
// i den givne string og at den skal slutte ved indexet af den
// sidste char i strengen -1. Så her sætter jeg variablen a = 
// regnestykket - en char. Og sætter derefter lommeregnerens
// inupt felt = a.  

	a = a.substring(0, a.length-1); 
	regnestykkePåSkærmen.value = a; 
   
}



function udregn() {

// eval() udregner indholdet af variablen 'regnestykkePåSkærmen', som om
// at det er et matematisk udtryk og retunere resultatet. Variablen 'resultatet'
// indeholder derfor resultatet af regnestykket efter man trykker på '=' knappen.  
	var regnestykkePåSkærmen = document.getElementById('input'); 
	var resultatet = eval(regnestykkePåSkærmen.value);  

// Her checker jeg om udregning bliver evalueret til at være = Infinity
// og hvis det er tilfældet, så sætter jeg variablen resultatet ='kan ikke dividere med 0',
// da denne fejl opstår hvis man prøver at dividere et tal med nul.  
	if (resultatet === Infinity || resultatet ===  -Infinity) {
          resultatet = 'Kan ikke dividere med 0'; 
          rydIndhold(); 
	    }
// Tilsidst sætter jeg det HTML Element som har id'et resultatet = selve
// variablen der indeholder resultatet, så det bliver vist nederst på lommeregnerens skærm.

	document.getElementById('resultatet').value = resultatet;
}