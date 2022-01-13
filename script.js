let output = document.getElementById("output");
let result = document.getElementById("result");
let num= document.querySelectorAll(".num");
let ops= document.querySelectorAll("operator")


//clicking a button and printing it out on the screen
const buttons = document.querySelectorAll('button');
/*
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let x=button.id;
    document.getElementById("upper-screen").innerHTML+=x;
    document.getElementById("lower-screen").innerHTML+=x;
    
  });
});
*/

//num1 and num2 variables filled
let num1= '';
let num2= '';
let operator; 

num.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      if (num1=== ''){
        num1= e.target.innerHTML;
        console.log(num1);
      }
      else{

        num2 += e.target.innerText;
        console.log(num2); // Print 2nd number

    }}
    });
  });

//operators filled

ops.forEach((button) => {
    ops.addEventListener('click', (e)=>{
        if ( ops !=== "="){
            operator= e.target.innerHTML;
        }
        else {
            
        switch (operator)  // Calculate and print output
            case "+":
                console.log(add(num1, num2));
                break;
  
            case "-":
                console.log(subtract(num1, num2));
                break;
            case "*":
                  console.log(multiply(num1, num2));
                break;
            case "/":
                console.log(divide(num1, num2));
                break;

            }
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