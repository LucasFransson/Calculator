
let equation = '';
let result = 0;
let screenBuffer = '0';
const screen = document.querySelector('.screen-main');
const screenHistory = document.querySelector('.screen-history');
initEventListener();

// Functions

// Select and listen for raised (click)events on all .calc-buttons elements. Call the function buttonClick(value) and set value to the text from the button that raised the event 
function initEventListener(){
    document.querySelector('.calc-buttons').    
    addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    });
}

// Takes the text value from the button that raised the event, if it's not a number, call handleSymbol(textValue) else call handleNumber(textValue). 
function buttonClick(textValue){
    if(isNaN(textValue)){
        handleSymbol(textValue);
    }else {
        handleNumber(textValue);

        equation += textValue;
    }
    
    screen.innerText = screenBuffer;    // Update the .screen text to the value of screenBuffer

}

function handleSymbol(symbol){
    switch(symbol){
    case 'C':
        clearAll();
        break;
    case '←': 
        clearLastNumber();
        break;
    case '=': 
        equation = equation.replace('×', '*').replace('÷', '/').replace('−', '-');
        result = eval(equation);
        screen.innerText = result;
        screenHistory.innerText = equation + '=' + result;
        equation = '';
        screenBuffer = result;
        break;
    case '+': 
    case '−':
    case '×':  
    case '÷': 
        screenHistory.innerText = equation + symbol;
        equation+= symbol;
        screenBuffer = '0';
        break;
    }

}

function handleNumber(numberString){
    if(screenBuffer === '0'){
        screenBuffer = numberString;
    }else{
        screenBuffer += numberString;
    } 
}

function clearAll(){
    equation='';
    result=0;
    screenBuffer='0';
    screenHistory.innerText ='';
}

function clearLastNumber(){
    if(screenBuffer.length===1){
        screenBuffer='0';
    } else {
        screenBuffer = screenBuffer.substring(0, screenBuffer.length -1);
    }
}



