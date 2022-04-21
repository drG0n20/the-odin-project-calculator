

//1.add function
function add(a, b) {
  a + b;
}

//2.substract
function substract(a, b) {
  a - b;
}

//3.multiply
function multiply(a, b) {
  a * b;
}

//4.divide
function divide(a, b) {
  a / b;
}

function operate(operator, a, b) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    substract(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  } else if (operator=="/"){
    divide(a, b);
  } else {
    alert("Something went wrong! Bad operator")
  }
}


const displayView = document.getElementById('display')
const choices = document.querySelectorAll('button')
let userChoice

choices.forEach(choice => choice.addEventListener('click', (e) =>{
  userChoice = e.target.id
  displayView.innerHTML = userChoice
}))