var String_regnestykke = ""; 
// Denne her string kommer til at indholde det samme  
// som skærmens input felt. Men istedet for at f.eks. COS knappen
// tilføjer cos(, som den gør ved inputfeltet, så bliver Math.cos( tilføjet
// til denne her string på samme tid. Når man så trykker på knappen med lighedstegnet så 
// er det udtrykket inden i denne her string, 
// som bliver udregnet ved hjælp af eval() funktionen.
// og eval() retunere så svaret og det bliver vist nederst på lommeregnerens skærm 
// Så det som brugeren ser i inputfeltet øverst på lommeregneren er 
// egentlig ikke det udtryk der bliver udregnet i sidste ende. 



function udregn() {

// eval() udregner indholdet af strengen 'String_regnestykke', som om
// at det er et matematisk udtryk og retunere resultatet. Variablen 'answer'
// indeholder derfor resultatet af regnestykket efter man trykker på '=' knappen.  
// eval tager string_regnestykke som parameter værdi i dette tilfælde. 
	var answer = eval(String_regnestykke);  

// Her checker jeg om udregning bliver evalueret til at være = Infinity eller NaN eller undefined
// og hvis det er tilfældet, så sætter jeg variablen answer ='Fejl'. 
	if (answer === Infinity || NaN || undefined) {
          answer = 'Fejl'; 
          rydIndhold(); 
	    }

	document.getElementById('answer').value = answer;
// Her udskriver jeg variablen i konsollen så man kan se 
// det matematiske udtryk som bliver evalueret 
	console.log(String_regnestykke); 
// Jeg udskriver også det retunerede resultat som er gemt inde i variablen 'answer'. 
	console.log("= " + answer); 
}


// Her laver jeg en funktion som tager et nummer som parameter værdi
function hentNummer(nummer) {

// Her sætter jeg en variabel = det HTML element som har id'et 'input'
// hvilket er den øverste del af selve skærmem på lommeregneren
	var regnestykkePåSkærmen = document.getElementById('input'); 

// Denne her switch sætning checker hvilket tal-input
// der bliver valgt og lægger det til variablen's værdi
// F.eks. hvis man trykker på knappen med værdien '1', så
// bliver funktion hentNummer kaldt med 1 som parameter værdi
// og inde i fukntion bliver switch sætningen kørt og den stopper
// ved case 1 i dette tilfælde og udføre den kode der er defineret i den case.
// Og det der sker inde i f.eks. case 1 er at der bliver lagt
// '1' til inputfeltets værdi og '1' til en strengen 'String_regnestykke'.   
// .value fanger 'værdien' af variablen. 
// x += 1 er det samme som at sige input x = x + 1: 
	switch (nummer) {
		case 1:
		String_regnestykke += '1';
		regnestykkePåSkærmen.value += '1';
		break; 
		case 2:
		String_regnestykke += '2';
		regnestykkePåSkærmen.value += '2'; 
		break; 
		case 3:
		String_regnestykke += '3';
		regnestykkePåSkærmen.value += '3';
		break; 
		case 4:
		String_regnestykke += '4';
		regnestykkePåSkærmen.value += '4';
		break; 
		case 5:
		String_regnestykke += '5';
		regnestykkePåSkærmen.value += '5';
		break; 
		case 6:
		String_regnestykke += '6';
		regnestykkePåSkærmen.value += '6';
		break; 
		case 7:
		String_regnestykke += '7';
		regnestykkePåSkærmen.value += '7';
		break; 
		case 8:
		String_regnestykke += '8';
		regnestykkePåSkærmen.value += '8';
		break; 
		case 9:
		String_regnestykke += '9';
		regnestykkePåSkærmen.value += '9';
		break; 
		case 0:
		String_regnestykke += '0';
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
		String_regnestykke += '+';
		regnestykkePåSkærmen.value += ' + ';
		break; 
		case '-':
		String_regnestykke += '-';
		regnestykkePåSkærmen.value += ' - ';
		break; 
		case '*':
		String_regnestykke += '*';
		regnestykkePåSkærmen.value += ' * ';
		break; 
		case '/':
		String_regnestykke += '/';
		regnestykkePåSkærmen.value += ' ÷ ';
		break; 
		case '.':
        // Dette if statement checker om regnestykkets længde er på 0
        // og hvis det er det så læg '0.' til frem for '.'
		if (String_regnestykke.length==0) {
			String_regnestykke = "0.";
			regnestykkePåSkærmen.value += '0.';
		}
		else {
		String_regnestykke += '.';
		regnestykkePåSkærmen.value += '.';
		}
		break; 
		case 'Log':
		String_regnestykke += 'Math.log(';
		regnestykkePåSkærmen.value += 'log(';
		break; 
		case 'sqrt': 
		String_regnestykke += 'Math.sqrt(';
		regnestykkePåSkærmen.value += '√(';
		break; 
		case '(':
		String_regnestykke += '(';
		regnestykkePåSkærmen.value += '(';
		break; 
		case ')':
		String_regnestykke += ')';
		regnestykkePåSkærmen.value += ')';
		break; 
		case 'mod':
		String_regnestykke += '%';
		regnestykkePåSkærmen.value += ' Mod ';
		break; 
		case 'pi':
		String_regnestykke += Math.PI; 
		regnestykkePåSkærmen.value += 'π'; 
		break; 
		case 'SIN':
		String_regnestykke += 'Math.sin(';
		regnestykkePåSkærmen.value += 'sin(';  
		break; 
		case 'COS':
		String_regnestykke += 'Math.cos('; 
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

	String_regnestykke = "";
	document.getElementById('input').value = "";
	document.getElementById('answer').value = "";
	// funktionen deaktiverKnap bliver også kaldt for at deaktivere
	// de knapper med matematiske tegn, så man ikke kan
	// starte regnestykket med f.eks. et '+' tegn. 
	deaktiverKnap();

}
