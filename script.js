const userInput = document.getElementById("userInput")
let expression = ''

function pres(num){
    expression += num
    userInput.value = expression
}

function equal(){
    userInput.value = eval(expression)
    expression = ''
}

function erase(){
    expression = ''
    userInput.value = expression
}