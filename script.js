
// Field Variables
let runningTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector('.screen');


init();


// Functions
// Select and listen for raised (click)events on all .calc-buttons elements. Call the function buttonClick(value) and set value to the text from the button that raised the event 
function init(){
    document.querySelector('.calc-buttons').    
    addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    });
}

// Takes the text value from the button that raised the event, if it's not a number, call handleSymbol(value) else call handleNumber(value). 
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    screen.innerText = buffer;    // Update the .screen text to the value of buffer
}

// Takes the text value from the button that raised the event, if the buffer(number on screen) is 0 set the buffer to value, otherwise add the value to the current buffet
function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

// Takes the text value(NaN) from the button that raised the event 
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal=0;
            break;
        case '=':   
            if(previousOperator === null) {    // if previousOperator is null ( aka no arithmethic operation symbol (+,-,x,÷) ) then return null
                return;
            }
            flushOperation(parseInt(buffer));   // else parse the value of the buffer to an int and call the flushOperation (aka calculate) and pass the int
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←': 
            if(buffer.length===1){
                buffer='0';
            } else {
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case '+': 
        case '−':
        case '×':  
        case '÷': 
            handleMath(symbol);    // Call handleMath if the value of the symbol is either one of (+,-,x,÷)
            break;
    }
}

function handleMath(symbol){
    if(buffer==='0'){
        return;    
    }
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';

// Takes the parsed value of the current buffer and perfoms (calculates) different arithmetic calculations based on the value of 'previousOperator'
function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
    }
}
}





