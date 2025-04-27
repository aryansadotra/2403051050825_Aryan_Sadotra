function add() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2);
    document.getElementById('result').innerText = "Result: " + sum;
}

function subtract() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let diff = Number(num1) - Number(num2);
    document.getElementById('result').innerText = "Result: " + diff;
}

function multiply() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let product = Number(num1) * Number(num2);
    document.getElementById('result').innerText = "Result: " + product;
}

function divide() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num2 == 0) {
        document.getElementById('result').innerText = "Cannot divide by zero!";
    } else {
        let quotient = Number(num1) / Number(num2);
        document.getElementById('result').innerText = "Result: " + quotient;
    }
}
