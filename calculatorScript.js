// let runningTotalSum = 0;
// let firstNumber;
// let secondNumber;
// let buffer = '0';
// let previousOperator;
// const screen = document.querySelector('.screen');


// // "Executable Code" - This could be placed anywhere in the code since the rest of the code is functions(methods) just like in C#
// initEventListener();


// // Functions
// // Select and listen for raised (click)events on all .calc-buttons elements. Call the function buttonClick(value) and set value to the text from the button that raised the event 
// function initEventListener(){
//     document.querySelector('.calc-buttons').    
//     addEventListener('click',function(event){
//         buttonClick(event.target.innerText);
//     });
// }

// // Takes the text value from the button that raised the event, if it's not a number, call handleSymbol(value) else call handleNumber(value). 
// // This is similiar to the .Click() from C#, or more specifically the code written INSIDE the .Click(). Follows no mandatory conventions and coulde be written however we want to, it is a normal function. This case has a specific param decided by us(text.value)
// function buttonClick(value){
//     if(isNaN(value)){
//         handleSymbol(value);
//     }else {
//         handleNumber(value);
//     }
//     screen.innerText = buffer;    // Update the .screen text to the value of buffer
// }

// // Takes the text value from the button that raised the event, if the buffer(number on screen) is 0 set the buffer to value, otherwise add the value to the current buffet
// function handleNumber(numberString){
//     if(buffer === '0'){
//         buffer = numberString;
//     }else{
//         buffer += numberString;
//     }
// }

// function handleSymbol(symbol){
//     switch(symbol){
//         case 'C': clearAll();
//             break;
//         case '←': clearLastNumber();
//             break;
//         case '=': calculate();
//             break;
//         case '+': 
//         case '−':
//         case '×':  
//         case '÷': 
//             setOperator(symbol);
//             break;  
//     }
// }

// function clearAll() {
//     buffer = '0';
//     firstNumber = 0;
//     secondNumber = 0;
//     runningTotalSum = 0;
// }

// function setOperator(symbol){
//     operator = symbol;
// }

// function add(){
//     return firstNumber + secondNumber;
// }
// function subtract(){
//     return firstNumber - secondNumber;
// }
// function mulitply(){
//     return firstNumber * secondNumber;
// }
// function divide() {
//     return firstNumber / secondNumber;
// }

// function Calculate(operator){
//     if(operator === '+'){
//         sum = add();
//     }else if(operator === '−'){
//         sum = add();
//     }else if(operator === '×'){
//         sum = add();
//     }else if(operator === '÷'){
//         sum = add();
//     }
// }
