// Laver en funktion som tager en parameter (et nummer)
function getNumber(num) {
// sætter en variabel = det HTML element som har id'et 'input'
// hvilket er et <input> element af typen 'box', som er  selve 'skærmem' på lommeregneren
	var input_var = document.getElementById('input'); 
// Denne her switch sætning checker hvilket tal-input
// der bliver valgt og lægger det til variablen's værdi
// .value fanger 'værdien' af variablen. 
// x += '1' er det samme som at sige input x = x + 1: 
	switch (num) {
		case 1:
		input_var.value += '1';
		break; 
		case 2:
		input_var.value += '2';
		break; 
		case 3:
		input_var.value += '3';
		break; 
		case 4:
		input_var.value += '4';
		break; 
		case 5:
		input_var.value += '5';
		break; 
		case 6:
		input_var.value += '6';
		break; 
		case 7:
		input_var.value += '7';
		break; 
		case 8:
		input_var.value += '8';
		break; 
		case 9:
		input_var.value += '9';
		break; 
		case 0:
		input_var.value += '0';
		break; 

	}
}




function getOperand(operand) {


	var input_var = document.getElementById('input'); 
	switch (operand) {



		case '+':
		input_var.value += '+';
		break; 
		case '-':
		input_var.value += '-';
		break; 
		case '*':
		input_var.value += '*';
		break; 
		case '/':
		input_var.value += '/';
		break; 
		case '+/-':
		input_var.value += '-' + input_var.value;
		break; 
		case '.':
		input_var.value += '.';
		break; 
		case 'Log':
		input_var.value += 'Math.log(';
		break; 
		case '(':
		input_var.value += '(';
		break; 
		case ')':
		input_var.value += ')';
		break; 
		case 'mod':
		input_var.value += '%';
		break; 
	}
}


function clearScreen() {

	document.getElementById('input').value = "";
	document.getElementById('answer').value = "";
}


function backSpace() {
// sætter en variabel = det HTML element som har id'et 'input'
// hvilket er et <input> element af typen 'box', som er  selve 'skærmem' på lommeregneren

	var input_var = document.getElementById('input'); 
// Her sætter jeg en variablen 'a' lig med værdien
// af variablen 'input_var.var'
	var a = input_var.value; 
	// 

	a = a.substring(0, a.length-1); 
	input_var.value = a; 
	
}

function compute() {

	var input_var = document.getElementById('input');

	var ans = eval(input_var.value); 

	if (ans === Infinity) {
          ans = 'Error cant divide by zero'; 
	    }

	document.getElementById('answer').value = ans;
	
	}


