const output = document.getElementById("display");
const output2 = document.getElementById("display2");
const operatorBtn = document.querySelectorAll(".operator");

let operator = null, firstOperand = null, secondOperand = null;
let prevBtn = null;

// USING jQUERY

$(function(){
});


// NRML()

const operators = ["+", "-", "%", "*", "/"];

function clearAll_2() {
    output2.value = "";
    operator = null;
    firstOperand = null;
    secondOperand = null;
    operatorBtn.forEach( button => { button.classList.remove("active")});
    prevBtn = null;
}

//  x is the value parameter, clickedBtn is the object
function get_numbers(x, clickedBtn) {
    // preparatory step: 
    // zero's are not accepted before integers 1-9
    // operator is not accepted before integer input
    if (
        (!firstOperand) && (x === "00" || x === "0") ||
        (!output2.value && operators.includes(x))) {
        return;

        // && !operator && !firstOperand
        // interim check: does the user want to continue with the previous result?
    // } else if (operators.includes(x) && output2.value) {
    //     operator = x;
    //     firstOperand = output2.value;
    //     return;

        // step 2: choose an operator
    } else if (operators.includes(x) && firstOperand != null) {
        // OPTIONAL CHAINING
        prevBtn?.classList.remove("active");
        prevBtn = clickedBtn;
        prevBtn.classList.add("active");

        // 解決方法 2
        // if (prevBtn) {
        //     prevBtn.classList.remove("active");
        // } 

        // operatorBtn.forEach( button => { button.classList.remove("active")});
        // clickedBtn.classList.add("active");

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
    //  step 2: the calculator restarts again
    else if (firstOperand == null) {
        output2.value = x;
        firstOperand = parseFloat(output2.value);
    }
    // step 2 variant: append value to the first operand 
    else {
        output2.value += x;
        firstOperand = parseFloat(output2.value);
    }
}

function operation_2() {
    operatorBtn.forEach(button => { button.classList.remove("active") });
    prevBtn = null;
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
        
        // unlimited usage.
        // firstOperand = result;
        // secondOperand = operator = null;

        // one-time only.
        firstOperand = secondOperand = operator = null;
    }
}

// EVAL()
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
