const output = document.getElementById("display");
const output2 = document.getElementById("display2");

let operator = null, firstOperand = null, secondOperand = null;

// THE NORMAL WAY
function clearAll_2() {
    output2.value = "";
    operator = null;
    firstOperand = null;
    secondOperand = null;
}

const operators = ["+", "-", "%", "*", "/"];

function get_numbers(x) {
    // zero's are not accepted before 1-9
    if (
        (firstOperand == null) && (x === "00" || x === "0") ||
        (firstOperand == null && operators.includes(x))) {
        return;
        // step 2: choose an operator
    } else if (operators.includes(x) && firstOperand != null) {
        operator = x;
        // step 3: enter second operand
    } else if (operator != null) {
        if (secondOperand == null && (x === "00" || x === "0")) {
            return;
        }
        else { // clear the display screen for second operand
            if (secondOperand == null)
                output2.value = "";
            output2.value += x;
            secondOperand = parseFloat(output2.value);
        }
    }
    //  step 1: but the calculator restarts again
    else if (firstOperand == null) {
        output2.value = x;
        firstOperand = parseFloat(output2.value);
    }
    // step 1: append value to the first operand 
    else {
        output2.value += x;
        firstOperand = parseFloat(output2.value);
    }
}

function operation_2() {
    if (operator != null && firstOperand != null && secondOperand != null) {
        let result;
        switch (operator) {
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
            case "%":
                result = firstOperand % secondOperand;
                break;
            case "+":
                result = firstOperand + secondOperand;
                break;
        }
        output2.value = result;
        firstOperand = secondOperand = operator = null;
    }
}

// THE EVAL() WAY
function clearAll() {
    output.value = "";
}

function appendValue(v) {
    output.value += v;
}

function operation() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = "Error";
    }
}

function extract() {
    let str = output.value;
    output.value = str.slice(0, str.length - 1);
}
