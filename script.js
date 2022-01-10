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

    function add (num1,num2){
    return num1 + num2;
}


//clicking a button and printing it out on the screen
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let x=button.id;
    document.getElementById("screen").innerHTML=x;
    console.log(x);
  });
});


//storing display value





//Clear Button- refresh content
document.querySelector("#clear").addEventListener("click", ()=>{
    window.location.reload()
});

document.querySelector("#equals").addEventListener("click",()=>{
    switch (ops){
        case '+' :
            console.log(multiply(num1, num2));
            break;
        case '-' :
            console.log(subtract(num1, num2));
            break
        case '*' :
            console.log(multiply(num1, num2));
            break
        case '/' :
            console.log(divide(num1, num2));
            break;
        default:
            return;
        }


} )