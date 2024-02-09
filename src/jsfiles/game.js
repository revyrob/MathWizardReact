//const global variables
const globalOperator = localStorage.getItem('operator');
const globalRange = localStorage.get('range');

//find the variable in the html file 'gamePage1'
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const clientResponse = document.getElementById('sum');
const computerAnswer = num1 + (parseInt(globalOperator)) + num2;

//funtion for filling in the equation
function mathFunction(clientOperator, clientRange) {
    num1.innerText = Math.floor(Math.random() * clientRange );
    num2.innerText = Math.floor(Math.random() * clientRange );
    console.log(operator.innerText = parseInt(clientOperator));
}

function mathCompare(compAns, cliAns) {
    if(compAns === cliAns)
    {   
        document.body.style.cliAns = 'green';
    }
    else {
        document.body.style.background = 'red';
    }  
}

function reset() {
    mathFunction();
    document.body.style.background = 'purple';
}

mathFunction(globalOperator, globalRange);
mathCompare(computerAnswer, clientResponse);
setTimeout(reset(), 400);


