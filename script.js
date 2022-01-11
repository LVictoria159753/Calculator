let output = document.getElementById("output");
let result = document.getElementById("result");
let num= document.querySelectorAll("num");


//clicking a button and printing it out on the screen
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let x=button.id;
    document.getElementById("upper-screen").innerHTML+=x;
    document.getElementById("lower-screen").innerHTML+=x;
    console.log(x);
    
  });
});



//Clear Button- refresh content
document.querySelector("#clear").addEventListener("click", ()=>{
    window.location.reload()
});

//document.querySelector(".equals").addEventListener("click",()=>{


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


function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}
/*

Scrap Code 
upper-screen
upperDisplay.textContent = evaluate(operand1, operand2, currentOperator);

*/