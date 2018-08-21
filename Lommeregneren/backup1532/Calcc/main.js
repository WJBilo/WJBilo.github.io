var invisibleInput = ""; 

// Laver en funktion som tager en parameter (et nummer)
function getNumber(num) {
// sætter en variabel = det HTML element som har id'et 'input'
// hvilket er et <input> element af typen 'box', som er  selve 'skærmem' på lommeregneren

	var visibleInput = document.getElementById('input2'); 

// Denne her switch sætning checker hvilket tal-input
// der bliver valgt og lægger det til variablen's værdi
// .value fanger 'værdien' af variablen. 
// x += '1' er det samme som at sige input x = x + 1: 
	switch (num) {
		case 1:
		invisibleInput += '1';
		visibleInput.value += '1';
		break; 
		case 2:
		invisibleInput += '2';
		visibleInput.value += '2';
		break; 
		case 3:
		invisibleInput += '3';
		visibleInput.value += '3';
		break; 
		case 4:
		invisibleInput += '4';
		visibleInput.value += '4';
		break; 
		case 5:
		invisibleInput += '5';
		visibleInput.value += '5';
		break; 
		case 6:
		invisibleInput += '6';
		visibleInput.value += '6';
		break; 
		case 7:
		invisibleInput += '7';
		visibleInput.value += '7';
		break; 
		case 8:
		invisibleInput += '8';
		visibleInput.value += '8';
		break; 
		case 9:
		invisibleInput += '9';
		visibleInput.value += '9';
		break; 
		case 0:
		invisibleInput += '0';
		visibleInput.value += '0';
		break; 

	}
}




function getOperand(operand) {

	var visibleInput = document.getElementById('input2'); 
	switch (operand) {



		case '+':
		invisibleInput += '+';
		visibleInput.value += ' + ';
		break; 
		case '-':
		invisibleInput += '-';
		visibleInput.value += ' - ';
		break; 
		case '*':
		invisibleInput += '*';
		visibleInput.value += ' * ';
		break; 
		case '/':
		invisibleInput += '/';
		visibleInput.value += ' ÷ ';
		break; 
		case '.':
		invisibleInput += '.';
		visibleInput.value += '.';
		break; 
		case 'Log':
		invisibleInput += 'Math.log(';
		visibleInput.value += 'log(';
		break; 
		case 'sqrt': 
		invisibleInput += 'Math.sqrt(';
		visibleInput.value += '√( ';
		break; 
		case '(':
		invisibleInput += '(';
		visibleInput.value += '(';
		break; 
		case ')':
		invisibleInput += ')';
		visibleInput.value += ')';
		break; 
		case 'mod':
		invisibleInput += '%';
		visibleInput.value += ' Mod ';
		break; 
		case 'pi':
		invisibleInput += Math.PI; 
		visibleInput.value += 'π'; 
		break; 
		case 'SIN':
		invisibleInput += 'Math.sin(';
		visibleInput.value += 'sin(';  
		break; 
		case 'COS':
		invisibleInput += 'Math.cos('; 
		visibleInput.value += 'cos(';  
		break; 
	}
}


function clearScreen() {

	invisibleInput = "";
	document.getElementById('input2').value = "";
	document.getElementById('answer').value = "";
}


function compute() {



	var ans = eval(invisibleInput); 

	if (ans === Infinity) {
          ans = 'Error cant divide by zero'; 
	    }

	document.getElementById('answer').value = ans;

	console.log(invisibleInput); 
	console.log("= " + ans); 
	
	}


