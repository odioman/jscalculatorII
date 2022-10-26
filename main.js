const calcInput = document.querySelector('.calc-input');
const allButtons = document.querySelectorAll('.button');
const lastOperationScreen = document.querySelector(".lastOperationScreen");

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        

    if (value === '=') {
        if (calcInput.innerText.includes('/')) {
            const split = calcInput.innerText.split('/')
            operate('/', split[0], split[1])
            lastOperationScreen.textContent = `${split[0]} / ${split[1]}`
            //takes away equal sign, keeps number
            calcInput.innerText.splice(0,-1)
        }
        if (calcInput.innerText.includes('*')) {
            const split = calcInput.innerText.split('*')
            operate('*', split[0], split[1])
            lastOperationScreen.textContent = `${split[0]} * ${split[1]}`
            //takes away equal sign, keeps number
            calcInput.innerText.splice(0,-1)
        }
        if (calcInput.innerText.includes('+')) {
            const split = calcInput.innerText.split('+')
            operate('+', split[0], split[1])
            lastOperationScreen.textContent = `${split[0]} + ${split[1]}`
            //takes away equal sign, keeps number
            calcInput.innerText.splice(0,-1)
        }             
        if (calcInput.innerText.includes('-')) {
            const split = calcInput.innerText.split('-')
            operate('-', split[0], split[1])
            lastOperationScreen.textContent = `${split[0]} - ${split[1]}`
            calcInput.innerText.splice(0,-1)
        }  
    }   
    calcInput.innerText += value       
        
    if (value === "del") {
        calcInput.innerText = ''
        }
    if (value === "clear") {
        calcInput.innerText = ""; 
        lastOperationScreen.innerText = '';
        }
        
        
    }) 
})

const operate = (operator, value1, value2) => {
    const num1 = Number(value1)
    const num2 = Number(value2)
    if (operator === '/') {
        calcInput.innerText = divide(num1, num2)
        console.log(divide(num1, num2))
    }
    if (operator === '*') {
        calcInput.innerText = multiply(num1, num2)
        console.log(multiply(num1, num2))
    }
    if (operator === '+') {
        calcInput.innerText = add(num1, num2)
        console.log(add(num1, num2))
    }
    if (operator === '-') {
        calcInput.innerText = sub(num1, num2)
        console.log(sub(num1, num2))
    }
}

function add(a,b){
    return Number(a) + Number(b) 
}

function sub(a,b) {
    return Number(a) - Number(b)
}

function multiply(a,b) {
    return Number(a) * Number(b)
}

function divide(a,b) {
    if (b === 0) {
        alert("Cannot Divide By 0")
        calcInput.innerText = ''
        lastOperationScreen = ''
        } else {
        return Math.round(Number(a) / Number(b) * 100)/100
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key >= 0 || event.key <= 9){
        calcInput.innerText += event.key    
    } else if (event.key === "Backspace") {
        calcInput.innerText = '';
    } else if (event.key === "Delete") {
        calcInput.innerText = '';
        lastOperationScreen.innerText = '';
    } else if (event.key === "*") {
        calcInput.innerText += event.key;
    } else if (event.key === '/') {
        calcInput.innerText += event.key;
    } else if (event.key === '+') {
        calcInput.innerText += event.key;
    } else if (event.key === '-') {
        calcInput.innerText += event.key;
    } else if (event.key === '.')
        calcInput.innerText += event.key; 
})

