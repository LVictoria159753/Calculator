let output = document.getElementById("output");
let result = document.getElementById("result");
let num= document.querySelectorAll("num");



function multiply(num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

    function add (num,num){
    return num + num;
}

switch (operators){
case '+' :
    return(multiply(num1,num2));
    break;
case '-' :
    return(subtract(num1,num2));
    break
case '*' :
    return(multiply(num1,num2));
    break
case '/' :
    return(divide(num1,num2));
    break;
default:
    return
}