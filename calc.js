const numbers = document.querySelectorAll('#num')
const displayInput = document.querySelector('#display-input')

let numValues;
displayInput.value = 0


function updateValues() {
  numbers.forEach((number, idx) => {
    number.addEventListener('click', (e) => {
      checkSelectedNum(e)
      //parseInt
      displayInput.value += (e.target.textContent)
    })
  })

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
  if (e.target.textContent === '.') {
    // Check if decimal point already exists in the input value
    if (!displayInput.value.includes('.')) {
      // Add decimal point only if it doesn't already exist
      displayInput.value += '';
    }
  } else if (displayInput.value === '0') {
    displayInput.value = '';
  }
}

// checkSelectedNum()
updateValues()