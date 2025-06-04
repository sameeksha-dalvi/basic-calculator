

const digit_1 = document.querySelector("#digit-1");
const digit_2 = document.querySelector("#digit-2");
const digit_3 = document.querySelector("#digit-3");
const digit_4 = document.querySelector("#digit-4");
const digit_5 = document.querySelector("#digit-5");
const digit_6 = document.querySelector("#digit-6");
const digit_7 = document.querySelector("#digit-7");
const digit_8 = document.querySelector("#digit-8");
const digit_9 = document.querySelector("#digit-9");
const digit_0 = document.querySelector("#digit-0");

const clearBtn = document.querySelector("#btn-clear");

const op_add = document.querySelector("#op_add");
const op_sub = document.querySelector("#op_sub");
const op_mul = document.querySelector("#op_mul");
const op_div = document.querySelector("#op_div");

let firstNum;
let secondNum;
let operator;

digit_1.addEventListener("click", () => {
    populateDisplay("1");
});


digit_2.addEventListener("click", () => {
    populateDisplay("2");
});

digit_3.addEventListener("click", () => {
    populateDisplay("3");
});

digit_4.addEventListener("click", () => {
    populateDisplay("4");
});

digit_5.addEventListener("click", () => {
    populateDisplay("5");
});

digit_6.addEventListener("click", () => {
    populateDisplay("6");
});

digit_7.addEventListener("click", () => {
    populateDisplay("7");
});

digit_8.addEventListener("click", () => {
    populateDisplay("8");
});

digit_9.addEventListener("click", () => {
    populateDisplay("9");
});

digit_0.addEventListener("click", () => {
    populateDisplay("0");
});

clearBtn.addEventListener("click", () => {
    populateDisplay("");
});

op_add.addEventListener("click", () => {
    populateDisplay("+");
});

op_sub.addEventListener("click", () => {
    populateDisplay("-");
});

op_mul.addEventListener("click", () => {
    populateDisplay("*");
});

op_div.addEventListener("click", () => {
    populateDisplay("/");
});

function operate(op, num1, num2) {

    switch (op) {

        case "+": add(num1, num2);
            break;

        case "-": subtract(num1, num2);
            break;

        case "*": multiply(num1, num2);
            break;

        case "/": divide(num1, num2);
            break;


    }
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



function populateDisplay(value) {

    const displayValue = document.querySelector("#user-input");
    let defaultValue = displayValue.getAttribute("value");
    let newArr = [];
    if (value == "") {// reset the display
        displayValue.setAttribute("value", value);
        return;
    }

    if (defaultValue == "" || defaultValue == undefined || defaultValue == null) {
        console.log("first digit entered");
        displayValue.setAttribute("value", value);
        firstNum = parseInt(value);
    } else {

        if (value == "+" || value == "-" || value == "*" || value == "/") {
            operator = value;
            console.log("operator : " + operator);
        }

        displayValue.setAttribute("value", defaultValue + value);
        let finalVal = defaultValue + value;
        if (finalVal.includes("+")) {
            newArr = finalVal.split("+");
        } else if (finalVal.includes("-")) {
            newArr = finalVal.split("-");
        } else if (finalVal.includes("*")) {
            newArr = finalVal.split("*");
        } else if (finalVal.includes("/")) {
            newArr = finalVal.split("/");
        }

        firstNum = parseInt(newArr[0]);
        secondNum = parseInt(newArr[1]);

        console.log("firstNum " + firstNum);
        console.log("secondNum " + secondNum);
    }

    //console.log("firstNum "+firstNum);

}