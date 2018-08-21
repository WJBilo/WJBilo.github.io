var string = ""; 

// Laver en funktion som tager en parameter (et nummer)
function getNumber(num) {
// sætter en variabel = det HTML element som har id'et 'input'
// hvilket er et <input> element af typen 'box', som er  selve 'skærmem' på lommeregneren

	var string2 = document.getElementById('input2'); 

// Denne her switch sætning checker hvilket tal-input
// der bliver valgt og lægger det til variablen's værdi
// .value fanger 'værdien' af variablen. 
// x += '1' er det samme som at sige input x = x + 1: 
	switch (num) {
		case 1:
		string += '1';
		string2.value += '1';
		break; 
		case 2:
		string += '2';
		string2.value += '2';
		break; 
		case 3:
		string += '3';
		string2.value += '3';
		break; 
		case 4:
		string += '4';
		string2.value += '4';
		break; 
		case 5:
		string += '5';
		string2.value += '5';
		break; 
		case 6:
		string += '6';
		string2.value += '6';
		break; 
		case 7:
		string += '7';
		string2.value += '7';
		break; 
		case 8:
		string += '8';
		string2.value += '8';
		break; 
		case 9:
		string += '9';
		string2.value += '9';
		break; 
		case 0:
		string += '0';
		string2.value += '0';
		break; 

	}
}




function getOperand(operand) {

	var string2 = document.getElementById('input2'); 
	switch (operand) {



		case '+':
		string += '+';
		string2.value += ' + ';
		break; 
		case '-':
		string += '-';
		string2.value += ' - ';
		break; 
		case '*':
		string += '*';
		string2.value += ' * ';
		break; 
		case '/':
		string += '/';
		string2.value += ' ÷ ';
		break; 
		case '.':
		string += '.';
		string2.value += '.';
		break; 
		case 'Log':
		string += 'Math.log(';
		string2.value += 'log(';
		break; 
		case 'sqrt': 
		string += 'Math.sqrt(';
		string2.value += '√( ';
		break; 
		case '(':
		string += '(';
		string2.value += '(';
		break; 
		case ')':
		string += ')';
		string2.value += ')';
		break; 
		case 'mod':
		string += '%';
		string2.value += ' Mod ';
		break; 
		case 'pi':
		string += Math.PI; 
		string2.value += 'π'; 
		break; 
		case 'SIN':
		string += 'Math.sin(';
		string2.value += 'sin(';  
		break; 
		case 'COS':
		string += 'Math.cos('; 
		string2.value += 'cos(';  
		break; 
	}
}


function clearScreen() {

	string = "";
	document.getElementById('input2').value = "";
	document.getElementById('answer').value = "";
}


function compute() {



	var ans = eval(string); 

	if (ans === Infinity) {
          ans = 'Error cant divide by zero'; 
	    }

	document.getElementById('answer').value = ans;

	console.log(string); 
	console.log("= " + ans); 
	
	}


