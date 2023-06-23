const numbers = document.querySelectorAll("#num");
const displayInput = document.querySelector("#display-input");
const prevInput = document.getElementById("prev-input");

let numValues;
let firstValue;
let lastValue;
displayInput.value = 0;

function updateValues() {
  numbers.forEach((number, idx) => {
    number.addEventListener("click", (e) => {
      checkSelectedNum(e);
      //parseInt
      displayInput.value += e.target.textContent;
    });
  });
}

// function checkSelectedNum(e){
//   if(displayInput.value === '0'){
//     displayInput.value = ''
//   }
//   else if(e.target.textContent === '.'){
//     displayInput.value += '0'
//   }
// }

function checkSelectedNum(e) {
  if (e.target.textContent === ".") {
    // Check if decimal point already exists in the input value
    if (!displayInput.value.includes(".")) {
      // Add decimal point only if it doesn't already exist
      displayInput.value += "";
    }
  } else if (displayInput.value === "0") {
    displayInput.value = "";
  }
}

const operator = document.querySelectorAll("#operator");

function calculate() {
  operator.forEach((oper, index) => {
    oper.addEventListener("click", (e) => {
      if (operator[index].innerHTML === "+") {
        prevInput.value = displayInput.value;
        prevInput.value += ` ${operator[index].innerHTML} `;
        // displayInput.value = ""
        console.log(true);
      } else {
        console.log(false);
      }
    });
  });
}
calculate();
// checkSelectedNum()
updateValues();
