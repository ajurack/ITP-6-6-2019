
var num1 = "";
var num2 = "";
var op = "";
var display = document.getElementById("display");

function addNum(num) {
    num1 += num;
    display.innerHTML = num1;
} 

function addOp(operator) {
    op = operator;
    num2 = num1;
    num1 = "";
}

function calculate() {
    num2 = parseFloat(num2);
    num1 = parseFloat(num1);
    var res = 0;
    if(op === "ADD") {
        res = num2 + num1;
    } else if(op === "SUBTRACT") {
        res = num2 - num1;
    } else if(op === "MULTIPLY") {
        res = num2 * num1;
    } else if(op === "DIVIDE") {
        res = num2 / num1;
    }
    num1 = res;
    display.innerHTML = num1;
}

function cls() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = 0;
}