let numberRandom
let numberUser
const numbers = document.querySelectorAll('.number')
const kickNumber = document.querySelector('.kick_number')
let msg = document.querySelector('.msg')

document.addEventListener('click', (event) => {
  if(event.target.matches('.number')){
    selectNumber(event.target.id)
    numberUser = parseInt(kickNumber.innerText)
    msg.innerText = 'Your kick will be...'
    msg.style.color = "#333"
  }
})

function selectNumber(id){
  const number = document.getElementById(id);
  kickNumber.innerText = number.innerText
}

function generateNumber() {
  const random = Math.floor(Math.random() * (10 - 1 +1)) + 1
  numberRandom = random
}
generateNumber()
  
function compareValues() {
  if (numberUser > numberRandom) {
    msg.innerText = "kicked high!"
    msg.style.color = "#d93641" 
  } else if (numberUser < numberRandom) {
    msg.innerText = "kicked low!"
    msg.style.color = "#d93641"
  } else {
    msg.innerText = "got it right!"
    msg.style.color = "#1de041"
    generateNumber()
  }
}

document.querySelector('.kick_button').addEventListener('click', compareValues)